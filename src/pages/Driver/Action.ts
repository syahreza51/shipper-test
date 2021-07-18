import { connect, ConnectedProps } from 'react-redux'

import { AppState } from '@/redux/configureStore'
import { userFetch } from '@/redux/ducks/user'

import DriverContainer from './Container'

const mapState = ({ user }: AppState) => ({
  user
})

const mapDispatch = {
  dispatchUserFetch: userFetch
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(DriverContainer)
