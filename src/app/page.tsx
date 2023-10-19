'use client'

import { ReactElement } from 'react'
import { QueryResult, useQuery } from '@apollo/client'
import { useParams, usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'

import { AppLayout, Box, BreadcrumbGroup, Link, SpaceBetween, Spinner } from '@cloudscape-design/components'

const Page = (): ReactElement => {
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const organizationSlug = params?.organizationSlug as string

  return <AppLayout
    breadcrumbs={
      <BreadcrumbGroup
        items={[
          { text: 'Home', href: '#/' }
        ]}
        onClick={({ detail }) => {
          router.push(detail.href.split('#')[1])
        }}
      />
    }
    content={<div>Hello from origin</div>}
    toolsHide
    navigationHide={pathname === '/'}
  />
}

export default Page
