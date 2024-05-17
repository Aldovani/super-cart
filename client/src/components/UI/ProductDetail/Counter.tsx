'use client'

import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter((prev) => prev + 1)
  }
  function handleDisinterment() {
    setCounter((prev) => {
      if (prev === 0) return 0

      return prev - 1
    })
  }

  return (
    <div className="flex items-center gap-8 rounded-lg text-gray-500 text-xl border border-gray-200 ">
      <button
        onClick={handleDisinterment}
        className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-2xl hover:text-emerald-600"
      >
        -
      </button>
      <span className="w-10 text-center text-gray-600">{counter}</span>
      <button
        onClick={handleIncrement}
        className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-2xl hover:text-emerald-600"
      >
        +
      </button>
    </div>
  )
}
