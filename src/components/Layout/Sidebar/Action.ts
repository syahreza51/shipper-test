import { connect, ConnectedProps } from 'react-redux'

import { AppState } from '@/redux/configureStore'

import LayoutSidebar from './Sidebar'

const mapState = ({ general }: AppState) => ({
  isVisibleSidebar: general.isVisibleSidebar
})

const connector = connect(mapState)

export type PropsFromRedux = ConnectedProps<typeof connector>
export default connector(LayoutSidebar)
