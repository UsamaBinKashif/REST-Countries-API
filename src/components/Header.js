import React from 'react'
import Toggle from './Toggle'

export default function Header() {
  return (
    <div className='bg-white w-full dark:text-white dark:bg-gray-800 shadow flex justify-around py-3'>
      <h1 className='text-2xl font-extrabold'>Where in the world</h1>
      <div className="toggle mt-2">
        <Toggle />
      </div>
      
    </div>
  )
}
