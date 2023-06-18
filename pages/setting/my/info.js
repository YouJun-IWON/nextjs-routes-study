// http://localhost:3000/setting/my/info?status=editing
import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router'
import { useState } from 'react'

export async function getServerSideProps() {
  console.log('getServerSideProps')

  return {
    props: {},
  }
}

export default function CartDateSlug() {
  const router = useRouter()
  const [clicked, setClicked] = useState(false)
  const { status = 'initial' } = router.query
  return (
    <>
      {/* Do not maintain local state => re-render */}
      {/* Check : console.log('getServerSideProps') */}

      <main>
        <h1>My Info</h1>
        <h1>Clicked: {String(clicked)}</h1>
        <h1>Status: {status}</h1>
        <button
          onClick={() => {
            setClicked(!clicked)
            alert('edit')
            location.replace('/setting/my/info?status=editing')
          }}
        >
          edit(replace)
        </button>
        <br />
        {/* maintain local state / generate data fetching */}
        {/* Check : console.log('getServerSideProps') */}
        <button
          onClick={() => {
            setClicked(!clicked)
            alert('edit')
            router.push('/setting/my/info?status=editing')
          }}
        >
          edit(replace)
        </button>
        <br />
        {/* maintain local state / Do not generate data fetching */}
        {/* Do not check : console.log('getServerSideProps') */}
        <button
          onClick={() => {
            setClicked(!clicked)
            alert('edit')
            router.push('/setting/my/info?status=editing', undefined, {
              shallow: true,
            })
          }}
        >
          edit(replace)
        </button>
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
