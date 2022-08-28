import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { Input } from 'antd'

import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const schema = z.object({
  email: z.string().min(2),
  age: z.number().min(2),
})

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
  )
}

export default HomePage
