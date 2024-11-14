'use client'
import { useMutation } from '@apollo/client'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { SignOutMutation } from '@/graphql/generated/graphql'
import { SIGN_OUT_MERCHANT } from '@/graphql/queries'

export function ButtonSignOut() {
  const router = useRouter()

  const [handleSignOut] = useMutation<SignOutMutation>(SIGN_OUT_MERCHANT, {
    onCompleted: () => {
      router.push('/auth/sign-in')
    },
    onError: () => {
      toast.error('Error ao deslogar')
    },
  })

  return (
    <Button
      className=" hover:text-rose-600 hover:bg-rose-50 text-gray-500 w-full justify-start"
      variant="ghost"
      onClick={() => handleSignOut()}
    >
      <LogOut size={24} />
      Deslogar
    </Button>
  )
}
