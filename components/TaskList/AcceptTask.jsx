import React from 'react'

function AcceptTask() {
  return (
    <div>
      <div className='h-full flex-shrink-0 w-[300px] bg-red-500 rounded-xl'>
        <div className='flex justify-between items-center p-3'>
          <h3 className='bg-red-600 px-3 py-1 text-sm rounded text-white'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 ml-2 text-2xl font-semibold '>
            Make a youtube video
        </h2>
        <p className= "text-sm ml-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus officiis quibusdam suscipit.
        </p>
        <div className='flex justify-between mt-5'>
        <button className='bg-green-500 py-1 px-2 text-sm'>Marks as Complete</button>
        <button className='bg-red-900 py-1 px-2 text-sm'>Mark as Failed</button>
      </div>
      </div>
      
    </div>
  )
}

export default AcceptTask
