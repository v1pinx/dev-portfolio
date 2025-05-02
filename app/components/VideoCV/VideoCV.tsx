import { useState, useRef } from 'react';
import './VideoCV.css';
import { FaYoutube } from 'react-icons/fa';
import Background from '../Background/Background';
import thumbnail from '../../public/thumbnail.png'

export default function VideoCv() {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [showThumbnail, setShowThumbnail] = useState(true);
    const iframeRef = useRef(null);
    
    // YouTube video ID
    const youtubeVideoId = "adyNv0mJ0R0";
    
    const handlePlayVideo = () => {
        setShowThumbnail(false);
        // if (iframeRef.current) {
        //     iframeRef.current.focus();
        // }
    };
    
    const onIframeLoad = () => {
        setVideoLoaded(true);
    };
    
    return (
        <section className='section video-cv' id='video-cv'>
            <Background />
            <h2 className="section__title text-cs" data-aos="fade-up">Video CV</h2>
            <p className="section__subtitle" data-aos="fade-up">
                Watch My <span>Introduction</span>
            </p>
            
            <div className='video-cv__container' data-aos="fade-up">
                <div className='video-cv__player-container'>
                    {showThumbnail ? (
                        <div className="video-cv__thumbnail-container">
                            <img
                                src={thumbnail.src}
                                alt="Video thumbnail"
                                className="video-cv__thumbnail"
                            />
                            <div className="video-cv__play-button" onClick={handlePlayVideo}>
                                <FaYoutube className="video-cv__youtube-icon" />
                                <span className="video-cv__play-text">Play Video</span>
                            </div>
                        </div>
                    ) : (
                        <div className={`video-cv__iframe-container ${videoLoaded ? 'video-cv__iframe-loaded' : ''}`}>
                            <div className="video-cv__loading-spinner"></div>
                            <iframe
                                ref={iframeRef}
                                className="video-cv__iframe"
                                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                                title="Video CV"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                onLoad={onIframeLoad}
                            ></iframe>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}