
import { FormEvent, ReactElement } from 'react'
import { ApolloError } from '@apollo/client'

import Modal from '@cloudscape-design/components/modal'
import Header from '@cloudscape-design/components/header'
import Form from '@cloudscape-design/components/form'
import SpaceBetween from '@cloudscape-design/components/space-between'
import Button from '@cloudscape-design/components/button'
import Spinner from '@cloudscape-design/components/spinner'

interface ICreateModal {
  showModal: boolean
  handleFormSubmit: (e: FormEvent) => void
  handleDismiss: () => void
  mutationLoading: boolean
  children: ReactElement | ReactElement[]
  mutationError?: ApolloError
  header?: string
  disableCreate?: boolean
}

const CreateModal = ({ showModal, handleFormSubmit, handleDismiss, mutationLoading, mutationError, header, disableCreate, children }: ICreateModal): ReactElement => {
  return <Modal
    data-cy='createModal'
    onDismiss={() => { handleDismiss() }}
    size='large'
    visible={showModal}
    header={<Header>{header ?? 'Create a item'}</Header>}
  >
    <form onSubmit={(e) => { handleFormSubmit(e) }}>
      <Form
        errorText={mutationError == null ? '' : 'Unable to create item. Please try again later.'}
        variant='embedded'
        actions={
          <SpaceBetween size='m' direction='horizontal'>
            <Button
              data-cy='cancelSubmitButton'
              variant='normal'
              formAction='none'
              onClick={() => { handleDismiss() }}
              disabled={mutationLoading}
            >
              Cancel
            </Button>
            <Button
              data-cy='createSubmitButton'
              variant='primary'
              formAction='submit'
              disabled={mutationLoading || disableCreate}
            >
              {mutationLoading ? <Spinner size='normal' /> : 'Confirm'}
            </Button>
          </SpaceBetween>
        }
      >
        <SpaceBetween size='s' direction='vertical'>
          {children}
        </SpaceBetween>
      </Form>
    </form>
  </Modal >
}

export default CreateModal
