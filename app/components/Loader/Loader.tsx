import Background from '../Background/Background';
import './Loader.css';

export default function Loader() {
    return (
        <div className="loader-container">
            <Background />
            <span className="loader"></span>
        </div>
    )
}