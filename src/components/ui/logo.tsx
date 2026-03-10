type LogoProps = React.SVGAttributes<SVGElement>

const Logo = (props: LogoProps) => {
  return (
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width={64}
      height={64}
      viewBox='0 0 64 64'
      {...props}
    >
      <rect width='64' height='64' rx='12' fill='currentColor' />

      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        textAnchor='middle'
        fontSize='36'
        fontWeight='bold'
        fill='white'
        fontFamily='Arial, Helvetica, sans-serif'
      >
        B
      </text>
    </svg>
  )
}

export { Logo }
