import React, { Component } from 'react'
import WasepHeader from './WasepHeader'
import WasepBtn from './WasepBtn'
import Chatroom from './components/Chatroom'
import { useState } from 'react'


class App extends Component {

    const [showText, setShowText] = useState(false);

    const handleClick = () => {
        setShowText(!showText)
    }
  render() {
    return (
      <div>
        <WasepHeader />
        <WasepBtn
          showText={showText}
          handleClick={handleClick}
          setShowText={setShowText}
        />
        <Chatroom />
      </div>
    )
  }
}

export default App
