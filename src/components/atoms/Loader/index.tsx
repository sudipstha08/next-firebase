import React from 'react'
import { TouchBallLoading } from 'react-loadingg'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  & > div {
    position: initial !important;
  }
`

interface LoaderProps {
  color?: string
  size?: 'small' | 'large'
}

export const Loader: React.FC<LoaderProps> = ({
  color = 'blue',
  size = 'small',
}: LoaderProps) => {
  return (
    <StyledWrapper className="loader-wrapper">
      <TouchBallLoading color={color} size={size} />
    </StyledWrapper>
  )
}
