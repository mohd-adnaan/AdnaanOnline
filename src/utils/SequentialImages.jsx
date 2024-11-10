import React, { useState, useEffect } from 'react';
import ProjectImage from "../components/miscellaneous/ProjectImage";

const SequentialImages = ({ firstImage, secondImage, firstImageDuration = 4000, secondImageDuration = 22000 }) => {
    const [showFirstImage, setShowFirstImage] = useState(true);

    useEffect(() => {
        // Set the duration based on which image is currently displayed
        const duration = showFirstImage ? firstImageDuration : secondImageDuration;

        const timer = setTimeout(() => {
            setShowFirstImage((prev) => !prev); // Toggle between true and false
        }, duration);

        return () => clearTimeout(timer); // Clear timeout on component unmount or change
    }, [showFirstImage, firstImageDuration, secondImageDuration]);

    return (
        <div>
            {showFirstImage ? (
                <ProjectImage src={firstImage} type="gif" />
            ) : (
                <ProjectImage src={secondImage} type="gif" />
            )}
        </div>
    );
};

export default SequentialImages;
