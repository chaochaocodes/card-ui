import React, { useReducer } from 'react';

// state change with user swipe/drag using useReducer
const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);

const initialCarouselState = {
    // user's current dragging efforts
    offset: 0,
    // transitioning into this slide
    desired: 0,
    // current slide
    active: 0,
}

function carouselReducer(state, action) {
    switch (action.type) {
      case "jump":
        return {
          ...state,
          desired: action.desired
        };
      case "next":
        return {
          ...state,
          desired: next(action.length, state.active)
        };
      case "prev":
        return {
          ...state,
          desired: previous(action.length, state.active)
        };
      case "done":
        return {
          ...state,
          offset: NaN,
          active: state.desired
        };
      case "drag":
        return {
          ...state,
          offset: action.offset
        };
      default:
        return state;
    }
  }

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

// time-triggered auto-rotation
React.useEffect(() => {
    // number of slides from 0 to last
    const next = (current + 1) % slides.length;
    const id = setTimeout(() => setCurrent(next), time);
    return () => clearTimeout(id);
  }, [current]);


export const carousel = {
    myCarousel,
    leftArrow,
    rightArrow,
    slider
}


