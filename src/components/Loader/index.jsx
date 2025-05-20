import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
  return (
    <div className='grid place-items-center h-full w-full my-52'>
        <FaSpinner className='animate-spin text-red-500 text-3xl'/>
    </div>
  )
}

export default Loader