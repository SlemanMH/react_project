import React from 'react'
import Cabin from '../../assets/images/cabin.png'
import Cake from '../../assets/images/cake.png'
import Circus from '../../assets/images/circus.png'
import Game from '../../assets/images/game.png'
import Safe from '../../assets/images/safe.png'
import Submarine from '../../assets/images/submarine.png'
export default function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='container'>
                <h2 className='text-center'>PORTFOLIO</h2>
                <div className='portfolio-image d-flex flex-wrap'>
                    <img src={Cabin} />  
                    <img src={Cake} />
                    <img src={Circus} />
                    <img src={Game} />
                    <img src={Safe} />
                    <img src={Submarine} />      
                </div>
            </div>
        </section>
    )
}
