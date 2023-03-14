import { IconCheck } from 'components/common/Icons'
import STEPS from 'components/common/OnboardingSteps'
import InviteCustomers from 'components/onboarding/InviteCustomers'
import ShowBadge from 'components/onboarding/ShowBadge'
import UpdateProfile from 'components/onboarding/UpdateProfile'
import { motion } from 'framer-motion'
import { useState } from 'react'

const TopBanner = () => {
  const [step, setStep] = useState(STEPS.UPDATE_PROFILE)
  const [stepNum, setStepNum] = useState(2)

  function moveToRight() {
    setStepNum(stepNum + 1)
  }

  const renderByStep = () => {
    switch (step) {
      case STEPS.UPDATE_PROFILE:
        return <UpdateProfile step={step} setStep={setStep} />
      case STEPS.INVITE_CUSTOMERS:
        return <InviteCustomers step={step} setStep={setStep} />
      case STEPS.SHOW_BADGE:
        return <ShowBadge step={step} setStep={setStep} />
      default:
        return null
    }
  }

  const stepData = [
    {
      id: 1,
      label: 'Update profile',
      step: 'UPDATE_PROFILE',
      prompt:
        'Tell the world about your brand and what they need to know about you!',
    },
    {
      id: 2,
      label: 'Invite customers',
      step: 'INVITE_CUSTOMERS',
      prompt:
        'Online review is the most powerful asset for your marketing efforts',
    },
    {
      id: 3,
      label: 'Show badge',
      step: 'SHOW_BADGE',
      prompt:
        'Add a widget to show everyone you value genuine customer feedback.',
    },
  ]

  return (
    <div className="bg-banner mx-4 flex flex-col gap-6 rounded-3xl p-8">
      <h1 className="text-center font-graphik-medium text-title-1 text-dark-neutral-50">
        Build trust in your business with 3 basic step
      </h1>

      <div className="mb-4 mt-3 grid grid-cols-1 py-4 lg:grid-cols-3">
        {stepData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center gap-2 text-center"
          >
            <Step currentStep={stepNum} step={item.id} />
            <h3 className="font-graphik-medium text-title-3 text-branding-primary-500">
              {item.label}
            </h3>
            <p>{item.prompt}</p>
          </div>
        ))}
      </div>

      <button type="button" onClick={moveToRight}>
        Move
      </button>

      <div className="mx-auto w-full max-w-4xl rounded-[14px] bg-light-neutral-25 p-10">
        {renderByStep()}
      </div>
    </div>
  )
}

const Step = ({ currentStep, step }) => {
  let status =
    currentStep === step
      ? 'active'
      : currentStep < step
      ? 'inactive'
      : 'complete'

  return (
    <motion.div
      initial={false}
      animate={status}
      transition={{ duration: 1 }}
      variants={{
        active: {
          borderColor: 'white',
        },
        inactive: {
          color: '#2E2E41',
          backgroundColor: 'white',
          borderColor: 'none',
        },
        complete: {
          borderColor: 'none',
        },
      }}
      className="flex h-8 w-8 items-center justify-center rounded-full border-2 bg-branding-primary-500 font-graphik-medium text-title-3 text-white"
    >
      {status === 'complete' ? <IconCheck /> : step}
    </motion.div>
  )
}

export default TopBanner
