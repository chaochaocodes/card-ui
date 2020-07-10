import React from 'react';

const myCarousel = ({ slideTime }) => {
    const carouselBehavior = useCarousel(slideTime);

    return (
    <div className="my-carousel">

    </div>
    );
}

// forward
const rightArrow = () => {
    return(
        <div className="forwardArrow" onClick={nextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
        </div>
    )
}

//backward
const leftArrow = ({prevSlide, nextSlide}) => {
    return(
        <div className="backArrow" onClick={prevSlide}>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
        </div>
    )
}


// free navigation (bullet points)
// const slider = () => {
//     const [state, setState] = useState(0);
// }

// functions to rotate through slides, continuous loop via state
// included with onClick event
// rendering of carousel

export const carousel = {
    myCarousel,
    leftArrow,
    rightArrow,
    slider
}


