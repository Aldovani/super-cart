import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

import { Spinner } from '../Spinner'

const button = tv({
  base: 'w-full outline-none  h-12 flex items-center justify-center leading-[24px] py-4 rounded-lg font-medium text-lg ',
  variants: {
    variants: {
      primary:
        'bg-emerald-600 text-gray-50 hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-emerald-700 ',
      secondary:
        'border border-gray-200 text-gray-500 bg-white hover:bg-gray-100 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-gray-300  ',
      ghost: 'hover:bg-gray-100',
    },
    action: {
      normal: '',
      dangerous: 'text-rose-500',
    },
    isLoading: {
      true: 'opacity-60  hover:opacity-60',
    },
    disable: {
      true: 'opacity-60  hover:opacity-60',
    },
    sizes: {
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variants: 'primary',
    action: 'normal',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    children?: React.ReactNode
  }
export function Button({
  action,
  children,
  className,
  variants,
  isLoading,
  sizes,
  disable,
  ...res
}: ButtonProps) {
  return (
    <button
      {...res}
      className={button({
        className,
        variants,
        action,
        isLoading,
        sizes,
        disable,
      })}
      disabled={disable}
    >
      {!isLoading && children}
      {isLoading && (
        <div className="flex items-center justify-center gap-2 ">
          <Spinner />
          <span>Carregando...</span>
        </div>
      )}
    </button>
  )
}
