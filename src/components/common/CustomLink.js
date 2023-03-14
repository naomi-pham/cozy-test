import { cva } from 'class-variance-authority'
import Link from 'next/link'
import { ArrowRight } from '../icons/SharedIcons'

const CustomLinkStyles = cva(
  'text-branding-secondary-500 hover:text-branding-secondary-600 active:text-branding-secondary-700 disabled:text-light-500',
  {
    variants: {
      size: {
        large: 'w-7 h-7 text-xl font-graphik-semibold',
        medium: 'w-5 h-5 text-sm font-graphik-semibold',
        small: 'w-4 h-4 text-sm font-graphik-medium',
      },
    },
    defaultVariants: {
      size: 'large',
    },
  }
)

const CustomLink = ({ size, url, label, ...props }) => {
  return (
    <Link
      href={url}
      className={`${CustomLinkStyles({ size })} flex w-fit items-center gap-3`}
      {...props}
    >
      <span>{label}</span>
      <span>
        <ArrowRight className={CustomLinkStyles({ size })} />
      </span>
    </Link>
  )
}

export default CustomLink
