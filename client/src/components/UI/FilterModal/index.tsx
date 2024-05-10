import { Modal } from '../Modal'

type FilterModalProps = {
  filterName: string
  children: React.ReactNode
  filterElement: React.ReactNode
}

export function FilterModal({
  filterName,
  children,
  filterElement,
}: FilterModalProps) {
  return (
    <Modal name={filterName}>
      <Modal.Trigger>{children}</Modal.Trigger>
      <Modal.Container>
        <Modal.Body className="">{filterElement}</Modal.Body>
      </Modal.Container>
    </Modal>
  )
}
