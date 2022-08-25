/* eslint-disable no-console */
import Head from 'next/head'
import { API } from '../utils/api'

export default function Home() {
  const test = async () => {
    try {
      const data = await API.get('/api/comments')
      console.log('data', data)
    } catch (err) {
      console.log('err', err)
    }
  }

  test()

  return (
    <div className="home">
      <Head>
        <title>IndexPage</title>
        <meta name="description" content="Index page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        This is the index page 🔥
        <div>Happy coding 😉</div>
      </main>
    </div>
  )
}
