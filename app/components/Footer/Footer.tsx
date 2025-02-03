'use client'
import './Footer.css';
export default function Footer() {


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