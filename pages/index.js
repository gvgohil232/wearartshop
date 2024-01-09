import Head from 'next/head'
import HomePage from '../src/components/HomePage/HomePage';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Wearart</title>
        <meta name="description" content="Wearart! powered by gvtechnolab" />
        <link rel="icon" href="/wearart.svg" />
      </Head>
      {/* content area */}
      <HomePage />
      {/* !content area */}
    </div>
  )
}
