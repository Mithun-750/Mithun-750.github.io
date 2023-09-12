import React, { useRef, useState, useEffect } from 'react';
import './Weather.css';

export default function Weather({ direction }) {
    const projectRef = useRef(null);

    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => {
            if (projectRef.current) {
                observer.unobserve(projectRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const nav = document.getElementsByTagName("nav")[0]

        if (isIntersecting) {
            nav.style.top = "-60px"
        } else {
            nav.style.top = "0px"

        }

        return () => {

        }
    }, [isIntersecting])

    return (
        <div className={`project ${isIntersecting ? 'intersecting' : ''} weather ${direction} `}>

            <div className={`project-abt ${isIntersecting ? 'intersecting' : ''}  ${direction} `}>
                <h1>Weather-app-750</h1>
                <p>A simple but cool webpage where you can check realtime weather.</p>

                <div className="btn-container">
                    <a href="https://github.com/Mithun-750/weather-app" target="_blank" rel="noopener noreferrer">
                        <button className="source-link-btn">
                            Source-code
                        </button>
                    </a>
                    <a href="https://weather-app-750.netlify.app/" target="_blank" rel="noopener noreferrer">
                        <button className="site-link-btn">
                            Visit the site
                        </button>
                    </a>
                </div>
                <span style={{ "width": "0", "height": "0" }} ref={projectRef}></span>
            </div>
        </div>
    );
}
