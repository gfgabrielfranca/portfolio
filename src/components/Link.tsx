import { ComponentProps } from 'react'

export const Link = (props: ComponentProps<'a'>) => (
  <a
    className="hover:text-neutral-400 underline underline-offset-2"
    {...props}
  />
)
