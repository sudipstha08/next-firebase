/* eslint-disable no-console */
import React, { ReactElement, ReactNode } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input } from 'antd'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().min(2),
  age: z.number().min(2),
})

function ContentTitle({ children }: { children: string }): ReactElement {
  return <h1>{children}</h1>
}

//defaultProps
const defaultContainerProps = {
  heading: <strong>My Heading</strong>,
}

type ContainerProps = { children: ReactNode } & typeof defaultContainerProps

function Container({ heading, children }: ContainerProps): ReactElement {
  return (
    <div>
      <h1>{heading}</h1>
      {children}
    </div>
  )
}

Container.defaultProps = defaultContainerProps

const HomePage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      age: '',
    },
    resolver: zodResolver(schema),
  })
  const onSubmit = data => console.log(data)
  console.log('ERRORS', errors)

  return (
    <>
      <ContentTitle>REACT HOOK FORM</ContentTitle>
      <Container>Hello</Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Basic usage"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              placeholder="Basic usage"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
        <input type="submit" />
      </form>
    </>
  )
}

export default HomePage
