import STEPS from 'components/common/AuthSteps'
import Button from 'components/common/Button'
import {
  IconChrevonUpDown,
  IconInputEmail,
  IconLoading,
} from 'components/common/Icons'
import Input from 'components/common/Input'
import React, { useState } from 'react'
import FetchRequest from './FetchRequest'
import ErrorCodes from 'components/common/ErrorCodes'
import getErrorAndDisplay from 'src/utils/getErrorAndDisplay'

const ForgotPassword = ({
  setStep,
  isAnimating,
  setIsAnimating,
  setDirection,
}) => {
  const handleChangeStage = (st) => () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1) // direction from left to right
    setStep(st)
  }

  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTypeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSendEmail = async () => {
    try {
      setLoading(true)
      setErrors('')
      const res = await FetchRequest({
        url: '/forgot-password',
        method: 'POST',
        body: JSON.stringify({ email: email }),
      })
      const resetPasswordResult = await res.json()
      if (!res.ok) {
        return setErrors(resetPasswordResult.message)
      }
      return handleChangeStage(STEPS.RESET_PASSWORD)()
    } catch (error) {
      setErrors(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button
        onClick={handleChangeStage(STEPS.SIGN_IN)}
        type="button"
        className="-ml-1.5 mb-2 flex items-center text-light-neutral-700 duration-150 hover:text-branding-primary-500"
      >
        <i className="rotate-90">
          <IconChrevonUpDown />
        </i>
        <span>Back</span>
      </button>
      <h1 className="mb-4 font-graphik-semibold text-heading-3 text-light-neutral-800">
        Forgot Password
      </h1>
      <p className="mb-6 text-light-neutral-600">
        Enter your email address associated with your account and we&apos;ll
        send you instructions on how to reset your password.
      </p>
      <div className="space-y-6">
        {errors ? (
          <p className="rounded-md bg-light-error-200 p-4 text-light-error-600">
            {getErrorAndDisplay(errors)}
          </p>
        ) : null}
        <Input
          intent={'primary'}
          placeholder="Email address"
          hasIcon
          icon={<IconInputEmail />}
          value={email}
          onChange={handleTypeEmail}
        />
        <Button
          onClick={handleSendEmail}
          width="full"
          size="large"
          disabled={loading}
        >
          <div className="inline-flex items-center justify-center gap-2">
            {loading ? <IconLoading /> : null}
            <span>Send email</span>
          </div>
        </Button>
      </div>
    </>
  )
}

export default ForgotPassword
