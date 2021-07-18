import styled from '@emotion/styled/macro'

import { colors, spacing } from '@/helpers/shared'

interface StyledProps {
  type: string
}

const Container = styled.div<StyledProps>`
  padding: ${spacing.spacing4} ${spacing.spacing5};
  border: 1px solid ${({ type }) => type === 'error' ? colors.main : colors.warning};
  color: ${({ type }) => type === 'error' ? colors.main : '#664d03'};
  border-radius: 6px;
  background-color: ${({ type }) => type === 'error' ? 'rgba(255, 70, 70, 0.3)' : 'rgba(246, 229, 141, 0.3)'};
`

interface Props {
  type: 'error' | 'warning'
  message: string
}

function Notif({
  message,
  type
}: Props) {
  return (
    <Container type={type}>
      <p>{message}</p>
    </Container>
  )
}

export default Notif
