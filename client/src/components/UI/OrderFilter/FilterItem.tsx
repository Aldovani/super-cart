import { ComponentProps } from 'react'

type FilterItemProps = {
  icon: React.ReactNode
} & ComponentProps<'input'>
export function FilterItem({ icon, id, value, ...props }: FilterItemProps) {
  return (
    <div>
      <input type="checkbox" className="hidden" id={id} {...props} />
      <label
        htmlFor={id}
        className="border border-gray-200 rounded-lg gap-2  p-5 flex flex-col items-center justify-center"
      >
        {icon}
        <span className="text-gray-500 text-lg font-medium">{value}</span>
      </label>
    </div>
  )
}
