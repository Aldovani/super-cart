import { ComponentProps } from 'react'
import { UploadCloud } from 'lucide-react'

type UploadProps = ComponentProps<'input'>

export function Upload({ ...props }: UploadProps) {
  return (
    <div className="flex items-center gap-2 text-gray-400 border border-gray-200 rounded-lg p-3">
      <span className="">
        <UploadCloud />
      </span>
      <span className="text-gray-500">Selecione uma Imagem</span>
      <input className="hidden" type="file" {...props} />
    </div>
  )
}
