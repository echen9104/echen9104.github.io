import Head from 'next/head'
import { Inter } from 'next/font/google'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {SiLinkedin} from 'react-icons/si'
import Image from "next/image"
import EricPhoto from '/public/ai_eric.png'
import skills from 'public/tech-skills.webp'
import frontend from 'public/front-end-web-developer-nanodegree--nd001.webp'
import code from '/public/code.png'
import netflix from '/public/netflix.png'
import newclo from '/public/newclo.png'
import travelhub from '../../public/travelhub.png'
import web4 from '../../public/web4.png'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  function visitSite(url: string): void{
    try {
      window.open(url, "_blank")?.focus();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <main className='px-10 bg-white text-black md:px-20 lg:px-40 dark:bg-black dark:text-white'>
          {/* 
            Introduction and header
          */}
          <section className='min-h-screen'>
          <nav className='py-10 flex justify-between'>
            <ul className='flex items-center gap-6'>
              <li>
                <h1 className='text-xl lg:text-3xl font-light hidden md:block'>Eric Chen&apos;s Portfolio</h1>
              </li>
              <li>
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} 
                  className='text-2xl cursor-pointer transition hover:scale-105 opacity-70 hover:opacity-100'/>
                </li>
            </ul>
              <ul className='flex items-center gap-6'>
                <li>
                  <SiLinkedin onClick={() => visitSite('https://www.linkedin.com/in/eric-chen-bb93a5186/')}
                  className='text-4xl cursor-pointer transition hover:scale-105'/>
                </li>
                <li>
                  <a className={`bg-gradient-to-br from-blue-400 to-teal-300 px-4 py-2 rounded-md ml-4 
                  ${darkMode ? 'hover:text-black' : 'hover:text-white'}`}
                  href="April 2023 Software Engineering Resume.pdf" download="April 2023 Software Engineering Resume.pdf">Resume</a>
                </li>
              </ul>
            </nav>

            <div className='lg:flex items-center justify-center lg:pt-24'>
              <div className='text-center p-10 lg:transform lg:-translate-x-16'>
                <h2 className='text-5xl py-2 text-blue-400 font-medium md:text-6xl'>Eric Chen</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Software Developer</h3>
                <p className='text-md mx-auto py-5 leading-8 dark:text-gray-300 text-gray-800 md:text-xl max-w-lg'>
                  Hi, I&apos;m a passionate developer who is curious about learning new technologies,
                  and refining my skills. Recently I&apos;ve been practicing and learning web development skills.
                  Come take a look below at what I&apos;ve worked on and feel free to connect with me 
                  on LinkedIn for any inquiries.
                </p>
              </div>

              <div className='relative h-80 w-80 lg:mx-0 mx-auto overflow-hidden bg-gradient-to-b from-blue-400 to-black rounded-full my-auto'>
                <Image className='h-80 w-80 rounded-full' src={EricPhoto} layout='Fill' objectFit='cover' alt=''/>
              </div>
            </div>
          </section>

          {/* 
            Software Skills
          */}
          <section>
            <div>
              <h3 className='text-3xl py-8 text-blue-400'>Software Skills</h3>
            </div>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
              <div className='text-center dark:bg-white dark:shadow-inner shadow-xl p-10 rounded-xl my-10'>
                <Image className='mx-auto h-[12vw] w-auto' src={frontend} alt=''/>
                <h3 className='text-blue-400 text-lg font-medium pt-8 pb-2 md:text-2xl'>Front End</h3>
                <p className='text-gray-800 py-1 md:text-lg'>Javascript</p>
                <p className='text-gray-800 py-1 md:text-lg'>Typescript</p>
                <p className='text-gray-800 py-1 md:text-lg'>HTML/CSS</p>
                <p className='text-gray-800 py-1 md:text-lg'>Tailwind CSS</p>
                <p className='text-gray-800 py-1 md:text-lg'>React</p>
                <p className='text-gray-800 py-1 md:text-lg'>Next.js</p>

              </div>
              <div className='text-center dark:bg-white dark:shadow-inner shadow-xl p-10 rounded-xl my-10'>
                <Image className='mx-auto h-[12vw] w-auto' src={code} alt=''/>
                <h3 className='text-blue-400 text-lg font-medium pt-8 pb-2 md:text-2xl'>Back End</h3>
                <p className='text-gray-800 py-1 md:text-lg'>Python</p>
                <p className='text-gray-800 py-1 md:text-lg'>C++</p>
                <p className='text-gray-800 py-1 md:text-lg'>Java</p>
                <p className='text-gray-800 py-1 md:text-lg'>MongoDB</p>
                <p className='text-gray-800 py-1 md:text-lg'>Express.js</p>
                <p className='text-gray-800 py-1 md:text-lg'>Node.js</p>
                <p className='text-gray-800 py-1 md:text-lg'>Prisma</p>
                <p className='text-gray-800 py-1 md:text-lg'>NextAuth</p>

              </div>
              <div className='text-center dark:bg-white dark:shadow-inner shadow-xl p-10 rounded-xl my-10'>
                <Image className='mx-auto h-[12vw] w-auto' src={skills} alt=''/>
                <h3 className='text-blue-400 text-lg font-medium pt-8 pb-2 md:text-2xl'>Technologies and Skills</h3>
                <p className='text-gray-800 py-1 md:text-lg'>Github</p>
                <p className='text-gray-800 py-1 md:text-lg'>Google Appscript</p>
                <p className='text-gray-800 py-1 md:text-lg'>TortoiseSVN</p>
                <p className='text-gray-800 py-1 md:text-lg'>AWS Lightsail</p>
                <p className='text-gray-800 py-1 md:text-lg'>Haskell</p>

              </div>
            </div>
          </section>

          {/* 
            Portfolio projects
           */}
          <section>
            <div>
              <h3 className='text-3xl py-2 text-blue-400'>Projects</h3>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              {/* 
                Netflix project
              */}
              <div className='basis-1/3 flex-1 group relative transition delay-100 shadow-lg hover:scale-105'>
                <Image src={netflix} alt='' className="rounded-lg object-cover h-full w-full group-hover:opacity-80"/>
                <div className='flex flex-row gap-10 absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                  <button onClick={() => visitSite('https://github.com/echen9104/netflix-copy')}
                  className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                  md:h-16 md:w-24 w-20 h-20 opacity-80 hover:opacity-100 px-3 py-2 transition
                  group-hover:block hover:scale-110 hidden'>Github</button>
                  <button onClick={() => visitSite('https://netflix-copy-phi.vercel.app/auth')}
                  className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                  md:h-16 md:w-24 w-20 h-20 opacity-80 hover:opacity-100 px-3 py-2 transition
                  group-hover:block hover:scale-110 hidden'>Deploy</button>
                </div>
              </div>

              {/* 
                NewClo 
              */}
              <div className='basis-1/3 flex-1 group relative transition shadow-lg delay-100 hover:scale-105'>
                <Image src={newclo} alt='' className="border-neutral-400 border-[1px] rounded-lg object-cover h-full w-full group-hover:opacity-80"/>
                <div className='flex flex-row gap-10 absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                  <button 
                    onClick={() => visitSite('https://github.com/echen9104/ecommerce-store')}
                    className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                      md:h-16 md:w-24 w-20 h-20 opacity-80 px-3 py-2 transition
                      group-hover:block hover:scale-110 hidden hover:opacity-100'
                  >
                    Github
                  </button>
                  
                  <button 
                    onClick={() => visitSite('https://www.youtube.com/watch?v=z5ZEfMr7MTE&ab_channel=Eric')}
                    className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                      md:h-16 md:w-24 w-20 h-20 opacity-80 px-3 py-2 transition
                      group-hover:block hover:scale-110 hidden hover:opacity-100'
                  >
                    Video Demo
                  </button>
                </div>
              </div>

              {/* 
                Travel Hub 
              */}
              <div className='basis-1/3 flex-1 group relative transition shadow-lg delay-100 hover:scale-105'>
                <Image src={travelhub} alt='' className="border-neutral-400 border-[1px] rounded-lg object-fill h-full w-full group-hover:opacity-80"/>
                <div className='flex flex-row gap-10 absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                  <button 
                    onClick={() => visitSite('https://github.com/echen9104/travel-hub')}
                    className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                      md:h-16 md:w-24 w-20 h-20 opacity-80 px-3 py-2 transition
                      group-hover:block hover:scale-110 hidden hover:opacity-100'
                  >
                    Github
                  </button>

                  <button onClick={() => {}}
                    className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                      md:h-16 md:w-24 w-20 h-20 opacity-80 hover:opacity-100 px-3 py-2 transition
                      group-hover:block hover:scale-110 hidden'>Work in Progress
                  </button>
                </div>
              </div>


              <div className='basis-1/3 flex-1 group relative transition delay-100 hover:scale-105'>
                <Image src={web4} alt='' className="rounded-lg object-cover h-full w-full group-hover:opacity-80"/>
                <div className='flex flex-row gap-10 absolute transform top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2'>
                  <button onClick={() => {}}
                  className='text-blue-400 rounded-lg bg-neutral-800 border-white border-2
                  md:h-16 md:w-24 w-20 h-20 opacity-80 hover:opacity-100 px-3 py-2 transition
                  group-hover:block hover:scale-110 hidden'>Coming Soon
                  </button>
                </div>
              </div>
      
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
