import React from 'react'
import { Link } from 'react-router-dom'

function Main() {
  return (
    <div className='w-full mt-40 flex justify-center items-center'>
      <button className='w-28 h-10 rounded-lg bg-white text-neutral-700 font-bold'><Link to={'/blog'}>Go to Blog</Link></button>
    </div>
  )
}

export default Main