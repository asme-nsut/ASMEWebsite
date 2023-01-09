import React from 'react'

function studentdiv({items,studentId}) {
  return (
        <div class="p-4 px-14 lg:w-1/3 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-100 object-cover object-center mb-4" src={items.img} />
          <div class="w-full">
            <h1 class="title-font font-medium text-lg text-gray-900">{items.name}</h1>
            <h3 class="text-gray-500 mb-3">{items.por}</h3>
          </div>
        </div>
      </div>
  )
}

export default studentdiv