import styled, { keyframes } from 'styled-components'

import { colors } from '@/helpers/shared'

const Spinner = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Loader = styled.div`
  border: 5px solid #f3f3f3;
  border-radius: 50%;
  border-top: 5px solid ${colors.main};
  width: 40px;
  height: 40px;
  animation: ${Spinner} 1s linear infinite;
  margin: 0 auto;
`

function Loading() {
  return <Loader />
}

export default Loading
