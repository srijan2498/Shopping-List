import React from 'react'
import { useGlobalContext } from './context'
import phoneimg from './phoneimg.png'

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <div className='hero'>
      <div className="hero-center">
        <div className="hero-info">
          <h1 className="heading">Payment infrastructure for the internet</h1>
          <p className="info-para">Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe's software and APIs to accept payments, send payouts, and
            manage their businesses online.</p>
            <button className="start">Start now</button>
        </div>
        <div className="hero-img">
          <img src={phoneimg} alt="Phone Image" />
        </div>
      </div>
    </div>
  )
}

export default Hero
