import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import { Section, SectionContent, SectionTitle } from '@/components/Section'
import { SocialLink } from '@/components/SocialLink'
import {
  Experience,
  ExperienceCompany,
  ExperienceContent,
  ExperienceDescription,
  ExperienceFooter,
  ExperienceHeader,
  ExperiencePeriod,
  ExperienceSkill,
  ExperienceTitle,
} from '@/components/Experience'
import { Menu } from '@/components/Menu'
import { Link } from '@/components/Link'

export const metadata = {
  title: 'Gabriel França | Senior Front-end Engineer',
  description:
    'I build high-quality web applications that have a positive impact on the world.',
}

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:flex-1 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-neutral-200 sm:text-5xl">
              Gabriel França
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-neutral-200 sm:text-xl">
              Senior Front-end Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build high-quality web applications that have a positive impact
              on the world.
            </p>
            <Menu />
          </div>
          <ul className="mt-8 flex gap-5" aria-label="Social media">
            <SocialLink
              icon={FaGithub}
              href="https://github.com/gfgabrielfranca"
            />
            <SocialLink
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/gabrielfrancas/"
            />
          </ul>
        </header>
        <main className="lg:flex-1 lg:pb-24">
          <Section id="about" aria-label="About me">
            <SectionTitle>About</SectionTitle>
            <SectionContent>
              <p>
                I am a web front-end development specialist with over 6 years of
                experience. My goal is to build high-quality web applications
                that have a positive impact on the world, using modern tools and
                adhering to the best practices in usability and programming.
              </p>
              <p className="mt-4">
                Throughout my professional journey, I{"'"}ve worked as a
                full-stack developer on various projects with diverse contexts
                and technologies, giving me a comprehensive understanding of web
                systems development. However, since 2019, I{"'"}ve chosen to
                exclusively focus on web front-end development, with a
                particular emphasis on React and Typescript.
              </p>
            </SectionContent>
          </Section>
          <Section id="experience" aria-label="Work experience">
            <SectionTitle>Experience</SectionTitle>
            <SectionContent>
              <ol className="space-y-12">
                <Experience>
                  <ExperiencePeriod>Feb 2021 - Sep 2023</ExperiencePeriod>
                  <ExperienceContent>
                    <ExperienceHeader>
                      <ExperienceTitle>
                        Senior Front-end Engineer, Tech Lead
                      </ExperienceTitle>
                      <ExperienceCompany>Netshow.me</ExperienceCompany>
                    </ExperienceHeader>
                    <ExperienceDescription>
                      Architected and developed new products like a live
                      streaming system with chat functionality and an
                      authentication platform that unified the company{"'"}s
                      product ecosystem. Additionally, established automated
                      testing and CI/CD pipelines for efficient development and
                      deployment workflows.
                    </ExperienceDescription>
                    <ExperienceFooter>
                      <ExperienceSkill>React</ExperienceSkill>
                      <ExperienceSkill>Next.js</ExperienceSkill>
                      <ExperienceSkill>Typescript</ExperienceSkill>
                      <ExperienceSkill>MUI</ExperienceSkill>
                      <ExperienceSkill>Jest</ExperienceSkill>
                      <ExperienceSkill>React Testing Library</ExperienceSkill>
                      <ExperienceSkill>Playwright</ExperienceSkill>
                      <ExperienceSkill>GitHub Actions</ExperienceSkill>
                    </ExperienceFooter>
                  </ExperienceContent>
                </Experience>
                <Experience>
                  <ExperiencePeriod>Oct 2019 - Jan 2021</ExperiencePeriod>
                  <ExperienceContent>
                    <ExperienceHeader>
                      <ExperienceTitle>
                        Senior Front-end Engineer
                      </ExperienceTitle>
                      <ExperienceCompany>Huru Systems</ExperienceCompany>
                    </ExperienceHeader>
                    <ExperienceDescription>
                      Implemented new functionalities and usability improvements
                      in a custody chain management system based on blockchain
                      technology. Improved a legacy codebase by refactoring all
                      screens and components of the platform. Implemented
                      automated testing for improved reliability.
                    </ExperienceDescription>
                    <ExperienceFooter>
                      <ExperienceSkill>React</ExperienceSkill>
                      <ExperienceSkill>Typescript</ExperienceSkill>
                      <ExperienceSkill>MUI</ExperienceSkill>
                      <ExperienceSkill>PHP</ExperienceSkill>
                      <ExperienceSkill>Docker</ExperienceSkill>
                      <ExperienceSkill>Jest</ExperienceSkill>
                      <ExperienceSkill>React Testing Library</ExperienceSkill>
                    </ExperienceFooter>
                  </ExperienceContent>
                </Experience>
                <Experience>
                  <ExperiencePeriod>Jan 2019 - Sep 2019</ExperiencePeriod>
                  <ExperienceContent>
                    <ExperienceHeader>
                      <ExperienceTitle>Software Engineer</ExperienceTitle>
                      <ExperienceCompany>Mix Internet</ExperienceCompany>
                    </ExperienceHeader>
                    <ExperienceDescription>
                      Developed several websites focusing on SEO and digital
                      marketing, while initiating the creation of a design
                      system. Additionally, implemented new functionalities in
                      the company
                      {"'"}s internal CMS.
                    </ExperienceDescription>
                    <ExperienceFooter>
                      <ExperienceSkill>React</ExperienceSkill>
                      <ExperienceSkill>Vue.js</ExperienceSkill>
                      <ExperienceSkill>Typescript</ExperienceSkill>
                      <ExperienceSkill>PHP</ExperienceSkill>
                      <ExperienceSkill>Docker</ExperienceSkill>
                    </ExperienceFooter>
                  </ExperienceContent>
                </Experience>
                <Experience>
                  <ExperiencePeriod>Aug 2017 - Nov 2018</ExperiencePeriod>
                  <ExperienceContent>
                    <ExperienceHeader>
                      <ExperienceTitle>Software Engineer</ExperienceTitle>
                      <ExperienceCompany>IFRN</ExperienceCompany>
                    </ExperienceHeader>
                    <ExperienceDescription>
                      Developed a system to automate and facilitate the
                      management of documents for the institution{"'"}s chief of
                      staff.
                    </ExperienceDescription>
                    <ExperienceFooter>
                      <ExperienceSkill>Angular</ExperienceSkill>
                      <ExperienceSkill>Javascript</ExperienceSkill>
                      <ExperienceSkill>Lumen</ExperienceSkill>
                    </ExperienceFooter>
                  </ExperienceContent>
                </Experience>
              </ol>
              <a
                className="inline-flex items-center leading-tight text-neutral-200 font-semibold group mt-12"
                href="/resume.pdf"
                target="_blank"
              >
                <span className="border-b border-transparent pb-px transition group-hover:border-neutral-300 motion-reduce:transition-none">
                  View Resume
                </span>
                <FiArrowRight className="ml-1 inline-block h-4 w-4 transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
              </a>
            </SectionContent>
          </Section>
          <footer className="text-sm text-neutral-500 mt-12">
            <p>
              <Link
                href="https://github.com/gfgabrielfranca/portfolio"
                target="_blank"
              >
                Open-source project
              </Link>{' '}
              built with{' '}
              <Link href="https://nextjs.org/" target="_blank">
                Next.js
              </Link>{' '}
              and{' '}
              <Link href="https://tailwindcss.com/" target="_blank">
                Tailwind CSS
              </Link>{' '}
              by{' '}
              <Link href="mailto:dev.gabrielfranca@gmail.com">
                dev.gabrielfranca@gmail.com
              </Link>
              .
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
