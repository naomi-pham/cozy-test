import ClaimAccount from 'components/auth/ClaimAccount'
import FetchRequest from 'components/auth/FetchRequest'
import VerifyEmailTest from 'components/auth/VerifyEmailTest'
import STEPS from 'components/common/AuthSteps'
import { LogoCozyCot } from 'components/common/Icons'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import bg from 'public/auth/bg.png'
import claim from 'public/auth/claim.png'
import verify from 'public/auth/verify.png'
import React, { useEffect, useRef, useState } from 'react'

const Activate = () => {
  const router = useRouter()

  const [step, setStep] = useState(STEPS.ACTIVATE_ACCOUNT)
  const [direction, setDirection] = useState(null)
  const [isAnimating, setIsAnimating] = useState(null)
  const containerRef = useRef(null)

  const activateAccount = async (code) => {
    try {
      const res = await FetchRequest({
        url: `/activate-account/${code}`,
        method: 'POST',
      })
      const activateResult = await res.json()
      if (!res.ok) {
        console.log(res.error)
      }
      console.log(activateResult)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    if (router.isReady) {
      const { code } = router.query
      if (code) {
        activateAccount(code)
      }
    }
  }, [router])

  const renderByStep = () => {
    switch (step) {
      case STEPS.ACTIVATE_ACCOUNT:
        return (
          <VerifyEmailTest
            step={step}
            setStep={setStep}
            isAnimating={isAnimating}
            setIsAnimating={setIsAnimating}
            setDirection={setDirection}
          />
        )

      case STEPS.CLAIM_ACCOUNT:
        return (
          <ClaimAccount
            step={step}
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

  const cancelAnimation = () => {
    setIsAnimating(false)
  }

  const stepVariants = {
    enter: (direction) => ({ x: `${100 * direction}%`, opacity: 0 }),
    middle: { x: '0%', opacity: 1 },
    exit: (direction) => ({ x: `${-100 * direction}%`, opacity: 0 }),
  }

  const backgroundVariants = {
    enter: { y: 150, scale: 0, opacity: 0 },
    middle: { y: '0%', scale: 1, opacity: 1 },
    exit: { y: 150, scale: 0, opacity: 0 },
  }

  const renderImageByStep = () => {
    switch (step) {
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
      <div className="relative h-64 overflow-hidden sm:h-96 lg:h-[calc(100vh-32px)]">
        <div className="h-full">
          <Image
            src={bg}
            alt="background"
            className="h-full w-full object-cover sm:rounded-2xl"
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
        <div className="absolute top-4 left-4 text-white lg:top-14 lg:left-14">
          <LogoCozyCot className="aspect-video w-20 sm:w-32 lg:w-40" />
        </div>
      </div>

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
    </div>
  )
}

export default Activate
