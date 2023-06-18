import Link from 'next/link'

export async function getServerSideProps() {
  console.log('server')
  // The contents are displayed on the terminal, not on the client console.
  return {
    props: { time: new Date().toISOString() },
  }
}

export default function Home({ time }) {
  return (
    <>
      <h1>{time}</h1>
      <h1>
        <Link href="/csr">
          <div>CSR로</div>
        </Link>
        <Link href="/ssg">
          <div>SSG로</div>
        </Link>
        <Link href="/isr">
          <div>ISR로</div>
        </Link>
      </h1>
    </>
  )
}
