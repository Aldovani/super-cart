type ProgressBarProps = {
  value: number
  currentValue: number
}

export function ProgressBar({ currentValue, value }: ProgressBarProps) {
  const progress = (currentValue / value) * 100

  return (
    <div className="bg-gray-100 w-full h-1  overflow-hidden">
      <div
        className="bg-emerald-600 h-1 "
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}
