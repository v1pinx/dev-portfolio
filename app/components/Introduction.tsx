
import './Introduction.component.css';
import Image from 'next/image';
import bg from '../public/bg.png'

const Introduction = () => {
    return (
        <>
        <div className='dev-btn'>In Development : Thanks For ur Visit</div>
        <Image src={bg} alt="" className='img'/>
        <div className='intro-div'>
            <div className='designation'>Developer</div>
            <div className='name1'>Vipin</div>
            <div className='name2'>Kumar</div>
            <div className='description'>Currently, I am a student working on web development and penetration testing. In addition to my proficiency in Python, C, C++ programming, I also possess skills in data structures and algorithms (DSA). I am a tech geek myself. I like to treat people with respect. I enjoy helping and I love to learn about new technologies :)</div>
        </div>
        </>
        
    )
}

export default Introduction;