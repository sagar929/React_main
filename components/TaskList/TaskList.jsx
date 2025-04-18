import React from 'react'

function TaskList() {
  return (
    <div id='tasklist' className='h-[55%] flex flex-row gap-5 w-full py-5 mt-10'>
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
      </div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-500 rounded-xl'>
        <div className='flex justify-between items-center p-3'>
          <h3 className='bg-green-600 px-3 py-1 text-sm rounded text-white'>High</h3>
          <h4 className='text-base'>20 Feb 2024</h4>
        </div>
        <h2 className='mt-5 ml-2 text-2xl font-semibold '>
            Make a youtube video
        </h2>
        <p className= "text-sm ml-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat necessitatibus officiis quibusdam suscipit.
        </p>
      </div>
      <div className='h-full flex-shrink-0 w-[300px] bg-blue-500 rounded-xl'>
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
      </div>
      <div className='h-full flex-shrink-0 w-[300px] bg-yellow-500 rounded-xl'>
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
      </div>
    </div>
  )
}

export default TaskList
