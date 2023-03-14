import STEPS from 'components/common/AuthSteps'
import { LogoCozyCot } from 'components/common/Icons'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import bg from 'public/auth/bg.png'
import forgot from 'public/auth/forgot.png'
import verify from 'public/auth/verify.png'
import claim from 'public/auth/claim.png'
import { useEffect } from 'react'

const AuthLayout = ({ children, step }) => {
  const { data: session } = useSession()

  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/')
    } else {
      console.log('')
    }
  }, [session])

  const backgroundVariants = {
    enter: { y: 150, scale: 0, opacity: 0 },
    middle: { y: '0%', scale: 1, opacity: 1 },
    exit: { y: 150, scale: 0, opacity: 0 },
  }

  const renderImageByStep = () => {
    switch (step) {
      case STEPS.SIGN_IN:
      case STEPS.SIGN_UP:
        return (
          <motion.div
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center p-10 text-center"
            variants={backgroundVariants}
            initial="enter"
            animate="middle"
            exit="exit"
          >
            <p className="font-graphik-semibold text-heading-1 !text-[64px] uppercase text-light-neutral-200">
              Welcome
            </p>
            <div className="my-6 h-2 w-20 rounded-full bg-light-neutral-200" />
            <p className="max-w-[67%] text-light-neutral-300">
              We hosts reviews to help consumers shop with confidence, and
              deliver rich insights to help businesses improve the experiences
              they offer
            </p>
          </motion.div>
        )
      case STEPS.ACTIVATE_ACCOUNT:
        return (
          <motion.div
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center p-10 text-center"
            variants={backgroundVariants}
            initial="enter"
            animate="middle"
            exit="exit"
            key={step}
          >
            <Image
              src={verify}
              alt="verify"
              className="object-cover"
              width={686}
              height={421}
              unoptimized
            />
          </motion.div>
        )

      case STEPS.FORGOT_PASSWORD:
      case STEPS.RESET_PASSWORD:
        return (
          <motion.div
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center p-10 text-center"
            variants={backgroundVariants}
            initial="enter"
            animate="middle"
            exit="exit"
            key={step}
          >
            <Image
              src={forgot}
              alt="forgot"
              className="object-cover"
              width={686}
              height={421}
              unoptimized
            />
          </motion.div>
        )
      case STEPS.CLAIM_ACCOUNT:
        return (
          <motion.div
            className="absolute inset-0 flex h-full w-full flex-col items-center justify-center p-10 text-center"
            variants={backgroundVariants}
            initial="enter"
            animate="middle"
            exit="exit"
            key={step}
          >
            <Image
              src={claim}
              alt="claim"
              className="object-cover"
              width={686}
              height={421}
              unoptimized
            />
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 overflow-hidden px-0 pb-4 sm:p-4 lg:grid-cols-2">
      <div className="relative h-64 overflow-hidden sm:h-96 sm:rounded-xl lg:h-[calc(100vh-32px)]">
        <div className="h-full">
          <Image
            src={bg}
            alt="background"
            className="h-full w-full rounded-2xl object-cover"
            priority
          />
          <motion.div className="h-full">
            <MotionConfig transition={{ duration: 0.2 }}>
              <AnimatePresence mode="popLayout" initial={false}>
                {renderImageByStep()}
              </AnimatePresence>
            </MotionConfig>
          </motion.div>
        </div>
        <div className="absolute top-4 left-4 text-white sm:top-14 sm:left-14">
          <LogoCozyCot />
        </div>
      </div>

      {children}
    </div>
  )
}

export default AuthLayout
