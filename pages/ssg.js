import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'

export async function getStaticProps() {
  console.log('server')
  return {
    props: { time: new Date().toISOString() },
    revalidate: 1,
  }
}

export default function SSG({ time }) {
  return (
    <>
      <main>
        <h1>{time}</h1>
      </main>
    </>
  )
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
