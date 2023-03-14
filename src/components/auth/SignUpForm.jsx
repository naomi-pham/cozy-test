/* eslint-disable max-lines */
import { zodResolver } from '@hookform/resolvers/zod'
import STEPS from 'components/common/AuthSteps'
import Button from 'components/common/Button'
import CountryWithPhoneCode from 'components/common/CountryWithPhoneCode'
import ErrorCodes from 'components/common/ErrorCodes'
import { IconGoogleColor, IconLoading } from 'components/common/Icons'
import Input from 'components/common/Input'
import Select from 'components/common/Select'
import { signOut, useSession } from 'next-auth/react'
import { forwardRef, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import FetchRequest from './FetchRequest'

const SignUpForm = forwardRef(
  ({ setStep, isAnimating, setIsAnimating, setDirection }, ref) => {
    const { data: session } = useSession()
    const [requestErrors, setRequestErrors] = useState(null)
    const [loading, setLoading] = useState(false)

    const validationSchema = z
      .object({
        firstName: z
          .string()
          .min(1, { message: 'Please enter your first name' }),
        lastName: z.string().min(1, { message: 'Please enter your last name' }),
        email: z.string().email({ message: 'Please enter your email address' }),
        password: z
          .string()
          .min(8, { message: 'Password must be at least 8 characters' }),
        repassword: z.string().min(8, {
          message: 'Confirm password must be the same as your password',
        }),
        company: z
          .string()
          .min(1, { message: 'Please enter your company name' }),
        website: z
          .string()
          .min(1, { message: 'Please enter your company website' }),
        jobTitle: z
          .string()
          .min(1, { message: 'Please enter your job title at the company' }),
        country: z.object({
          name: z.string().min(1, { message: 'Please select your country' }),
        }),
        phone: z.string().min(1, { message: 'Please enter your phone number' }),
      })
      .refine((data) => data.password === data.repassword, {
        message: 'Confirm password must be the same as your password',
        path: ['repassword'],
      })

    const {
      control,
      handleSubmit,
      formState: { errors },
      register,
    } = useForm({
      defaultValues: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repassword: '',
        company: '',
        website: '',
        jobTitle: '',
        country: {
          name: '',
        },
        phone: '',
      },
      resolver: zodResolver(validationSchema),
    })

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

    const handleSignUp = async (data) => {
      const {
        firstName: first_name,
        lastName: last_name,
        email,
        password,
        repassword,
        company: company_name,
        country,
        phone: phone_number,
        jobTitle: job_title,
        website,
      } = data

      const reformattedData = {
        first_name,
        last_name,
        email,
        password,
        company_name,
        country: country.name,
        phone_number,
        website,
        job_title,
      }

      try {
        setLoading(true)
        const res = await FetchRequest({
          method: 'POST',
          url: '/sign-up',
          body: JSON.stringify(reformattedData),
        })
        const signUpUser = await res.json()
        if (!res.ok) {
          ref?.current?.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
          return setRequestErrors(signUpUser.message)
        }
        if (signUpUser.message === 'SUCCESS') {
          setStep(STEPS.ACTIVATE_ACCOUNT)
        }
        // return router.push('/')
      } catch (error) {
        return setRequestErrors(error.message)
      } finally {
        setLoading(false)
      }
    }

    const handleChangeStage = () => {
      if (isAnimating) return
      setIsAnimating(true)
      setDirection(-1) // direction from left to right
      setStep(STEPS.SIGN_IN)
    }

    return (
      <>
        <h1 className="mb-4 font-graphik-semibold text-heading-3 text-light-neutral-800">
          Create Account
        </h1>
        <p className="mb-6 text-light-neutral-600">
          We’d love to have you. Join the 24,000 business customers using our
          open review platform.
        </p>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="w-full space-y-6">
            {requestErrors ? (
              <p className="rounded-md bg-light-error-200 p-4 text-light-error-600">
                {ErrorCodes[requestErrors]}
              </p>
            ) : null}
            <div className="grid grid-cols-2 items-start gap-6">
              <div className="flex flex-1 flex-col space-y-2">
                <label
                  className="font-graphik-semibold text-body-2 text-light-neutral-700"
                  htmlFor="firstName"
                >
                  First name
                </label>
                <Input
                  intent={errors.firstName?.message ? 'error' : 'primary'}
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="First name"
                  {...register('firstName')}
                />
                {errors.firstName?.message && (
                  <p className="font-graphik-medium text-caption-3 text-light-error-500">
                    {errors.firstName?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-1 flex-col space-y-2">
                <label
                  className="font-graphik-semibold text-body-2 text-light-neutral-700"
                  htmlFor="lastName"
                >
                  Last name
                </label>
                <Input
                  intent={errors.lastName?.message ? 'error' : 'primary'}
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Last name"
                  {...register('lastName')}
                />
                {errors.lastName?.message && (
                  <p className="font-graphik-medium text-caption-3 text-light-error-500">
                    {errors.lastName?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label
                className="font-graphik-semibold text-body-2 text-light-neutral-700"
                htmlFor="email"
              >
                Email
              </label>
              <Input
                intent={errors.email?.message ? 'error' : 'primary'}
                type="text"
                name="email"
                id="email"
                placeholder="Email address"
                {...register('email')}
              />
              {errors.email?.message && (
                <p className="font-graphik-medium text-caption-3 text-light-error-500">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label
                className="font-graphik-semibold text-body-2 text-light-neutral-700"
                htmlFor="password"
              >
                Password
              </label>
              <Input
                intent={errors.password?.message ? 'error' : 'primary'}
                type="password"
                name="password"
                id="password"
                placeholder="Password"
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
                htmlFor="repassword"
              >
                Confirm password
              </label>
              <Input
                intent={errors.repassword?.message ? 'error' : 'primary'}
                type="password"
                name="repassword"
                id="repassword"
                placeholder="Confirm password"
                {...register('repassword')}
              />
              {errors.repassword?.message && (
                <p className="font-graphik-medium text-caption-3 text-light-error-500">
                  {errors.repassword?.message}
                </p>
              )}
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label
                className="font-graphik-semibold text-body-2 text-light-neutral-700"
                htmlFor="company"
              >
                Company name
              </label>
              <Input
                intent={errors.company?.message ? 'error' : 'primary'}
                type="text"
                name="company"
                id="company"
                placeholder="Company name"
                {...register('company')}
              />
              {errors.company?.message && (
                <p className="font-graphik-medium text-caption-3 text-light-error-500">
                  {errors.company?.message}
                </p>
              )}
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label
                className="font-graphik-semibold text-body-2 text-light-neutral-700"
                htmlFor="jobTitle"
              >
                Job title
              </label>
              <Input
                intent={errors.jobTitle?.message ? 'error' : 'primary'}
                type="text"
                name="jobTitle"
                id="jobTitle"
                placeholder="Job title"
                {...register('jobTitle')}
              />
              {errors.jobTitle?.message && (
                <p className="font-graphik-medium text-caption-3 text-light-error-500">
                  {errors.jobTitle?.message}
                </p>
              )}
            </div>
            <div className="flex flex-1 flex-col space-y-2">
              <label
                className="font-graphik-semibold text-body-2 text-light-neutral-700"
                htmlFor="website"
              >
                Company website
              </label>
              <Input
                intent={errors.website?.message ? 'error' : 'primary'}
                type="text"
                name="website"
                id="website"
                placeholder="Company website address"
                {...register('website')}
              />
              {errors.website?.message && (
                <p className="font-graphik-medium text-caption-3 text-light-error-500">
                  {errors.website?.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 items-start gap-6">
              <div className="flex flex-1 flex-col space-y-2">
                <label
                  className="font-graphik-semibold text-body-2 text-light-neutral-700"
                  htmlFor="country"
                >
                  Country
                </label>
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <Select
                      {...field}
                      data={CountryWithPhoneCode}
                      error={errors.country?.name?.message}
                    />
                  )}
                />
                {errors.country?.name?.message && (
                  <p className="font-graphik-medium text-caption-3 text-light-error-500">
                    {errors.country?.name?.message}
                  </p>
                )}
              </div>
              <div className="flex flex-1 flex-col space-y-2">
                <label
                  className="font-graphik-semibold text-body-2 text-light-neutral-700"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <Input
                  intent={errors.phone?.message ? 'error' : 'primary'}
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Phone number"
                  {...register('phone')}
                />
                {errors.phone?.message && (
                  <p className="font-graphik-medium text-caption-3 text-light-error-500">
                    {errors.phone?.message}
                  </p>
                )}
              </div>
            </div>
            <div className="!mt-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox rounded border-neutral-400 text-branding-primary-500"
                  id="bookDemo"
                />
                <label
                  className="text-body-2 text-light-neutral-700"
                  htmlFor="bookDemo"
                >
                  I&apos;d also like to book a demo
                </label>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="form-checkbox rounded border-neutral-400 text-branding-primary-500"
                    id="tos"
                  />
                  <label
                    className="text-body-2 text-light-neutral-700"
                    htmlFor="tos"
                  >
                    Accept the{' '}
                    <span className="text-branding-secondary-700 underline underline-offset-2">
                      Term of Service
                    </span>{' '}
                    and{' '}
                    <span className="text-branding-secondary-700 underline underline-offset-2">
                      Privacy Policy
                    </span>
                  </label>
                </div>
                {errors.tos?.message && (
                  <p className="font-graphik-medium text-caption-3 text-light-error-500">
                    {errors.tos?.message}
                  </p>
                )}
              </div>
            </div>
            <Button type="submit" width="full" size="large" disabled={loading}>
              <div className="inline-flex items-center justify-center gap-2">
                {loading ? <IconLoading /> : null}
                <span>Create Account</span>
              </div>
            </Button>
            <p className="inline-flex w-full items-center justify-center space-x-2 text-center text-light-neutral-700">
              <span>Already have an account?</span>
              <Button
                intent="link-primary"
                size="link-medium"
                onClick={handleChangeStage}
              >
                Sign in
              </Button>
            </p>
            <div className="relative flex items-center justify-center">
              <span className="z-10 bg-white px-4 text-light-neutral-500">
                Or
              </span>
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
                <span>Sign up with Google</span>
              </div>
            </Button>
          </div>
        </form>
      </>
    )
  }
)

export default SignUpForm
