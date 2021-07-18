import { ReactNode } from 'react'
import styled from '@emotion/styled/macro'

import { colors } from '@/helpers/shared'

interface Props {
  isActive: boolean
}
const ContainerActive = `
  border-left-color: ${colors.main};
  background-color: #fafafa;
`
const Container = styled.div<Props>`
  border-left: 6px solid transparent;
  width: 100%;
  min-width: 200px;
  cursor: pointer;
  ${({ isActive }) => isActive && ContainerActive};
  &:hover {
    ${ContainerActive}
  }
`
const Link = styled.span<Props>`
  text-decoration: none;
  color: ${({ isActive }) => isActive ? colors.main : colors.black};
`
const Content = styled.div`
  height: 100%;
  width: 100%;
  padding: 15px 18px;
  display: flex;
  align-items: center;
`
const Label = styled.span`
  margin-left: 15px;
  font-size: 13px;
  line-height: 17px;
`

interface ViewProps {
  icon: ReactNode
  isActive?: boolean
  label: string
  linkTo: string
}

function LayoutSidebarItem({
  icon,
  isActive,
  label,
  linkTo
}: ViewProps) {
  return (
    <Container isActive={!!isActive}>
      <Link isActive={!!isActive}>
        <Content>
          {icon}
          <Label>{label}</Label>
        </Content>
      </Link>
    </Container>
  )
}

export default LayoutSidebarItem
