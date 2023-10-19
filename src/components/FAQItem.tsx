import { ReactElement } from 'react'
import { ExpandableSection } from '@cloudscape-design/components'

interface FAQItemProps {
  header: string
  children: ReactElement
}

const FAQItem = ({ header, children }: FAQItemProps): ReactElement => {
  return (
    <ExpandableSection variant='footer' headerText={header} headingTagOverride='h5'>
      { children }
    </ExpandableSection>
  )
}

export default FAQItem
