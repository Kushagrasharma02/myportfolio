import React from 'react'
import K from './images/K logo.png'

const Spinner = () => {
  return (
    <section style={{background: '#eef1f3', height:'100vh'}}>
      <div>
        <div className='d-flex flex-column align-items-center justify-content-center' style={{ padding: "183px 10px" }}>
          <img src={K} alt="logo" style={{ height: '70px', filter: 'invert(100)' }} />
          <div className='d-flex wavy'>
            <span>K</span>
            <span>u</span>
            <span>s</span>
            <span>h</span>
            <span>a</span>
            <span>g</span>
            <span>r</span>
            <span>a</span>
          </div>
          <p>Loading the stuff</p>
          <div className="progress-bar">
            <span className="bar">
              <span className="progress"></span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Spinner
