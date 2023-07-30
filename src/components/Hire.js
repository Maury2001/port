import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const Hire = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
    <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
    <CircularText className={`animate-spin-slow`}/>
    <Link href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox/KtbxLzFzTZqvXLDvCtckPgnkVqrnQjHxgV?compose=new" 
    className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md w-20 h-20 rounded-full capitalize hover:bg-slate-100 hover:text-dark hover:font-semibold md:w-12 md:h-12 md:text-[10px]'
    target='_blank'
    >hire me</Link>

    </div>
      
    </div>
  )
}

export default Hire
