import React, { useRef, useState, useEffect } from 'react';
import './NoteDrop.css';

export default function NoteDrop({ direction }) {
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
        <>
            <div className={`project ${isIntersecting ? 'intersecting' : ''} notedrop ${direction} `} >

                <div className={`project-abt ${isIntersecting ? 'intersecting' : ''}  ${direction} `}>
                    <h1>NoteDrop</h1>
                    <p>NoteDrop is a web application built using the MERN stack , allowing users to store and manage their notes with ease. It has a user-friendly interface.</p>

                    <div className="btn-container">
                        <a href="https://github.com/Mithun-750/NoteDrop-frontend" target="_blank" rel="noopener noreferrer">
                            <button className="source-link-btn">
                                Frontend source-code
                            </button>
                        </a>
                        <a href="https://github.com/Mithun-750/NoteDrop-backend" target="_blank" rel="noopener noreferrer">
                            <button className="source-link-btn">
                                Backend source-code
                            </button>
                        </a>
                        <a href="https://notedrop-750.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <button className="site-link-btn">
                                Visit the site
                            </button>
                        </a>
                    </div>
                    <span style={{ "width": "0", "height": "0" }} ref={projectRef}></span>
                </div>
            </div>
        </>
    );
}
