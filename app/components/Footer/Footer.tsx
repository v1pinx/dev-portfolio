'use client'
import './Footer.css';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Footer() {

    useGSAP(() => {
        let path = `M 10 100 Q 500 10 990 100`;
        let finalPath = `M 10 100 Q 500 10 990 100`;

        let string = document.getElementById('string');
        string?.addEventListener('mousemove', function(e){
            path = `M 10 100 Q 500 ${e.clientY} 990 100`;

            gsap.to('svg path',{
                attr:{d:path},
            })
        })

    })

    return (
        <footer>
            <div id='string'>
                <svg width="1000" height="200" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 10 100 Q 250 10 490 100" stroke="white" fill='transparent' />
                </svg>
            </div>
            <div className='footer-div'>
                <div className='footer-text'>Thanks for visiting</div>
            </div>
        </footer>

    )
}