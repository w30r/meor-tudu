import React from 'react'
import Fade from 'react-reveal/Fade'

const WasepHeader = () => {
  return (
    <>
      <Fade bottom>
        <div className='mt-* column has-text-centered is-spaced'>
          <h1 className='has-background-success has-text-primary-light box title has-text-weight-bold is-1 is-family-secondary'>
            W A S E P{' '}
          </h1>
          <h3 className='title is-5'>Behold the new messaging app.</h3>
        </div>
      </Fade>
    </>
  )
}

export default WasepHeader
