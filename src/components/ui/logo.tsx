type LogoProps = React.SVGProps<SVGSVGElement>

const Logo = (props: LogoProps) => {
  return (
    <svg viewBox='0 0 167 168' xmlns='http://www.w3.org/2000/svg' {...props}>
      <g filter='url(#filter0)'>
        <rect x='4' width='159' height='160' fill='black' />
      </g>

      <g filter='url(#filter1)'>
        <path
          d='M106 100.5C106 105.375 105.208 109.625 103.625 113.25C102.083 116.875 99.9167 119.896 97.125 122.312C94.3333 124.729 91 126.521 87.125 127.688C83.2917 128.896 79.0833 129.5 74.5 129.5H72.375C71.9583 129.5 71.3333 129.479 70.5 129.438C69.6667 129.438 68.8125 129.354 67.9375 129.188C67.1042 129.062 66.3542 128.833 65.6875 128.5C65.0625 128.167 64.75 127.708 64.75 127.125C64.75 126.458 64.8958 125.792 65.1875 125.125C65.5208 124.5 65.9375 123.938 66.4375 123.438C66.9375 122.896 67.5 122.458 68.125 122.125C68.75 121.75 69.375 121.5 70 121.375C69.6667 120.958 69.4167 120.396 69.25 119.688C69.0833 118.979 68.9375 118.229 68.8125 117.438C68.6875 116.646 68.5833 115.875 68.5 115.125C68.4583 114.333 68.4167 113.667 68.375 113.125C67.625 106.667 66.9792 100.229 66.4375 93.8125C65.8958 87.3958 65.625 80.9167 65.625 74.375C65.625 70.2083 65.6875 66.0833 65.8125 62C65.9375 57.9167 66.0417 53.7917 66.125 49.625C66.2083 47.9167 66.2292 46.2292 66.1875 44.5625C66.1875 42.8958 66.25 41.2083 66.375 39.5Z'
          fill='white'
        />
      </g>

      <defs>
        <filter
          id='filter0'
          x='0'
          y='0'
          width='167'
          height='168'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>

        <filter
          id='filter1'
          x='57.875'
          y='32.625'
          width='52.125'
          height='104.875'
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset dy='4' />
          <feGaussianBlur stdDeviation='2' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
          />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  )
}

export { Logo }
