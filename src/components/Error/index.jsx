import React from 'react'

const Error = ({message}) => {
  return (
    <div>
        <div className='bg-red-100 my-32 p-10 rounded-md text-lg text-center'>
            <p >Sorry! There is an error.</p>
            <p className='font-semibold mt-8'>{message}</p>
        </div>
    </div>
  )
}

export default Error