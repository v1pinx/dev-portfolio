import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
import './Contact.css'

export default function Contact() {

    useGSAP(() => {
        gsap.from('.contact-container', {
            opacity: 0,
            duration: 0.7,
            y: 300,
            ease: 'back.out(1.7)'
        })
    }, [])
    return (
        <div className="main">
            <div className="contact-container">
                <div className='contact-head'>Contact</div>
                <div className='contact-data'>
                <div><b>Email</b>: vkprajapati665@gmail.com</div>
                </div>
            </div>
            
        </div>
    )
}