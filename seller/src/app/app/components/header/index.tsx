'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export function Header() {
  const pathName = usePathname()
  const pages = pathName.replace('app', 'dashboard').split('/').slice(2)

  const isFirstPage = pages.length === 0

  function createPathName(index: number) {
    const initialPath = '/app/'
    return initialPath + pages.slice(0, index + 1).join('/')
  }

  return (
    <header className="pl-10 text-gray-500 row-start-1 row-end-2 col-start-2 col-end-3 flex items-center border-b border-gray-200">
      <Breadcrumb>
        <BreadcrumbList>
          {!isFirstPage && (
            <React.Fragment key="dashboard">
              <BreadcrumbItem>
                <BreadcrumbLink href="/app">Dashboard</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </React.Fragment>
          )}
          {isFirstPage && (
            <BreadcrumbItem key="dashboard">
              <BreadcrumbPage className="text-emerald-600">
                Dashboard
              </BreadcrumbPage>
            </BreadcrumbItem>
          )}
          {pages.map((page, index) => (
            <React.Fragment key={`navigation-links`}>
              {index < pages.length - 1 && (
                <React.Fragment key={`header-${index}`}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={createPathName(index)}>
                      {page.replace('-', ' ')}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                </React.Fragment>
              )}

              {index + 1 === pages.length && (
                <BreadcrumbItem key="current-page">
                  <BreadcrumbPage className="text-emerald-600">
                    {page.replace('-', ' ')}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </React.Fragment>
          ))}{' '}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  )
}
