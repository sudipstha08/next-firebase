import React, { useEffect, useState } from 'react'
import { UserCard, ShadowLoader, Loader } from '../../components'
import axios from 'axios'

import InfinitScroll from 'react-infinite-scroll-component'
import styled from 'styled-components'

const Container = styled.div`
  margin-top: 2rem;
  .listStyle {
    max-width: 300px;
  }

  .title {
    font-weight: 600;
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
  }

  .flagIcon {
    background-image: url(usFlag.png);
    background-repeat: round;
    color: red;
    width: 25px;
    height: 25px;
    position: relative;
    display: block;
    top: -65px;
    left: 182px;
  }

  img {
    border-radius: 0.8em;
  }

  svg {
    font-size: 2em;
    color: lightblue;
    border: 1px solid lightblue;
    border-radius: 0.2em;
    margin: -0.3em 0.1em 0 0;
    padding: 0.1em;
    float: left;
  }
  ul {
    list-style: none;
    display: flex;
    padding: 0;
    display: -webkit-flex; /* Safari */
    -webkit-flex-wrap: wrap; /* Safari 6.1+ */
    flex-wrap: wrap;
    justify-content: center;
    max-width: 800px;
    margin: 0 auto;
  }
  ul li {
    margin: 10px;
    border-radius: 20px;
  }
  b {
    color: rgb(73, 73, 73);
  }

  .SimpleCard-title-3 {
    padding-top: 20px;
  }
  .MuiTypography-body1-43 {
    font-size: 0.675rem;
  }
  .MuiPaper-root-6.MuiPaper-elevation1-9.MuiPaper-rounded-7.MuiCard-root-5.SimpleCard-card-1 {
    border-radius: 20px;
  }
  .MuiTypography-root-34.MuiTypography-body1-43.MuiTypography-colorTextSecondary-67.SimpleCard-pos-4 {
    margin-bottom: 0;
  }
  .MuiPaper-rounded-8 {
    border-radius: 20px;
  }
  .SimpleCard-card-1 {
    border-radius: 20px;
  }
  .wi {
    font-size: 3em;
    color: lightblue;
  }

  .MuiBadge-badge-71.MuiBadge-colorPrimary-72 {
    color: rgb(13, 121, 145);
    font-size: 1.2em;
    background-color: lightblue;
  }
`

const UsersPage = () => {
  const [users, setUsers] = useState<any>([])
  const [count] = useState(20)
  const [start, setStart] = useState(1)
  const [msg, setMessage] = useState('')

  const fetchRandomUsers = () => {
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then(response => {
        setUsers(response.data.results)
      })
  }

  useEffect(() => {
    fetchRandomUsers()
  }, [])

  const handleDelete = userID => {
    const updatedList = users.filter(user => user?.login?.uuid !== userID)
    setUsers(updatedList)
    if (users.length === 1) {
      setMessage('No more users, reload the page to get more')
    }
  }

  const fetchNextUsers = () => {
    setStart(start + count)
    axios
      .get(`https://randomuser.me/api/?results=${count}&start=${start}`)
      .then(response => {
        setUsers(users.concat(response.data.results))
      })
  }

  return (
    <Container className="images">
      <h2 className="title">Infinite Scroll Users List</h2>
      <InfinitScroll
        dataLength={users.length}
        next={fetchNextUsers}
        hasMore={true}
        loader={<Loader />}
        endMessage={msg}
      >
        <ul>
          {users?.map((user, index) => (
            <li key={index}>
              <UserCard
                gender={user?.gender}
                name={
                  user?.name.first.charAt(0).toUpperCase() +
                  user?.name.first.slice(1) +
                  ' ' +
                  user?.name.last.charAt(0).toUpperCase() +
                  user?.name.last.slice(1)
                }
                picture={user?.picture?.medium}
                address={
                  user?.location.city.charAt(0).toUpperCase() +
                  user?.location.city.slice(1) +
                  ', ' +
                  user?.location.state.charAt(0).toUpperCase() +
                  user?.location.state.slice(1)
                }
                email={user?.email}
                id={user?.login.uuid}
                nat={user?.nat}
                onDelete={handleDelete}
              />
            </li>
          ))}
          <ShadowLoader loading />
          <ShadowLoader loading />
          <ShadowLoader loading />
          <ShadowLoader loading />
          <ShadowLoader loading />
          <ShadowLoader loading />
          <ShadowLoader loading />
        </ul>
      </InfinitScroll>
    </Container>
  )
}

export default UsersPage

// https://codesandbox.io/s/0s3wk?file=/src/App.js
