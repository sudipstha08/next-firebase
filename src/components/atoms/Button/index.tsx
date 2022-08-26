import React, { FC } from 'react'

interface IProps {
  label: string
  onClick: () => void
}
const Button: FC<IProps> = ({ label, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{label}</button>
    </div>
  )
}

export { Button }
