import React, { useRef, useState, useEffect } from 'react';
import './Vartha.css';

export default function Vartha({ direction }) {
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
        <div className={`project ${isIntersecting ? 'intersecting' : ''} vartha ${direction} `}>

            <div className={`project-abt ${isIntersecting ? 'intersecting' : ''}  ${direction} `}>
                <h1>Vartha</h1>
                <p>Vartha is a ReactJS-based news website powered by the gnews.io API. It provides the latest news articles from various sources and categories. With a user-friendly interface and customizable themes, Vartha offers a seamless news browsing experience. Please note that the API allows 100 requests per day, each returning a maximum of 10 articles.</p>

                <div className="btn-container">
                    <a href="https://github.com/Mithun-750/Vartha" target="_blank" rel="noopener noreferrer">
                        <button className="source-link-btn">
                            Source-code
                        </button>
                    </a>
                    <a href="https://vartha.netlify.app/" target="_blank" rel="noopener noreferrer">
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
