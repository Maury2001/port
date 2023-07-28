import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-sm'>
      <Layout className='py-4 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All rights reserved</span>
        <div className=''>
        Build with <span>&#9825;</span> by &nbsp;
        <Link href="" className='underline'>Maestro</Link>
        </div>
        
        <Link href="">Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer
