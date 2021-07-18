import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

import { colors, spacing } from '@/helpers/shared'

const Container = styled.div`
  position: relative;
  display: inline-block;
  > svg , img {
    position: absolute;
    left: 9px;
    top: 11px;
    height: 20px;
    color: ${colors.main}
  }
`

interface InputProps {
  hasIcon: boolean
}

const Pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,70,70, 0.4);
  }
  70% {
      box-shadow: 0 0 0 10px rgba(255,70,70, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(255,70,70, 0);
  }
`

const Input = styled.input<InputProps>`
  appearance: none;
  padding: ${spacing.spacing4} ${spacing.spacing4} ${spacing.spacing4} ${({ hasIcon }) => hasIcon ? `40px` : spacing.spacing4};
  outline: none;
  border: 1px solid #eee;
  border-radius: 3px;
  box-shadow: none;
  background-color: #fff;
  &:focus {
    border: 1px solid ${colors.main};
    outline: none;
    animation: ${Pulse} .8s linear;
  }
`

interface Props {
  icon?: ReactNode
  placeholder?: string
  [key: string]: any
}

function TextField({
  icon,
  placeholder,
  ...props
}: Props) {
  return (
    <Container>
      {icon}
      <Input placeholder={placeholder} type="text" {...props} hasIcon={!!icon} data-testid="text" />
    </Container>
  )
}

export default TextField
