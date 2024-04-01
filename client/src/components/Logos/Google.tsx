import * as React from 'react'
import { SVGProps } from 'react'
const Google = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}
  >
    <mask
      id="a"
      width={21}
      height={22}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'luminance',
      }}
    >
      <path fill="#fff" d="M20.977.76H.902v20.48h20.075V.76Z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="#4285F4"
        d="M20.977 11.235c0-.696-.057-1.396-.177-2.081h-9.66v3.943h5.532a4.74 4.74 0 0 1-2.047 3.112v2.559h3.3c1.938-1.784 3.052-4.418 3.052-7.533Z"
      />
      <path
        fill="#34A853"
        d="M11.141 21.24c2.762 0 5.092-.907 6.789-2.472l-3.3-2.559c-.919.625-2.104.979-3.485.979-2.671 0-4.937-1.803-5.75-4.226H1.99V15.6a10.242 10.242 0 0 0 9.151 5.64Z"
      />
      <path
        fill="#FBBC04"
        d="M5.391 12.962a6.134 6.134 0 0 1 0-3.92V6.402H1.99a10.25 10.25 0 0 0 0 9.197l3.401-2.638Z"
      />
      <path
        fill="#EA4335"
        d="M11.141 4.812a5.565 5.565 0 0 1 3.929 1.535l2.924-2.924A9.842 9.842 0 0 0 11.14.76a10.239 10.239 0 0 0-9.15 5.644l3.4 2.638c.81-2.427 3.079-4.23 5.75-4.23Z"
      />
    </g>
  </svg>
)
export default Google
