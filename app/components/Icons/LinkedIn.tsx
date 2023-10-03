function LinkedInSvg({ w = '32', h = '32' }: { w: string; h: string }) {
  return (
    <svg
      width={w}
      height={h}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width={w} height={h} rx='17' fill='#0077B5' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M25.083 25.083H21.5V20.167C21.5 18.85 21.06 17.967 19.607 17.967C18.576 17.967 18.01 18.575 17.706 19.142C17.61 19.312 17.587 19.55 17.587 19.79V25.083H14.003V14.003H17.396V15.55C17.952 14.725 18.896 13.75 20.764 13.75C23.385 13.75 25.083 15.467 25.083 19.142V25.083ZM10.749 12.25C9.507 12.25 8.5 11.243 8.5 10.001C8.5 8.759 9.507 7.752 10.749 7.752C11.991 7.752 12.999 8.759 12.999 10.001C12.999 11.243 11.991 12.25 10.749 12.25ZM8.916 25.083H12.5V14.003H8.916V25.083Z'
        fill='white'
      />
    </svg>
  )
}

export default LinkedInSvg
