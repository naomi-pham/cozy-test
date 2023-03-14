import React from 'react'
import { cva } from 'class-variance-authority'
import { Error, Info, Success } from '../icons/SharedIcons'

const badgeStyle = cva(
  'flex items-center gap-3 text-xs sm:text-sm py-2 px-4 rounded',
  {
    variants: {
      intent: {
        info: 'bg-primary-200 text-primary-500',
        success: 'bg-success-200 text-success-700',
        error: 'bg-error-200 text-error',
      },
      size: {
        medium: 'max-w-md lg:max-w-full mx-auto',
      },
    },
    defaultVariants: {
      intent: 'info',
    },
  }
)

const icons = [
  {
    id: 1,
    label: 'success',
    icon: <Success className="fill-success-700 w-10" />,
  },
  {
    id: 2,
    label: 'error',
    icon: <Error className="fill-error w-10" />,
  },
  {
    id: 3,
    label: 'info',
    icon: <Info className="fill-primary-500 w-10" />,
  },
]

const Badge = ({ intent, size, label, ...props }) => {
  return (
    <div className={badgeStyle({ intent, size })} {...props}>
      {icons.filter((icon) => icon.label === intent)[0].icon}
      {label}
    </div>
  )
}

export default Badge
