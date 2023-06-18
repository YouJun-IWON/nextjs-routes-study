// http://localhost:3000/youjun/info
import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function UsernameInfo() {
  const router = useRouter()
  const { uid } = router.query
  const [name, setName] = useState('')

  // useEffect(() => {
  //   fetch('/api/user')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setName(data.name)
  //     })
  // }, [])
  // It can be undefined when first rendered by the client.
  // For this reason, the code should be set as below.
  useEffect(() => {
    if (uid != null) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name)
        })
    }
  }, [uid])

  return (
    <>
      <main>
        <h1>UsernameInfo {name}</h1>
      </main>
    </>
  )
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
