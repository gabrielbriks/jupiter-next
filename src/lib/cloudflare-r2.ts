import { env } from '@/env'
import { S3Client } from '@aws-sdk/client-s3'

const endpoint = `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`

export const r2 = new S3Client({
  region: 'auto',
  endpoint,
  credentials: {
    accessKeyId: env.CLOUDFLARE_ACCESS_KEY,
    secretAccessKey: env.CLOUDFLARE_SECRET_KEY,
  },
})

export function buildStorageURL(key: string) {
  const bucket = env.CLOUDFLARE_BUCKET_NAME
  const url = new URL(`${bucket}/${key}`, endpoint)

  return url.toString()
}
