import { cva } from 'class-variance-authority'
import React, { useEffect, useRef, useState } from 'react'
import { IconSeePassword } from './Icons'

const inputWrapperStyles = cva(
  [
    'relative flex items-center justify-between bg-white rounded-md focus:outline-none outline-none duration-150',
  ],
  {
    variants: {
      withIcon: {
        true: '',
        false: '',
      },
      width: {
        full: 'w-full',
        auto: 'w-auto',
      },
    },
    defaultVariants: {
      intent: 'primary',
      width: 'auto',
    },
  }
)

const commonVariants = {
  width: {
    full: 'w-full',
    auto: 'w-auto',
  },
  type: {
    text: '',
    password: 'pr-14',
  },
  size: {
    large: 'p-4 text-body-1',
    medium: 'p-3.5 text-body-2',
    small: 'p-3 text-body-3',
  },
}

const inputStyles = cva(
  [
    'w-full bg-transparent inset-0 rounded-md focus:outline-none outline-none duration-150 text-body-1',
  ],
  {
    variants: {
      intent: {
        primary:
          'text-light-neutral-800 placeholder:text-light-neutral-600 border border-light-neutral-500',
        error:
          'text-light-neutral-800 placeholder:text-light-neutral-600 border border-light-error-500',
        secondary: '',
        disabled: '',
      },
      ...commonVariants,
    },
    defaultVariants: {
      intent: 'primary',
      width: 'auto',
      size: 'large',
    },
  }
)

const inputWithIconStyles = cva(
  [
    'w-full bg-transparent inset-0 rounded-md pl-12 focus:outline-none outline-none duration-150 text-body-1',
  ],
  {
    variants: {
      intent: {
        primary:
          'text-light-neutral-800 placeholder:text-light-neutral-600 border border-light-neutral-500',
        error:
          'text-light-neutral-800 placeholder:text-light-neutral-600 border border-light-error-500',
        secondary: '',
        disabled: '',
      },
      ...commonVariants,
    },
    defaultVariants: {
      intent: 'primary',
      width: 'auto',
      size: 'large',
    },
  }
)

const suffixStyles = cva(
  [
    'absolute top-px right-px h-[calc(100%-2px)] rounded-r-md bg-light-neutral-200 border-l border-light-neutral-500',
  ],
  {
    variants: {
      ...commonVariants,
    },
    defaultVariants: {
      size: 'large',
    },
  }
)

const Input = React.forwardRef(
  (
    { intent, width, hasIcon, icon, type, hasSuffix, suffix, size, ...props },
    ref
  ) => {
    const suffixRef = useRef(null)
    const [inputType, setInputType] = useState('text')

    useEffect(() => {
      if (type) {
        setInputType(type)
      }
    }, [type])

    const handleSeePassword = () => {
      if (inputType === 'password') {
        setInputType('text')
      } else {
        setInputType('password')
      }
    }

    if (hasIcon && icon) {
      return (
        <div className={inputWrapperStyles({ intent, width, type })}>
          <i className="absolute z-10 pl-4">{icon}</i>
          <input
            ref={ref}
            className={inputWithIconStyles({ intent, width, type, size })}
            type={inputType}
            style={{
              paddingRight: hasSuffix
                ? suffixRef?.current?.clientWidth + 16
                : null,
            }}
            {...props}
          />
          {type === 'password' ? (
            <button
              type="button"
              onClick={handleSeePassword}
              className={`absolute top-0 right-0 z-10 p-4 duration-150 hover:text-branding-primary-500 ${
                inputType === 'password'
                  ? 'text-light-neutral-500'
                  : 'text-branding-primary-500'
              }`}
            >
              <IconSeePassword />
            </button>
          ) : hasSuffix && suffix ? (
            <div
              className="absolute top-px right-px h-[calc(100%-2px)] rounded-r-md bg-light-neutral-300 p-4"
              ref={suffixRef}
            >
              {suffix}
            </div>
          ) : null}
        </div>
      )
    }
    return (
      <div className={inputWrapperStyles({ intent, width, type })}>
        <input
          ref={ref}
          className={inputStyles({ intent, width, type, size })}
          type={inputType}
          style={{
            paddingRight: hasSuffix
              ? suffixRef?.current?.clientWidth + 16
              : null,
          }}
          {...props}
        />
        {type === 'password' ? (
          <button
            type="button"
            onClick={handleSeePassword}
            className={`absolute top-0 right-0 z-10 p-4 duration-150 hover:text-branding-primary-500 ${
              inputType === 'password'
                ? 'text-light-neutral-500'
                : 'text-branding-primary-500'
            }`}
          >
            <IconSeePassword />
          </button>
        ) : hasSuffix && suffix ? (
          <div className={suffixStyles({ size })} ref={suffixRef}>
            {suffix}
          </div>
        ) : null}
      </div>
    )
  }
)

export default Input
