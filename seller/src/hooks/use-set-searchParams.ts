import { useCallback } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

type handleSetSearchParamsProps = [string, string]

export function useSetSearchParams() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleSetSearchParams = useCallback(
    (...params: handleSetSearchParamsProps[]) => {
      const current = new URLSearchParams(Array.from(searchParams.entries()))

      params.forEach((item) => {
        if (item[1] === '') {
          current.delete(item[0])
          return
        }
        current.set(item[0], item[1])
      })

      const search = current.toString()
      const query = search ? `?${search}` : ''

      router.push(`${pathname}${query}`)
    },
    [pathname, router, searchParams],
  )

  return {
    searchParams,
    handleSetSearchParams,
  }
}
