import ForgotPassword from 'components/auth/ForgotPassword'
import ResetPassword from 'components/auth/ResetPassword'
import SignInForm from 'components/auth/SignInForm'
import SignUpForm from 'components/auth/SignUpForm'
import VerifyEmail from 'components/auth/VerifyEmail'
import STEPS from 'components/common/AuthSteps'
import AuthLayout from 'components/layout/AuthLayout'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

const AuthPage = () => {
  const { data: session } = useSession()
  console.log('🚀 ===== session:', session)

  // const router = useRouter()

  // useEffect(() => {
  //   if (session) {
  //     router.push('/')
  //   }
  // }, [session])

  const [step, setStep] = useState(STEPS.SIGN_IN)
  const [direction, setDirection] = useState(null)
  const [isAnimating, setIsAnimating] = useState(null)
  const containerRef = useRef(null)

  const cancelAnimation = () => {
    setIsAnimating(false)
  }

  const stepVariants = {
    enter: (direction) => ({ x: `${100 * direction}%`, opacity: 0 }),
    middle: { x: '0%', opacity: 1 },
    exit: (direction) => ({ x: `${-100 * direction}%`, opacity: 0 }),
  }

  const renderByStep = () => {
    switch (step) {
      case STEPS.SIGN_IN:
        return (
          <SignInForm
            step={step}
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
          />
        )
      case STEPS.SIGN_UP:
        return (
          <SignUpForm
            step={step}
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
            ref={containerRef}
          />
        )
      case STEPS.ACTIVATE_ACCOUNT:
        return (
          <VerifyEmail
            step={step}
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
          />
        )
      case STEPS.FORGOT_PASSWORD:
        return (
          <ForgotPassword
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
          />
        )
      case STEPS.RESET_PASSWORD:
        return (
          <ResetPassword
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
          />
        )

      default:
        return null
    }
  }

  return (
    <AuthLayout step={step}>
      <MotionConfig transition={{ duration: 0.3 }}>
        <AnimatePresence
          mode="popLayout"
          initial={false}
          custom={direction}
          onExitComplete={cancelAnimation}
        >
          <motion.div
            key={step}
            initial="enter"
            animate="middle"
            exit="exit"
            className="relative mx-auto flex w-full max-w-[618px] flex-col justify-center overflow-hidden pl-4 lg:max-h-[calc(100vh-32px)]"
          >
            <motion.div
              variants={stepVariants}
              custom={direction}
              className="p-4 lg:overflow-y-auto"
              ref={containerRef}
            >
              {renderByStep()}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </AuthLayout>
  )
}

export default AuthPage
