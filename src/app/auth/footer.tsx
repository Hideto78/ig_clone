import Link from 'next/link'
import React, { FC } from 'react'
 
type Props = {}

const AuthFooter: FC<Props> = (props) => {
  return (
    <footer className='flex flex-col items-center gap-4 mb-4'>
      <nav>
        <ul className='flex flex-row flex-wrap justify-center gap-4 text-xs text-gray-500'>
          <li><Link href="#">Meta</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Blog</Link></li>
          <li><Link href="#">Jobs</Link></li>
          <li><Link href="#">Help</Link></li>
          <li><Link href="#">API</Link></li>
          <li><Link href="#">Privacy</Link></li>
          <li><Link href="#">Terms</Link></li>
          <li><Link href="#">Locations</Link></li>
          <li><Link href="#">Instagram Lite</Link></li>
          <li><Link href="#">Threads</Link></li>
          <li><Link href="#">Contact Uploading & Non-Users</Link></li>
          <li><Link href="#">Meta Verified</Link></li>
        </ul>
      </nav>
      <p className='text-xs text-gray-500'>© 2023 Instagram from Meta</p>
    </footer>
  )
}

export default AuthFooter