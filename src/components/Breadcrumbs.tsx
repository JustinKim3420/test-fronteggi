import { ReactElement } from 'react'
import { useParams, useRouter } from 'next/navigation'

import { useQuery } from '@apollo/client'
import { GitHubOrganization, GitHubOrganizationVariables } from '@/apiclient/__generated__/GitHubOrganization'
import { gitHubOrganizationQuery } from '@/apiclient/getGitHubOrganization'

import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group'
import Spinner from '@cloudscape-design/components/spinner'
import Box from '@cloudscape-design/components/box'

const Breadcrumbs = (): ReactElement => {
  const router = useRouter()
  const params = useParams()
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
  const organizationSlug = params.organizationSlug as string

  const { data: organizationData, loading: organizationLoading } = useQuery<GitHubOrganization, GitHubOrganizationVariables>(gitHubOrganizationQuery, {
    skip: params.organizationSlug == null,
    variables: {
      organizationSlug
    }
  })

  const organizationNameBreadcrumb = organizationData?.currentUser.gitHubOrganization == null ? [] : [{ text: 'Home', href: `#/user/${organizationData?.currentUser.gitHubOrganization.id}` }]

  if (organizationLoading) { return <Box><Spinner size='normal' /></Box> }

  return <BreadcrumbGroup
    items={[
      ...organizationNameBreadcrumb
    ]}
    onClick={({ detail }) => {
      router.push(detail.href.split('#')[1])
    }}
  />
}

export default Breadcrumbs
