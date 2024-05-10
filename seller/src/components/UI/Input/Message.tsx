type MessageProps = {
  message?: string
}
export function Message({ message }: MessageProps) {
  return message && <p className=" text-rose-600">{message}</p>
}
