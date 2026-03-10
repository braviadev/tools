import Image from 'next/image'
import Link from 'next/link'
import { SiGithub } from '@icons-pack/react-simple-icons'

const Header = () => {
  return (
    <header className='fixed inset-x-0 top-0 z-40 saturate-100 backdrop-blur-[10px]'>
      <div className='mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8'>
        <Link href='/' aria-label='Home' className='flex items-center'>
          <Image
            src='/logo.png'
            alt='Bravia Logo'
            height={40}
            className='size-auto'
            priority
          />
        </Link>
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/braviadev/tools'
          aria-label='GitHub'
        >
          <SiGithub />
        </a>
      </div>
    </header>
  )
}

export default Header
