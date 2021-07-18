import styled from '@emotion/styled/macro'
import { AlignJustify } from 'react-feather'

import { colors, media, spacing } from '@/helpers/shared'
import UserImage from '@/assets/img/user.png'
import ShipperLogo from '@/assets/img/shipperLogo.png'
import { PropsFromRedux } from './Action'

const Container = styled.div`
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${spacing.spacing5} 30px;
  @media (max-width: ${media.mobile}) {
    justify-content: space-between
  }
`

const ContainerLeft = styled.div`
  display: none;
  @media (max-width: ${media.mobile}) {
    display: flex
    align-items: center;
  }
`
const ContainerRight = styled.div`
  display: flex;
  font-size: 12px;
  display: flex;
  align-items: center;
`
const Image = styled.img`
  height: 35px;
  margin-left: ${spacing.spacing5};
`
const Label = styled.span`
  color: #444444;
  @media (max-width: ${media.mobile}) {
    display: none;
  }
`
const Name = styled.span`
  color: ${colors.main};
  font-weight: bold
`
const Logo = styled.img`
  height: 24px;
  width: auto;
  margin-left: ${spacing.spacing5};
  @media (max-width: ${media.extraSmall}) {
    height: 20px;
  }
`

function LayoutHeader({ dispatchGeneralVisibleSidebarSet }: PropsFromRedux) {
  return (
    <Container>
      <ContainerLeft>
        <AlignJustify size="22" onClick={dispatchGeneralVisibleSidebarSet} />
        <Logo src={ShipperLogo} />
      </ContainerLeft>
      <ContainerRight>
        <Label>
          Hello, <Name>Syahreza</Name>
        </Label>
        <Image src={UserImage} />
      </ContainerRight>
    </Container>
  )
}

export default LayoutHeader
