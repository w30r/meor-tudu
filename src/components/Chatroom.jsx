import Fade from 'react-reveal/Fade'

const Chatroom = () => {
  return (
    <div>
      <center>
        <Fade when={showText}>
          <h1>Chatroom</h1>
        </Fade>
      </center>
    </div>
  )
}

export default Chatroom
