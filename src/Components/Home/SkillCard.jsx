import React, { useRef, useState, useEffect } from 'react';
import './SkillCard.css';

const SkillCard = ({ name, level }) => {
    // Define a ref to the card element
    const cardRef = useRef(null);

    // State to track whether the card is intersecting with the viewport
    const [isIntersecting, setIsIntersecting] = useState(false);

    // Intersection Observer callback function
    const handleIntersection = (entries) => {
        const [entry] = entries;
        setIsIntersecting(entry.isIntersecting);
    };

    // Effect to initialize the Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection);
        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        // Cleanup the observer on unmount
        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    // Define a variable to store the class based on the level and intersection status
    let cardClass = 'card';

    if (isIntersecting) {
        cardClass += ' intersecting';
    }

    if (level === 'Advanced') {
        cardClass += ' Advanced';
    } else if (level === 'Intermediate') {
        cardClass += ' Intermediate';
    } else if (level === 'Beginner') {
        cardClass += ' Beginner';
    }

    return (
        <div className={cardClass} ref={cardRef}>
            {name}
        </div>
    );
};

export default SkillCard;
