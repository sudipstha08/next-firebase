import React from 'react'
import { Skeleton } from 'antd'
import styled from 'styled-components'

interface IProps {
  loading?: boolean
}

const StyledSkeleton = styled(Skeleton)`
  width: 240px;
  display: flex;
  flex-direction: column;
  & .ant-skeleton-avatar {
    width: 100%;
    height: 200px;
    border-radius: 8px !important;
  }
`

const ShadowLoader = ({ loading }: IProps) => {
  return (
    <StyledSkeleton
      loading={loading}
      active
      avatar
      title
      shape="square"
      width={50}
    >
      <Skeleton.Avatar active={loading} size={'large'} shape={'square'} />
      <Skeleton.Input active={loading} size={'large'} />
      <Skeleton.Input active={loading} size={'large'} />
      <Skeleton.Button active={loading} size={'default'} shape={'square'} />
    </StyledSkeleton>
  )
}

export { ShadowLoader }
