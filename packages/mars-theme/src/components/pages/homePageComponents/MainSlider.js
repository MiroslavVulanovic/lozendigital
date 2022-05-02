// import React, { useState, useEffect } from 'react';
// import { useTransition, animated } from 'react-spring';
// import photo1 from '../../img/photo-1.png';

// const images = ['photo1.png', 'photo2.png', 'photo3.png' ];

// export default function MainSlider() {


//   const [position, setPosition] = useState(0);

//   const transitions  =useTransition(position, {
//     key: position,
//     from: { opacity: 0 },
//     enter: { opacity: 1 },
//     leave: { opacity: 0 },
//     config: { duration: 3000 },
//   });

//   useEffect(() => {
//     setInterval(() => {
//       setPosition((index) => (index + 1) % images.length);
//     }, 2000);
//   },[]);

//   // console.log('aaaaaaaaaaaaaaaaaaaaaaa', `url(../../img/${images[1]})`);

//   return (
//     <div>
//       {transitions((style, index) => {
//         <animated.div
//           style={{
//             ...style,
//             position: 'absolute',
//             width: '400px',
//             height: '400px',
//             top: 0,
//             left: 0,
//             backgroundPosition: 'center',
//             backgroundSize: 'cover',
//             backgroundImage: `url(../../img/${images[index]})`,
//           }}
//         >
//         <img src={photo1}/>
//         </animated.div>
//       })}
//     </div>
//   )
// }

import React, { useState, useEffect } from 'react'
import { connect, styled } from "frontity";
import { useTransition, animated,  } from 'react-spring'
import photo1 from '../../img/photo-1.jpg';
import photo2 from '../../img/photo-2.jpg';
import photo3 from '../../img/photo-3.jpg';
import photo4 from '../../img/photo-4.jpg';
import photo5 from '../../img/photo-5.jpg';

// const slides = [
//   'photo-1544511916-0148ccdeb877',
//   'photo-1544572571-ab94fd872ce4',
//   'reserve/bnW1TuTV2YGcoh1HyWNQ_IMG_0207.JPG',
//   'photo-1540206395-68808572332f',
// ]

// const images = ['photo-1.png', 'photo-2.png', 'photo-3.png' ];
const images = [
  {
    image: photo1
  },
  {
    image: photo2
  },
  {
    image: photo3
  },
  {
    image: photo4
  },
  {
    image: photo5
  },
]

export default function MainSlider() {
  const [index, set] = useState(0)
  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 5000 },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set(state => (state + 1) % images.length)
      }
    },
    exitBeforeEnter: true,
  })

    // useEffect(() => {
    //   setInterval(() => {
    //     set((index) => (index + 1) % images.length);
    //   }, 2000);
    // },[]);

  return (
    <MainSliderContainer>
        {transitions((style, i) => (
          <animated.div className="main-slider-animation"
            style={{
              ...style,
              backgroundPosition: 'center',
              willChange: 'opacity',
            }}
          >
            <img src={images[i].image}/>
          </animated.div>  
        ))}
    </MainSliderContainer>
  )
}

const MainSliderContainer  = styled.div`
  width: 100%;

  .main-slider-animation {

    img {
      width: 100%;
      height: 100vh;
    }
  }

`