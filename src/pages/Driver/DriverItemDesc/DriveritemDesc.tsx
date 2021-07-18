import styled from '@emotion/styled/macro'

import { colors, spacing } from '@/helpers/shared'

const ContainerDriverItemDesc = styled.div`
  margin-bottom: ${spacing.spacing5};
`
const Label = styled.label`
  color: ${colors.grey};
`
const Value = styled.p`
  color: ${colors.black};;
  margin-top: ${spacing.spacing2};
`

interface DriverItemDescProps {
  label: string
  value: string
}

function DriverItemDesc({ label, value }: DriverItemDescProps) {
  return (
    <ContainerDriverItemDesc>
      <Label>{label}</Label>
      <Value>{value}</Value>
    </ContainerDriverItemDesc>
  )
}

export default DriverItemDesc
