import React, { Component } from 'react'
import Iframe from 'react-iframe'


function Chatbot() {
  return (
    <div className='h-full'><Iframe src="https://webchat.botframework.com/embed/pragmate-bot?s=80ntgvBMmYA.l-8lzc3IkEVpZzNF1sNg5trBv0IaAXqOd9JL7G9HLk8" className='h-full'></Iframe></div>
  )
}

export default Chatbot