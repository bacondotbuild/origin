import { createTRPCRouter, publicProcedure } from '../trpc'
import type { Content } from '@/lib/fetchContent'
import fetchContent from '@/lib/fetchContent'

export const exampleRouter = createTRPCRouter({
  getContent: publicProcedure.query(async () => {
    const data: Content = await fetchContent()
    return data
  }),
})
