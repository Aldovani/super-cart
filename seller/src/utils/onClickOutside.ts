export function onClickOutside(
  el: MouseEvent,
  element: HTMLDivElement,
  callback: () => void,
) {
  // document.addEventListener('click', (e) => {
  const target = el.target as HTMLElement
  console.log(element)
  if (!element.contains(target)) callback()
  // })
}
