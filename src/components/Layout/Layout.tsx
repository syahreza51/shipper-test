import { ReactNode } from 'react'
import styled from '@emotion/styled/macro'

import { media } from '@/helpers/shared'
import LayoutSidebar from './Sidebar'
import LayoutHeader from './Header'
import { PropsFromRedux } from './Action'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: stretch;
`
const ContainerContent = styled.div`
  width: calc(100% - 12rem);
  min-height: 100vh;
  @media (max-width: ${media.mobile}) {
    width: 100%
  }
`
const ContainerMainContent = styled.div`
  background-color: #fafafa;
  height: calc(100% - 64px);
  width: 100%;
`
const Overlay = styled.div`
  background-color: rgba(0,0,0,0.7);
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 2;
`

interface Props extends PropsFromRedux {
  children: ReactNode
}

function Layout({
  children,
  isVisibleSidebar,
  dispatchGeneralVisibleSidebarSet
}: Props){
  return (
    <Container>
      {isVisibleSidebar && <Overlay onClick={dispatchGeneralVisibleSidebarSet} />}
      <LayoutSidebar />
      <ContainerContent>
        <LayoutHeader />
        <ContainerMainContent>
          {children}
        </ContainerMainContent>
      </ContainerContent>
    </Container>
  )
}

export default Layout
