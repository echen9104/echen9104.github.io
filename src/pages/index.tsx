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
import web2 from '../../public/web2.png'
import web3 from '../../public/web3.png'
import web4 from '../../public/web4.png'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  
  function visitSite(url: string): import("react").MouseEventHandler<HTMLButtonElement> | undefined{
    try {
      window.open(url, "_blank")?.focus();
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* 
        Introduction and header
      */}
      <div className={darkMode ? "dark" : ""}>
        <main className='px-10 bg-white text-black md:px-20 lg:px-40 dark:bg-black dark:text-white'>
          <section className='min-h-screen'>
          <nav className='py-10 flex justify-between'>
            <ul className='flex items-center gap-6'>
              <li>
                <h1 className='text-xl lg:text-3xl font-light'>Eric Chen's Portfolio</h1>
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
                  <a className={`bg-gradient-to-br from-blue-400 to-teal-300 px-4 py-2 rounded-md ml-8 
                  ${darkMode ? 'hover:text-black' : 'hover:text-white'}`}
                  href="Resume Eric Chen.pdf" download="Resume Eric Chen.pdf">Resume</a>
                </li>
              </ul>
            </nav>
            <div className='lg:flex'>
              <div className='text-center p-10'>
                <h2 className='text-5xl py-2 text-blue-400 font-medium md:text-6xl'>Eric Chen</h2>
                <h3 className='text-2xl py-2 md:text-3xl'>Software Developer</h3>
                <p className='text-md  mx-auto py-5 leading-8 dark:text-gray-300 text-gray-800 md:text-xl max-w-lg'>
                  Hi, I recently graduated with a B.S. in Computer Science from Northeastern University.
                  I'm a passionate developer who is curious about learning new technologies,
                  and refining my skills. Come take a look below at what I've done and
                  other projects that I plan to work on. 
                </p>
              </div>

              <div className='relative h-80 w-80 overflow-hidden mx-auto bg-gradient-to-b from-blue-400 to-black rounded-full my-auto'>
              <Image className='h-80 w-80 rounded-full shadow-lg' src={EricPhoto} layout='Fill' objectFit='cover' alt=''/>
            </div>
            </div>
          </section>

          {/* 
            Software Skills
          */}
          <section>
            <div>
              <h3 className='text-3xl py-2 text-blue-400'>Software Skills</h3>
            </div>
            <div className='md:grid md:grid-cols-3 md:gap-5'>
              <div className='text-center dark:bg-white dark:shadow-inner shadow-xl p-10 rounded-xl my-10'>
                <Image className='mx-auto h-[12vw] w-auto' src={frontend}/>
                <h3 className='text-blue-400 text-lg font-medium pt-8 pb-2 md:text-2xl'>Front End</h3>
                <p className='text-gray-800 py-1 md:text-lg'>Javascript</p>
                <p className='text-gray-800 py-1 md:text-lg'>Typescript</p>
                <p className='text-gray-800 py-1 md:text-lg'>HTML/CSS</p>
                <p className='text-gray-800 py-1 md:text-lg'>Tailwind CSS</p>
                <p className='text-gray-800 py-1 md:text-lg'>React</p>
                <p className='text-gray-800 py-1 md:text-lg'>Next.js</p>

              </div>
              <div className='text-center dark:bg-white dark:shadow-inner shadow-xl p-10 rounded-xl my-10'>
                <Image className='mx-auto h-[12vw] w-auto' src={code}/>
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
                <Image className='mx-auto h-[12vw] w-auto' src={skills}/>
                <h3 className='text-blue-400 text-lg font-medium pt-8 pb-2 md:text-2xl'>Technologies and Skills</h3>
                <p className='text-gray-800 py-1 md:text-lg'>Github</p>
                <p className='text-gray-800 py-1 md:text-lg'>Google Appscript</p>
                <p className='text-gray-800 py-1 md:text-lg'>TortoiseSVN</p>
                <p className='text-gray-800 py-1 md:text-lg'>Haskell</p>

              </div>
            </div>
          </section>

          {/* 
            Portfolio projects
           */}
          <section>
            <div>
              <h3 className='text-3xl py-2 text-blue-400'>Portfolio</h3>
            </div>
            <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
              {/* 
                Netflix project
              */}
              <div className='basis-1/3 flex-1 group relative transition delay-100'>
                <Image src={netflix} className="rounded-lg object-cover h-full w-full group-hover:opacity-80"/>
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

              <div className='basis-1/3 flex-1'>
                <Image src={web2} className='rounded-lg object-cover h-full w-full'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web3} className='rounded-lg object-cover h-full w-full'/>
              </div>
              <div className='basis-1/3 flex-1'>
                <Image src={web4} className='rounded-lg object-cover h-full w-full'/>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}
