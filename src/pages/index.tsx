import type { InferGetStaticPropsType } from 'next'

import Main from '@/components/design/main'
import Page from '@/components/page'
import type { Content } from '@/lib/fetchContent'
import fetchContent from '@/lib/fetchContent'

function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Page>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <article
            className='prose prose-invert'
            dangerouslySetInnerHTML={{ __html: props?.markdown }}
          />
        </div>
      </Main>
    </Page>
  )
}

export const getStaticProps = async () => {
  const data: Content = await fetchContent()
  return {
    props: data,
    revalidate: 1,
  }
}

export default Home
