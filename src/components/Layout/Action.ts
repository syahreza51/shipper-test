import { connect, ConnectedProps } from 'react-redux'

import { AppState } from '@/redux/configureStore'
import { generalVisibleSidebarSet } from '@/redux/ducks/general'

import Layout from './Layout'

const mapState = ({ general }: AppState) => ({
  isVisibleSidebar: general.isVisibleSidebar
})

const mapDispatch = {
  dispatchGeneralVisibleSidebarSet: generalVisibleSidebarSet
}

const connector = connect(mapState, mapDispatch)

export type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(Layout)
