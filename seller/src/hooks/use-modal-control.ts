import { AnimationEvent, useEffect, useState } from 'react'

import { useSetSearchParams } from './use-set-searchParams'

type UseModalControlProps = {
  searchParamsName: string
  animationNameOnEnd: string
  setParams?: Array<[string, string]>
}

export function useModalControl({
  searchParamsName,
  animationNameOnEnd,
  setParams = [],
}: UseModalControlProps) {
  const { handleSetSearchParams, searchParams } = useSetSearchParams()

  const [isOpen, setIsOpen] = useState(
    searchParams.has(searchParamsName, 'true'),
  )
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (!isOpen && isClosing) {
      handleSetSearchParams([searchParamsName, ''], ...setParams)
    }
  }, [handleSetSearchParams, isOpen, searchParamsName, isClosing, setParams])

  function handleToggle(value: boolean) {
    setIsOpen(value)
  }

  function handleCloseOnAnimationEnd(e: AnimationEvent<HTMLDivElement>) {
    if (e.animationName === animationNameOnEnd) {
      setIsClosing(true)
    }
  }

  return { handleToggle, setIsClosing, isOpen, handleCloseOnAnimationEnd }
}
