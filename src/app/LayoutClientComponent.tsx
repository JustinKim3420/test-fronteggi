'use client'
import { useEffect } from 'react';
import { useLoginWithRedirect, useAuth } from '@frontegg/nextjs';
import PageHeader from '@/components/PageHeader';

const LayoutClientComponent = ({ children }) => {

  const loginWithRedirect = useLoginWithRedirect()
  const { user, isAuthenticated } = useAuth()


  useEffect(() => {
    if (!isAuthenticated) {
      loginWithRedirect()
    }
  }, [])

  return <div>
    <PageHeader />
    {children}
  </div>
}


export default LayoutClientComponent
