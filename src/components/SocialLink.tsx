import { ComponentProps } from 'react'
import { IconType } from 'react-icons'

export const SocialLink = ({
  icon: Icon,
  ...otherProps
}: ComponentProps<'a'> & { icon: IconType }) => (
  <li className="text-xs">
    <a className="hover:text-neutral-200" target="_blank" {...otherProps}>
      <Icon className="h-6 w-6" />
    </a>
  </li>
)
