import React, { useState, useEffect } from "react";
import './style.css';
import Narii from '../../img/narii.png';
import withdang from '../../img/withdang.png';
import graycity from '../../img/graycity.png';
import whitehouse from '../../img/whitehouse.png';
import brandmain from '../../img/brandmain.gif';
import estimate from '../../img/estimate.gif';
import game from '../../img/game.gif';
import flutter from '../../img/flutter.gif';
import sfacfolio from '../../img/sfacfolio.gif';


export default function Portfolio() {
    const imageData = [
        { label: 'sfacfolio', alt: 'image1', src: sfacfolio },
        { label: 'graycity', alt: 'image2', src: graycity },
        { label: 'whitehouse', alt: 'image3', src: whitehouse },
        { label: 'estimate', alt: 'image4', src: estimate },
        { label: 'brandmain', alt: 'image5', src: brandmain },
        { label: 'game', alt: 'image6', src: game },
        { label: 'flutter', alt: 'image7', src: flutter },
        { label: 'withdang', alt: 'image1', src: withdang },


      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
      const [isHovering, setIsHovering] = useState(false);

      /** 슬라이드 실행 */
      useEffect(() => {
        let timer;
        if (!isHovering) {
            timer = setInterval(() => {
                setCurrentSlide(prev => (prev + 1) % imageData.length);
            }, 2000);
        } else {
            clearInterval(timer);
        }
        return () => clearInterval(timer);
    }, [isHovering]);

    
      /**마우스 오버 시 회전 멈추고, 1.3 스케일 효과 */
      const handleMouseEnter = () => {
        setIsHovering(true);
      };
      /** 마우스 떠나면 다시 재생 */
      const handleMouseLeave = () => {
        setIsHovering(false);
      };
      /**이전 버튼 */
      const handlePrevSlide = () => {
        setCurrentSlide(prev => (prev === 0 ? imageData.length - 1 : prev - 1));
      };
      /** 다음 버튼 */
      const handleNextSlide = () => {
          setCurrentSlide(prev => (prev + 1) % imageData.length);
      };


return(
<div className="pfContainer">
<h1 className="pfmaintitle">portfolio</h1>
    <div className="pfContent">
            <div className="imgslider"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}>
                        <button className="slider-arrow left" onClick={handlePrevSlide}>&lt;</button>

                        {imageData.map((image, index) => (
                            <img
                                key={image.alt}
                                src={image.src}
                                alt={`Slide ${index}`}
                                style={{
                                    transform: `rotateY(${(index - (currentSlide % imageData.length)) * 45}deg) translateZ(400px) ${isHovering && index === currentSlide % imageData.length ? "scale(1.3)" : ""}`,
                                    transition: 'transform 1s ease',
                                }}
                            />
                        ))}
                        <button className="slider-arrow right" onClick={handleNextSlide}>&gt;</button>
                    </div>
            </div>
</div>
);
}