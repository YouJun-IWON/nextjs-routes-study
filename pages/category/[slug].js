// http://localhost:3000/category/sports?from=event&age=123
import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router'

export default function CategorySlug() {
  const router = useRouter()
  const { slug, from, age } = router.query
  return (
    <>
      <main>
        <h1>
          Category {slug} from {from} {age}
        </h1>
      </main>
    </>
  )
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
