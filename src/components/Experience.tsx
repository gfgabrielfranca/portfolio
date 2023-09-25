import { ReactNode } from 'react'

export const Experience = ({ children }: { children: ReactNode }) => (
  <li>
    <div className="grid sm:grid-cols-10 sm:gap-8 md:gap-4">{children}</div>
  </li>
)

export const ExperiencePeriod = (props: { children: ReactNode }) => (
  <header
    className="text-xs mt-1 mb-2 font-semibold uppercase tracking-wide text-neutral-500 sm:col-span-3"
    {...props}
  />
)

export const ExperienceContent = (props: { children: ReactNode }) => (
  <div className="sm:col-span-7" {...props} />
)

export const ExperienceHeader = (props: { children: ReactNode }) => (
  <h3 className="font-medium mb-2" {...props} />
)
export const ExperienceTitle = (props: { children: ReactNode }) => (
  <div className="leading-tight text-neutral-200" {...props} />
)
export const ExperienceCompany = ({ children }: { children: ReactNode }) => (
  <div className="text-neutral-500 leading-snug text-sm">At {children}</div>
)

export const ExperienceDescription = (props: { children: ReactNode }) => (
  <p className="text-sm leading-normal mb-4" {...props} />
)

export const ExperienceFooter = (props: { children: ReactNode }) => (
  <ul className="flex flex-wrap gap-x-1.5 gap-y-2" {...props} />
)

export const ExperienceSkill = ({ children }: { children: ReactNode }) => (
  <li className="flex rounded-full bg-neutral-400/10 px-3 py-1 text-xs font-medium leading-5 text-neutral-300">
    {children}
  </li>
)
