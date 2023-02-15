import React from 'react'

const ChatInput = () => {
  return (
    <div className="w-full bg-white bg-opacity-10 max-h-10 rounded-lg px-4 py-4 overflow-auto relative">
        <textarea rows={1} className=' border-0 bg-transparent outline-none w-11/12'/>

        <img src="./send.png" width={20} alt='send-button' className=' absolute top-4 right-3 hover:cursor-pointer ease-in duration-100 hover:scale-125' />
    </div>
  )
}

export default ChatInput