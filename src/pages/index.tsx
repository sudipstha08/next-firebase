/* eslint-disable no-console */
import Head from 'next/head'
import { ReactNode, useState } from 'react'
import { API } from '../utils/api'

// Functional Props
function TextWithNumber({
  header,
  children,
}: {
  header?: (num: number) => ReactNode
  children: (num: number) => ReactNode
}) {
  const [state, setState] = useState(1)
  return (
    <div>
      <h1>{header?.(state)}</h1>
      <div>{children(state)}</div>
      <div>
        <button onClick={() => setState(prevNum => prevNum + 1)}>Add</button>
      </div>
    </div>
  )
}

// Generic type
function List<ListItem>({
  items,
  render,
}: {
  items: ListItem[]
  render: (item: ListItem) => ReactNode
}) {
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{render(item)}</li>
      ))}
    </ul>
  )
}

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
        <TextWithNumber header={(num: number) => <>Header{num}</>}>
          {(num: number) => <div>Your number is {num}</div>}
        </TextWithNumber>

        <br />
        <List
          items={['Tiger', 'Monkey', 'Hamming']}
          render={(item: string) => <>{item.toUpperCase()}</>}
        />
      </main>
    </div>
  )
}
