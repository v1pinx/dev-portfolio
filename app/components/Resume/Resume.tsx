import './Resume.css';

export default function Resume() {
    return (
        <section className='section resume'> 
            <h2 className="section__title text-cs">Resume</h2>
        <p className="section__subtitle">
            My <span>Story</span>
        </p>

        <div className='resume__container'>
            <div className='resume__group'></div>
        </div>
        </section>
    );
}