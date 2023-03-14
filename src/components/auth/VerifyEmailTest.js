import STEPS from 'components/common/AuthSteps'
import Button from 'components/common/Button'

const VerifyEmailTest = ({
  setStep,
  isAnimating,
  setIsAnimating,
  setDirection,
}) => {
  const handleChangeStage = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setDirection(1) // direction from left to right
    setStep(STEPS.CLAIM_ACCOUNT)
  }
  return (
    <>
      <h1 className="mb-4 font-graphik-semibold text-heading-3 text-light-neutral-800">
        Almost there!
      </h1>
      <p className="mb-6 text-light-neutral-600">
        Thank you to join our community! To gain access to our services, please
        check the email from{' '}
        <span className="font-graphik-medium text-branding-primary-500">
          hello@just.engineer
        </span>{' '}
        and click on the link to verify your account.
      </p>

      <Button intent="primary" onClick={handleChangeStage}>
        Claim
      </Button>
    </>
  )
}

export default VerifyEmailTest
