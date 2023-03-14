import { zodResolver } from '@hookform/resolvers/zod'
import Button from 'components/common/Button'
// import ErrorCodes from 'components/common/ErrorCodes'
import Input from 'components/common/Input'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import getErrorAndDisplay from 'src/utils/getErrorAndDisplay'
import { z } from 'zod'
import FetchRequest from './FetchRequest'

const ResetPassword = () => {
  const [requestErrors, setRequestErrors] = useState('')

  const handleResetPassword = async (data) => {
    try {
      const { password, repassword } = data
      const res = await FetchRequest({
        url: '/reset-password',
        method: 'POST',
        body: JSON.stringify({ password, password_confirm: repassword }),
      })
      const resetPasswordResult = await res.json()
      if (!res.ok) {
        return setRequestErrors(resetPasswordResult.message)
      }
      // TODO
    } catch (error) {
      return setRequestErrors(error.message)
    }
  }

  const validationSchema = z
    .object({
      password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' }),
      repassword: z.string().min(8, {
        message: 'Confirm password must be the same as your password',
      }),
    })
    .refine((data) => data.password === data.repassword, {
      message: 'Confirm password must be the same as your password',
      path: ['repassword'],
    })

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      password: '',
      repassword: '',
    },
    resolver: zodResolver(validationSchema),
  })

  return (
    <>
      <h1 className="mb-4 font-graphik-semibold text-heading-3 text-light-neutral-800">
        Create New Password
      </h1>
      <p className="mb-6 text-light-neutral-600">
        Enter your new password and you’re all set
      </p>
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <div className="space-y-6">
          {requestErrors ? (
            <p className="rounded-md bg-light-error-200 p-4 text-light-error-600">
              {getErrorAndDisplay(errors)}
            </p>
          ) : null}
          <div className="flex flex-1 flex-col space-y-2">
            <label
              className="font-graphik-semibold text-body-2 text-light-neutral-700"
              htmlFor="password"
            >
              New password
            </label>
            <Input
              intent={errors.password?.message ? 'error' : 'primary'}
              type="password"
              name="password"
              id="password"
              placeholder="New password"
              {...register('password')}
            />
            {errors.password?.message && (
              <p className="font-graphik-medium text-caption-3 text-light-error-500">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div className="flex flex-1 flex-col space-y-2">
            <label
              className="font-graphik-semibold text-body-2 text-light-neutral-700"
              htmlFor="lastName"
            >
              Confirm new password
            </label>
            <Input
              intent={errors.repassword?.message ? 'error' : 'primary'}
              type="password"
              name="repassword"
              id="repassword"
              placeholder="Confirm new password"
              {...register('repassword')}
            />
            {errors.repassword?.message && (
              <p className="font-graphik-medium text-caption-3 text-light-error-500">
                {errors.repassword?.message}
              </p>
            )}
          </div>
          <Button type="submit" width="full" size="large">
            Change password
          </Button>
        </div>
      </form>
    </>
  )
}

export default ResetPassword
