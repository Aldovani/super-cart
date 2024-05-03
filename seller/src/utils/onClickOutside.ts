export function onClickOutside(
  el: MouseEvent,
  element: HTMLDivElement,
  callback: () => void,
) {
  const target = el.target as HTMLElement
  if (!element.contains(target)) callback()
}
