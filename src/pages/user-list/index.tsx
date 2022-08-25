import React from 'react'
import 'antd/dist/antd.css'
import { Select, Spin } from 'antd'
import debounce from 'lodash/debounce'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 500px;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
`

function DebounceSelect({ fetchOptions, debounceTimeout = 800, ...props }) {
  const [fetching, setFetching] = React.useState(false)
  const [options, setOptions] = React.useState([])
  const fetchRef = React.useRef(0)
  const debounceFetcher = React.useMemo(() => {
    const loadOptions = value => {
      fetchRef.current += 1
      const fetchId = fetchRef.current
      setOptions([])
      setFetching(true)
      fetchOptions(value).then(newOptions => {
        if (fetchId !== fetchRef.current) {
          // for fetch callback order
          return
        }

        setOptions(newOptions)
        setFetching(false)
      })
    }

    return debounce(loadOptions, debounceTimeout)
  }, [fetchOptions, debounceTimeout])
  return (
    <Select
      labelInValue
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={fetching ? <Spin size="small" /> : null}
      {...props}
      options={options}
    />
  )
} // Usage of DebounceSelect

async function fetchUserList(username) {
  return fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(body =>
      body.results.map(user => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      })),
    )
}

const UserList = () => {
  const [value, setValue] = React.useState([])
  return (
    <Wrapper>
      <DebounceSelect
        mode="multiple"
        value={value}
        placeholder="Select users"
        fetchOptions={fetchUserList}
        onChange={newValue => {
          setValue(newValue)
        }}
        style={{
          width: '100%',
        }}
      />
    </Wrapper>
  )
}

export default UserList
