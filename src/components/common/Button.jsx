import React from 'react'
import { cva } from 'class-variance-authority'

const buttonStyles = cva(
  ['relative duration-150 inline-flex items-center justify-center border'],
  {
    variants: {
      intent: {
        primary:
          'text-light-neutral-25 bg-branding-primary-500 hover:bg-branding-primary-600 active:bg-branding-primary-700 disabled:bg-light-neutral-300 border-branding-primary-500 hover:border-branding-primary-600 active:border-branding-primary-700 disabled:border-light-neutral-300 disabled:text-light-neutral-500 border focus:outline-none focus:ring-2 focus:ring-offset-2',
        secondary:
          'text-light-neutral-800 bg-light-neutral-100 hover:text-branding-primary-500 hover:bg-light-neutral-200 active:bg-light-neutral-300 disabled:bg-light-neutral-200 border-light-neutral-100 hover:border-light-neutral-200 active:border-light-neutral-300 disabled:border-light-neutral-200 disabled:text-light-neutral-500 border focus:outline-none focus:ring-2 focus:ring-offset-2',
        outlined:
          'text-light-neutral-800 bg-light-neutral-25 border-light-neutral-800 hover:text-branding-primary-500 hover:border-branding-primary-500 active:text-branding-primary-600 active:border-branding-primary-600 disabled:text-light-neutral-500 disabled:bg-light-neutral-200 disabled:border-light-neutral-500 border focus:outline-none focus:ring-branding-primary-400 focus:ring-2 focus:ring-offset-2',
        'outlined-gray':
          'text-light-neutral-700 bg-light-neutral-25 border-light-neutral-400 hover:text-branding-primary-500 hover:border-branding-primary-500 active:text-branding-primary-600 active:border-branding-primary-600 disabled:text-light-neutral-500 disabled:bg-light-neutral-200 disabled:border-light-neutral-500 border focus:outline-none focus:ring-branding-primary-400 focus:ring-2 focus:ring-offset-2',
        'link-primary':
          'text-branding-primary-500 hover:text-branding-primary-700 active:text-branding-primary-700 disabled:text-light-neutral-400',
        'link-secondary':
          'text-branding-secondary-500 hover:text-branding-secondary-700 active:text-branding-secondary-700 disabled:bg-light-neutral-400',
      },
      size: {
        large: 'px-10 py-4 text-title-2',
        big: 'px-5 py-3.5 text-body-2',
        medium: 'px-6 py-3 text-title-3',
        small: 'px-5 py-2 text-title-4',
        'link-big': 'text-title-2',
        'link-medium': 'text-title-3',
        'link-small': 'text-title-4',
      },
      width: {
        full: 'w-full',
        auto: 'w-auto',
        adapt: 'w-full sm:w-fit',
      },
      rounded: {
        big: 'rounded-full',
        medium: 'rounded-xl',
        small: 'rounded-md',
      },
      fontWeight: {
        bold: 'font-graphik-bold',
        semibold: 'font-graphik-semibold',
        medium: 'font-graphik-medium',
        regular: 'font-graphik',
      },
    },
    defaultVariants: {
      intent: 'primary',
      width: 'auto',
      size: 'medium',
      rounded: 'medium',
      fontWeight: 'semibold',
    },
  }
)

const Button = ({
  intent,
  width,
  size,
  rounded,
  fontWeight,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={buttonStyles({ intent, width, size, rounded, fontWeight })}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
