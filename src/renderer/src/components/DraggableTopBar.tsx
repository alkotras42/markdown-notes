import React from 'react'
import { IoMdClose } from 'react-icons/io'

export const DraggableTopBar = () => {
  const handleClose = (e) => {
    console.log('Close')
    window.close()
  }

  return (
    <header className="absolute inset-0 h-8 bg-zinc-700 flex">
      <div id='draggble' className="flex-grow h-8 right-0 top-0 flex items-center justify-end w-[100-16] z-10"></div>
      <div className="flex items-center justify-end px-2 cursor-pointer hover:bg-red-700 transition-colors duration-100" onClick={handleClose}>
        <IoMdClose />
      </div>
    </header>
  )
}
