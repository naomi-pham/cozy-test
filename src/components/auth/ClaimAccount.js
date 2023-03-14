import { Disclosure } from '@headlessui/react'
import Badge from 'components/common/Badge'
import { ArrowDown, User } from 'components/icons/ClaimIcons'
import { Logout, Person, Settings } from 'components/icons/SharedIcons'
import React, { useEffect, useRef, useState } from 'react'
import FetchRequest from './FetchRequest'
import errors from 'components/common/ErrorCodes'
import ClaimRows from 'components/claims/ClaimRows'
import Button from 'components/common/Button'
import STEPS from 'components/common/AuthSteps'

const ClaimAccount = ({
  setStep,
  isAnimating,
  setIsAnimating,
  setDirection,
}) => {
  const [user, setUser] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    try {
      setLoading(true)
      const res = await FetchRequest({
        method: 'GET',
        url: '/users/profile',
      })
      const data = await res.json()
      if (!res.ok) {
        return setError(res.message)
      }
      if (data.message === 'SUCCESS') {
        setUser(data)
      }
    } catch (error) {
      return setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  console.log(user)

  const businessAccountRef = useRef(null)

  const [businessAccountHeight, setBussinessAccountHeight] = useState(0)

  useEffect(() => {
    if (businessAccountRef.current) {
      setBussinessAccountHeight(businessAccountRef.current.clientHeight)
    }
  }, [businessAccountRef])

  const handleChangeStage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(-1) // direction from left to right
    setStep(STEPS.ACTIVATE_ACCOUNT)
  }

  return (
    <div>
      <div className="mx-auto w-full lg:px-6 lg:pt-6">
        {error ? (
          <Badge intent="error" size="medium" label={errors[error]} />
        ) : (
          <>
            <div
              className="flex flex-col items-center justify-center gap-6"
              ref={businessAccountRef}
            >
              <h3 className="text-center font-graphik-semibold text-heading-3 text-light-neutral-800">
                Verify your business
              </h3>
              <ProfileDropdown user={user?.data} />
            </div>

            <ClaimRows
              businessAccountHeight={businessAccountHeight}
              user={user?.data}
            />

            <Button intent="primary" onClick={handleChangeStage}>
              Claim
            </Button>
          </>
        )}
      </div>
    </div>
  )
}

export const ProfileDropdown = ({ user }) => {
  return (
    <div>
      <Disclosure
        as="div"
        className="relative flex w-full min-w-[280px] items-center justify-between rounded-full border border-light-neutral-300 p-2 py-1 "
      >
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="h-9 w-9" />
                <div className="flex-grow">
                  <p className="font-500 leading-5 text-light-neutral-900">
                    {user?.first_name} {user?.last_name}
                  </p>
                  <p className="text-sm text-left">{user?.company_name}</p>
                </div>
              </div>
              <ArrowDown className={open ? 'rotate-180 transform' : ''} />
            </Disclosure.Button>
            <Disclosure.Panel className="absolute top-16 z-10 w-full rounded-lg bg-white p-4">
              <div className="flex flex-col gap-6">
                <button type="button" className="inline-flex gap-2">
                  <Settings className="fill-light-neutral-700" />
                  <span className="hover:text-light-neutral-800">Settings</span>
                </button>
                <button type="button" className="inline-flex gap-2">
                  <Person className="fill-light-neutral-700" />
                  <span className="hover:text-light-neutral-800">Profile</span>
                </button>
                <button type="button" className="inline-flex gap-2">
                  <Logout className="fill-light-neutral-700" />
                  <span className="hover:text-light-neutral-800">Sign out</span>
                </button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default ClaimAccount
