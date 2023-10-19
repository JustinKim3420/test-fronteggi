import { ReactElement } from 'react'
import { Container } from '@cloudscape-design/components'

interface FAQGroupProps {
  children: ReactElement
}

const FAQGroup = ({ children }: FAQGroupProps): ReactElement => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default FAQGroup
