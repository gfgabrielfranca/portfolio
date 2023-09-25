'use client'

import { useEffect, useState, ComponentProps } from 'react'

type Sections = 'about' | 'experience'

export function Menu() {
  const [isActive, setIsActive] = useState<Sections>('about')

  useEffect(() => {
    function setActiveSection() {
      const experience = document.getElementById('experience')

      if (experience && experience?.getBoundingClientRect().top < 1) {
        setIsActive('experience')
      } else {
        setIsActive('about')
      }
    }

    window.addEventListener('scroll', setActiveSection)
    setActiveSection()

    return () => window.removeEventListener('scroll', setActiveSection)
  }, [])

  return (
    <nav className="hidden lg:block mt-16" aria-label="Jump links">
      <ul className="w-max">
        <MenuLink href="#about" isActive={isActive === 'about'}>
          About
        </MenuLink>
        <MenuLink href="#experience" isActive={isActive === 'experience'}>
          Experience
        </MenuLink>
      </ul>
    </nav>
  )
}

export const MenuLink = ({
  isActive,
  children,
  ...otherProps
}: ComponentProps<'a'> & { isActive: boolean }) => (
  <li>
    <a
      className="group flex items-center py-3"
      data-active={isActive}
      {...otherProps}
    >
      <span className="mr-4 h-px w-8 bg-neutral-600 transition-all group-hover:w-16 group-hover:bg-neutral-200 group-focus-visible:w-16 group-focus-visible:bg-neutral-200 group-data-[active=true]:w-16 group-data-[active=true]:bg-neutral-200 motion-reduce:transition-none" />
      <span className="text-xs font-bold uppercase tracking-widest text-neutral-500 group-hover:text-neutral-200 group-focus-visible:text-neutral-200 group-data-[active=true]:text-neutral-200">
        {children}
      </span>
    </a>
  </li>
)
