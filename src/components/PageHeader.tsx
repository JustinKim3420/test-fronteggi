'use client'

import React, { useCallback } from 'react'
import { TopNavigation } from '@cloudscape-design/components'
import { useRouter } from 'next/navigation'
import { AdminPortal, useAuth } from '@frontegg/nextjs'

const PageHeader = (): React.ReactElement => {
  const router = useRouter()
  const { user } = useAuth()
  const ANONYMOUS_PICTURE_URL = 'https://static.vecteezy.com/system/resources/previews/001/840/618/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg'

  const logout = useCallback(() => {
    router.replace('/account/logout')
  }, [router])

  return (
    <TopNavigation
      data-cy='page-top-navigation'
      identity={{
        href: '/',
        onFollow: () => {
          router.push('/')
        }
      }}
      utilities={[
        {
          type: 'menu-dropdown',
          iconUrl: user?.profilePictureUrl ?? ANONYMOUS_PICTURE_URL,
          text: user?.name,
          description: user?.email,
          onItemClick: ({ detail }) => {
            if (detail.id === 'signout') {
              console.log(detail.id)
              logout()
            }
            if (detail.id === 'settings') {
              AdminPortal.show()
            }
          },
          items: [
            { id: 'settings', text: 'Settings', href: '#' },
            { id: 'signout', text: 'Sign out', href: '#' }
          ]
        }
      ]}
      i18nStrings={
        {
          overflowMenuTriggerText: 'More',
          overflowMenuTitleText: 'All'
        }
      }
    />
  )
}
export default PageHeader
