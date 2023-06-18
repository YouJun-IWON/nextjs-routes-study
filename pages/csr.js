import Layout from '@/components/Layout'
import SubLayout from '@/components/SubLayout'
import { useEffect, useState } from 'react'

export async function getServerSideProps() {
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function CSR() {
  const [time, setTime] = useState()

  useEffect(() => {
    console.log('client')
    setTime(new Date().toISOString())
  }, [])

  return (
    <>
      <h1>{time}</h1>
    </>
  )
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  )
}
