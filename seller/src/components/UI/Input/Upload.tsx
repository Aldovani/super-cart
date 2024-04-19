import { ComponentProps, forwardRef, Ref } from 'react'
import { UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const upload = tv({
  base: 'flex items-center gap-2 text-gray-400 border border-gray-200 rounded-lg p-3  focus:outline-offset-2 focus:border-emerald-600/20 focus:outline-emerald-600',
  variants: {
    error: {
      true: '  border-rose-500 focus:outline-rose-500  focus:border-rose-500  focus:text-red-500 placeholder:text-red-400 ',
    },
  },
})

type UploadProps = ComponentProps<'input'> &
  VariantProps<typeof upload> & {
    children?: React.ReactElement
  }

export const Upload = forwardRef(function (
  { className, error, ...props }: UploadProps,
  ref: Ref<HTMLInputElement> | null,
) {
  return (
    <div className={upload({ className, error })}>
      <span>
        <UploadCloud />
      </span>
      <span className="text-gray-500">Selecione uma Imagem</span>
      <input className="hidden" type="file" {...props} ref={ref} />
    </div>
  )
})

Upload.displayName = 'UploadInput'
