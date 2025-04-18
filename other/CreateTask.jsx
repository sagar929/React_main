import React from 'react'

const CreateTask = () => {
  return (
    <div className="p-6">
    <div className="bg-gray-900 rounded-lg p-6 max-w-4xl mx-auto">
      <div className="flex flex-row">
        {/* Left Column */}
        <div className="w-1/2 space-y-6 pr-6">
          <div className="space-y-1">
            <label className="block text-sm">Task Title</label>
            <input
              type="text"
              placeholder="Make a UI design"
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm">Date</label>
            <input
              type="text"
              placeholder="dd/mm/yyyy"
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm">Assign to</label>
            <input
              type="text"
              placeholder="employee name"
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
            />
          </div>
          
          <div className="space-y-1">
            <label className="block text-sm">Category</label>
            <input
              type="text"
              placeholder="design, dev, etc"
              className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-white"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 space-y-6 pl-2">
          <div className="space-y-1">
            <label className="block text-sm">Description</label>
            <textarea
              className="w-full h-40 bg-gray-800 border border-gray-700 rounded p-2 text-white"
            ></textarea>
          </div>
          <button className="w-full bg-green-500 text-white py-3 rounded mt-6 hover:bg-green-600">
            Create Task
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateTask
