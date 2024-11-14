import { MockedProvider } from '@apollo/client/testing'
import { act, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { SIGN_IN_MERCHANT } from '@/graphql/queries'

import { SignInForm } from './sign-in-form'

const mocks = [
  {
    request: {
      query: SIGN_IN_MERCHANT,
      variables: {
        data: {
          cnpj: '05266903000132',
          password: 'Senha1234.',
        },
      },
    },
    result: {
      data: {
        token: '',
        merchant: {
          email: 'email@test.com',
          id: '1',
        },
      },
    },
  },
]

jest.mock('next/navigation', () => ({
  ...require('next-router-mock'),
}))

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
describe('<SignInForm/>', () => {
  window.ResizeObserver = ResizeObserver

  it('should render correctly', () => {
    render(
      <MockedProvider addTypename={false}>
        <SignInForm />
      </MockedProvider>,
    )

    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')

    expect(cnpjInput).toBeVisible()
    expect(passwordInput).toBeVisible()
  })

  it('should show the erros', async () => {
    render(
      <MockedProvider addTypename={false}>
        <SignInForm />
      </MockedProvider>,
    )

    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')
    const button = screen.getByRole('button')

    userEvent.type(cnpjInput, '')
    userEvent.type(passwordInput, '')
    userEvent.click(button)

    expect(await screen.findAllByText('Required')).toHaveLength(2)
  })

  it.skip('should be able authentication ', async () => {
    render(
      <>
        <MockedProvider mocks={mocks} addTypename={false}>
          <SignInForm />
        </MockedProvider>
      </>,
    )

    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')
    const button = screen.getByRole('button')

    act(() => {
      userEvent.type(passwordInput, 'Senha1234.')
      userEvent.type(cnpjInput, '05266903000132')
      userEvent.click(button)
    })

    await waitFor(() => {
      expect(passwordInput).toHaveValue('')
      expect(cnpjInput).toHaveValue('')

      // Configurei alguma coisa no apollo
      expect(screen.findByText('Cadastro realizado com sucesso')).toBeVisible()
    })
  })
})
