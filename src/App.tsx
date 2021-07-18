import { Provider } from 'react-redux'

import { configureStore } from '@/redux/configureStore'

import Layout from '@/components/Layout'
import Routes from '@/pages/routes/Index'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <Routes />
      </Layout>
    </Provider>
  )
}

export default App;
