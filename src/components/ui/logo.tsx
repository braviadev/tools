import { SVGProps } from 'react'

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
     <svg version='1.0' xmlns='http://www.w3.org/2000/svg' width={640} height={715} viewBox='0 0 640 715' {...props}>
      <g filter='url(#a)'>
        <path fill='#000' d='M4 0h159v160H4z' />
      </g>

      <g filter='url(#b)'>
        <path
          fill='#fff'
          d='M106 100.5c0 4.875-.792 9.125-2.375 12.75-1.542 3.625-3.708 6.646-6.5 9.062-2.792 2.417-6.125 4.209-10 5.376-3.833 1.208-8.042 1.812-12.625 1.812h-2.125c-.417 0-1.042-.021-1.875-.062-.833 0-1.688-.084-2.563-.25'
        />
      </g>
    </svg>
  )
}
export { Logo }
