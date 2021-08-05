import { Env } from './env/Env'

export const Cfg = {
  CORS_WHITELIST: Env('CORS_WHITELIST'),
  REGION: 'ap-southeast-1',

  DB_PAYLOAD_DATA: Env('DB_PAYLOAD_DATA'),
  DB_QRCODE_DATA: Env('DB_QRCODE_DATA')
}
