import Fade from 'react-reveal/Fade'

const WasepBtn = (showText, handleClick, setShowText) => {
  return (
    <Fade left>
      <div>
        <center>
          <div>
            <button
              name='Join!'
              className='mx-1 button is-dark'
              onClick={handleClick}>
              Download{' '}
            </button>
            <span>
              <button
                onClick={console.log('clicked')}
                className='mx-1 button is-darkgrey'>
                Go to chatroom
              </button>
            </span>
          </div>
          <Fade right when={showText}>
            {showText && (
              <div>
                <h1 className='has-text-primary is-dark title mx-4 my-2'>
                  BUTOH LA
                </h1>
                <h3 className='title has-text-danger my-0'>
                  GI MAMPOS LA BODOH
                </h3>
                <h3 className='title has-text-danger my-0'>🖖🏽🖖🏽🖖🏽🖖🏽</h3>
                <p className='card has-background-danger has-text-white my-2 text-bold'>
                  Just kidding, click button below
                </p>
                <button className='button is-danger has-text-black'>
                  fr; join now
                </button>
              </div>
            )}
          </Fade>
        </center>
      </div>
    </Fade>
  )
}

export default WasepBtn
