import Head from 'next/head'
import { API } from '../utils/api'

export default function Home() {
  API.get('/api/blog').then(data => console.log('dataaa', data))
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
