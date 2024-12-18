import React from 'react'

export default function Contact() {
    return (
        <section className='contact'>
            <h2 className='text-center'>CONTACT ME</h2>
            <form className='d-flex flex-column align-items-center gap-5'>
                <input type="text" id='name' name='name' required  placeholder='Full name'/>
                <input type="email" id='email' name='email' required placeholder='Email address'/>
                <input type="tel" id='phone-number' name='phone-number' required  placeholder='Phone number'/>
                <textarea id='message' name='message' required placeholder='Message'></textarea>
             <div className='w-50'>
             <button type='submit'>Send</button>
             </div>
            </form>
        </section>
    )
}
