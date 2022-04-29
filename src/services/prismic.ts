import { Client } from '@prismicio/client'

export function createClient(req?: unknown) {
  const prismic = new Client(process.env.PRISMIC_ENDPOINT as string)
  return prismic
}
