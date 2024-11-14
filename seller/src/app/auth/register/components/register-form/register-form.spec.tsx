import { MockedProvider } from '@apollo/client/testing'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Toaster } from 'sonner'

import { REGISTER_MERCHANT } from '@/graphql/queries'

import '@testing-library/dom'

import { RegisterForm } from '.'

const mocks = [
  {
    request: {
      query: REGISTER_MERCHANT,
      variables: {
        data: {
          cnpj: '05266903000132',
          email: 'email@test.com',
          password: 'Senha1234.',
        },
      },
    },
    result: {
      data: {
        cnpj: '05266903000132',
        email: 'email@test.com',
        id: '1',
      },
    },
  },
]

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      prefetch: () => null,
    }
  },
}))
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

describe('<RegisterForm/>', () => {
  window.ResizeObserver = ResizeObserver

  it('should render the Register form correctly', () => {
    render(
      <MockedProvider addTypename={false}>
        <RegisterForm />
      </MockedProvider>,
    )

    const button = screen.getByRole('button')
    const emailInput = screen.getByPlaceholderText('email@exemple.com')
    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')

    expect(button).toBeVisible()
    expect(emailInput).toBeVisible()
    expect(passwordInput).toBeVisible()
    expect(cnpjInput).toBeVisible()
  })

  it('should show error messages when validation fails', async () => {
    render(
      <MockedProvider>
        <RegisterForm />
      </MockedProvider>,
    )
    const button = screen.getByRole('button')

    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const emailInput = screen.getByPlaceholderText('email@exemple.com')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')

    userEvent.type(emailInput, 'emailtest.com')
    userEvent.type(passwordInput, 'Senha')
    userEvent.type(cnpjInput, '052669030')

    userEvent.click(button)

    expect(
      await screen.findByText('Deve conter no mínimo 14 números'),
    ).toBeVisible()
    expect(await screen.findByText('Email invalido')).toBeVisible()
    expect(
      await screen.findByText('Deve conter no mínimo 8 caracteres'),
    ).toBeVisible()
  })

  it.skip('should be able register a new merchant', async () => {
    render(
      <>
        <MockedProvider mocks={mocks} addTypename={false}>
          <RegisterForm />
        </MockedProvider>

        <Toaster />
      </>,
    )

    const button = screen.getByRole('button', {
      name: /Cadastra-se/i,
    })
    const cnpjInput = screen.getByPlaceholderText('000.000.000-00')
    const emailInput = screen.getByPlaceholderText('email@exemple.com')
    const passwordInput = screen.getByPlaceholderText('••••••••••••••••')

    act(async () => {
      /* fire events that update state */
      userEvent.type(emailInput, 'email@test.com')
      userEvent.type(passwordInput, 'Senha1234.')
      userEvent.type(cnpjInput, '05266903000132')
      await userEvent.click(button)
    })

    expect(cnpjInput).toHaveValue('')
    expect(passwordInput).toHaveValue('')
    expect(emailInput).toHaveValue('')

    // Configurei alguma coisa no apollo
    // expect(screen.findByText('Cadastro realizado com sucesso')).toBeVisible()
  })
})
