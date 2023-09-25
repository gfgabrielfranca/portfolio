import { ComponentProps, ReactNode } from 'react'

export const Section = (props: ComponentProps<'section'>) => (
  <section className="pt-16 md:pt-24" {...props} />
)

export const SectionTitle = (props: { children: ReactNode }) => (
  <div className="sticky top-0 z-20 -mx-6 bg-neutral-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
    <h2
      className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only"
      {...props}
    />
  </div>
)

export const SectionContent = (props: { children: ReactNode }) => (
  <div className="mt-4 lg:mt-0" {...props} />
)
