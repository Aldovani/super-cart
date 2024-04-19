import { ComponentProps } from 'react'

type CheckboxProps = {
  htmlFor: string
  label: string
} & ComponentProps<'input'>

export function Checkbox({ htmlFor, label, ...props }: CheckboxProps) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex  hover:bg-slate-100 rounded-md cursor-pointer gap-4 px-4 py-2"
    >
      <input type="checkbox" id={htmlFor} {...props} />
      <span className="text-gray-500 ">{label}</span>
    </label>
  )
}
