import React, { useState } from 'react'
import { Button, Input } from 'antd'
import { useLinkedState } from '../lib/LinkedState'
import { onQRCodeScanned, receivingStore } from '../pages/receiving/ReceivingStore'
import QrReader from 'react-qr-reader'
import Webcam from 'react-webcam'

export type QRCodeScannerProps = {
  size?: number
  onQRCodeScanned: (content: string) => void
}
// TODO: Replace with a real QRCode scanner
export const QRCodeScanner = ({ size = 256, onQRCodeScanned }: QRCodeScannerProps) => {
  const [content, setContent] = useState<string>('')

  const handleError = (err: any) => {
    console.error(err)
  }
  const onScan = async (hash: string | null) => {
    if (hash) {
      onQRCodeScanned(hash)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: size,
        gap: '10px',
        alignItems: 'center'
      }}
    >
      <QrReader delay={1000} onError={handleError} onScan={onScan} style={{ width: '100%' }} />
      <Input value={content} onChange={e => setContent(e.target.value)} />
      <Button onClick={() => onQRCodeScanned(content)}>onQRCodeScanned()</Button>
    </div>
  )
}
