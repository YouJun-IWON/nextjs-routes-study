// http://localhost:3000/cart/2022/06/25
import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router'

export default function CartDateSlug() {
  const router = useRouter()
  const { data } = router.query
  return (
    <>
      <main>
        <h1>CartDate Slug</h1>
        <button onClick={() => router.push('/cart/2022/06/25')}>Cart</button>
      </main>
    </>
  )
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
