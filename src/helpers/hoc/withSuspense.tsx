import { Suspense } from 'react'

import Loading from '@/components/Loading'

function withSuspense(Component: React.ComponentType) {
  return () => (
    <Suspense fallback={<Loading />}>
      <Component />
    </Suspense>
  )
}

export default withSuspense
