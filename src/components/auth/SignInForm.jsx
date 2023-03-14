import Button from 'components/common/Button'
import Input from 'components/common/Input'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useReducer } from 'react'
import ErrorCodes from 'components/common/ErrorCodes'
import { useRouter } from 'next/router'
import {
  IconGoogleColor,
  IconInputEmail,
  IconInputPassword,
  IconLoading,
} from 'components/common/Icons'
import STEPS from 'components/common/AuthSteps'
import Link from 'next/link'
import getErrorAndDisplay from 'src/utils/getErrorAndDisplay'

export default function SignInForm({
  setStep,
  isAnimating,
  setIsAnimating,
  setDirection,
}) {
  const { data: session } = useSession()
  const router = useRouter()

  const initialStates = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }
  const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
      case 'INPUT_EMAIL':
        return {
          ...state,
          email: payload,
        }
      case 'INPUT_PASSWORD':
        return {
          ...state,
          password: payload,
        }
      case 'SET_ERRORS':
        return {
          ...state,
          errors: payload,
        }
      case 'RESET_ERRORS':
        return {
          ...state,
          errors: '',
        }
      case 'LOADING':
        return {
          ...state,
          loading: payload,
        }
    }
    throw Error('Unknown action: ' + action.type)
  }

  const [state, dispatch] = useReducer(reducer, initialStates)

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button type="button" onClick={() => signOut()}>
          Sign out
        </button>
      </>
    )
  }

  const handleEmail = (e) => {
    dispatch({ type: 'INPUT_EMAIL', payload: e.currentTarget.value })
  }

  const handlePassword = (e) => {
    dispatch({ type: 'INPUT_PASSWORD', payload: e.currentTarget.value })
  }

  const handleSignIn = async () => {
    try {
      dispatch({ type: 'LOADING', payload: true })
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl: `${window.location.origin}`,
      })

      if (!res.ok) {
        return dispatch({ type: 'SET_ERRORS', payload: res.error })
      }

      return router.push('/')
    } catch (error) {
      console.log('🚀 ===== error:', error)
    } finally {
      dispatch({ type: 'LOADING', payload: false })
    }
  }

  const handleChangeStage = (st) => () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1) // direction from right to left
    setStep(st)
  }

  const { email, password, errors, loading } = state

  return (
    <>
      <h1 className="mb-4 font-graphik-semibold text-heading-3 text-light-neutral-800">
        Sign in to Cozy Cot
      </h1>
      <p className="mb-6 text-light-neutral-600">
        Welcome back! Please enter your details
      </p>
      <div className="w-full space-y-6">
        {errors ? (
          <p className="rounded-md bg-light-error-200 p-4 text-light-error-600">
            {getErrorAndDisplay(errors)}
          </p>
        ) : null}
        <div className="flex flex-col space-y-2">
          <Input
            type="text"
            name="email"
            id="email"
            intent={errors === 'EMAIL_NOT_FOUND' ? 'error' : 'primary'}
            onChange={handleEmail}
            placeholder="Email address"
            hasIcon="true"
            icon={<IconInputEmail />}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Input
            type="password"
            name="password"
            id="password"
            intent={errors === 'PASS_NOT_MATCH' ? 'error' : 'primary'}
            onChange={handlePassword}
            placeholder="Password"
            hasIcon="true"
            icon={<IconInputPassword />}
          />
        </div>
        <p className="!mt-4 text-right">
          <button
            type="button"
            onClick={handleChangeStage(STEPS.FORGOT_PASSWORD)}
            className="text-light-neutral-700 duration-150 hover:text-branding-primary-500"
          >
            Forgot your password?
          </button>
        </p>
        <Button
          onClick={handleSignIn}
          width="full"
          size="large"
          disabled={loading}
        >
          <div className="inline-flex items-center justify-center gap-2">
            {loading ? <IconLoading /> : null}
            <span>Sign in</span>
          </div>
        </Button>
        <p className="inline-flex w-full items-center justify-center space-x-2 text-center text-light-neutral-700">
          <span>Don&apos;t have an account?</span>
          <Button
            intent="link-primary"
            size="link-medium"
            onClick={handleChangeStage(STEPS.SIGN_UP)}
          >
            Register
          </Button>
        </p>
        <div className="relative flex items-center justify-center">
          <span className="z-10 bg-white px-4 text-light-neutral-500">Or</span>
          <div className="absolute inset-0 top-2.5 h-px w-full bg-light-neutral-500"></div>
        </div>
        <Button
          width="full"
          intent="outlined-gray"
          rounded="small"
          fontWeight="regular"
        >
          <div className="inline-flex items-center justify-center gap-2">
            <i>
              <IconGoogleColor />
            </i>{' '}
            <span>Sign in with Google</span>
          </div>
        </Button>
      </div>
    </>
  )
}
