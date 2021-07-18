import styled from '@emotion/styled/macro'
import { MoreHorizontal } from 'react-feather'

import { colors, media, spacing } from '@/helpers/shared'
import { UserItemState } from '@/redux/ducks/user'
import DriverItemDesc from '@/pages/Driver/DriverItemDesc'
import UserImage from '@/assets/img/user.png'

const Head = styled.div`
  padding: ${spacing.spacing5};
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  & svg {
    color: ${colors.grey};
  }
`
const DriverId = styled.h4`
  color: ${colors.grey};
  line-height: 20px;
  font-weight: 400;
  & span {
    color: ${colors.main};
    font-weight: 600;
  }
`
const Container = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  flex: 0 0 auto;
  @media (max-width: ${media.small}) {
    width: 100%;
  }
  &:hover ${Head} {
    background-color: ${colors.main};
    & svg {
      color: #ffffff;
    }
  }
  &:hover ${DriverId} {
    color: #ffffff;
    & span {
      color: #ffffff;
    }
  }
`
const Content = styled.div`
  padding: ${spacing.spacing6};
`
const Image = styled.img`
  border-radius: 50%;
  height: 80px;
  margin-bottom: ${spacing.spacing4};
`

interface Props extends UserItemState{
}

function DriverItem({
  username,
  firstName,
  lastName,
  phone,
  email,
  dob,
  image
}: Props) {
  return (
    <Container>
      <Head>
        <DriverId>Driver ID <span>{username}</span></DriverId>
        <MoreHorizontal size="20" />
      </Head>
      <Content>
        <Image src={image || UserImage} />
        <DriverItemDesc label="Nama Driver" value={`${firstName}, ${lastName}`}/>
        <DriverItemDesc label="Telepon" value={phone}/>
        <DriverItemDesc label="Email" value={email}/>
        <DriverItemDesc label="Tanggal Lahir" value={dob}/>
      </Content>
    </Container>
  )
}

export default DriverItem
