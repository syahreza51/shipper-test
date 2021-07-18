import styled from '@emotion/styled/macro'
import { Calendar, Home, Users } from 'react-feather'

import { media, spacing } from '@/helpers/shared'
import ShipperLogo from '@/assets/img/shipperLogo.png'
import LayoutSidebarItem from './SidebarItem'
import { PropsFromRedux } from './Action'

interface ContainerProps {
  isVisibleSidebar: boolean
}
const Container = styled.div<ContainerProps>`
  height: 100vh;
  width: 100%;
  max-width: 14rem;
  transition: all .3s ease-out;
  overflow: hidden;
  @media (max-width: ${media.mobile}) {
    display: ${({ isVisibleSidebar }) => isVisibleSidebar ? 'block' : 'none'};
    ${({ isVisibleSidebar }) => isVisibleSidebar && `
      display: block;
      position: fixed;
      background-color: #fff;
      z-index: 3;
    `};
  }
`
const ContainerLogo = styled.div`
  padding: ${spacing.spacing5};
  margin-bottom: ${spacing.spacing5};
`
const Img = styled.img`
  height: 28px;
  width: auto;
`
const ContainerNav = styled.div`
  height: auto;
  width: 100%;
  overflow-x: hidden;
`


const SIZE_ICON = 20

function LayoutSidebar({ isVisibleSidebar }: PropsFromRedux) {
  return (
    <Container isVisibleSidebar={isVisibleSidebar}>
      <ContainerLogo>
        <Img src={ShipperLogo} />
      </ContainerLogo>
      <ContainerNav>
        <LayoutSidebarItem linkTo="/" label="Beranda" icon={<Home size={SIZE_ICON} />} />
        <LayoutSidebarItem isActive linkTo="/" label="Driver Management" icon={<Users size={SIZE_ICON} />} />
        <LayoutSidebarItem linkTo="/" label="Pickup" icon={<Calendar size={SIZE_ICON} />} />
      </ContainerNav>
    </Container>
  )
}

export default LayoutSidebar
