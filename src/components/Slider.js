import React from 'react';
import styled from 'styled-components';
import $ from 'jquery';


function SliderUnstyled({className, images}) {
  return (
    <section className={className}>
        <div className='header-title'>Lorem ipsum dolor sit amet</div>
          <div className="slider-wrapper"  id="slider">
              {images.map((imgName, index) => (
                <div className={`slider-item ${index === 0 ? 'first-item' : index === images.length - 1 ? 'last-item' : ''}`} 
                    key={`slider-item-${index}`}
                >
                  <img src={`/images/slider/${imgName}`} alt="image"/>
                </div>
              ))}
        </div>
    </section>
  );
 }

 export const Slider = styled(SliderUnstyled)`
  max-width:100%;
  margin-top:154px;
  font-family: 'OrchideaPro-medium',sans-serif;
  font-weight: 500;
  font-size:48px;
  color:#141414;
  margin-bottom: 144px;
  @media (max-width: 768px) { 
    margin-top:72px;
    font-size:24px;
    margin-bottom: 62px;
  }

  .header-title{
    margin-left: 262px;
    text-transform: uppercase;
    margin-bottom:126px;
    line-height: 130%;
    @media (max-width: 768px) { 
     margin-left: 20px;
     width: 209px;
     margin-bottom:58px;
    }
  }
  .slider {
    position: relative;
  }

  .slider-wrapper {
    white-space: nowrap;
    overflow-x: hidden;
    @media (max-width: 768px) { 
      overflow-x: scroll;
    }
    scrollbar-width: none;
  }
  .slider-wrapper::-webkit-scrollbar {
    display: none;
  }

  
  .slider-item {
    display: inline-block;
    width: 320px;
    height: 488.89px;
    margin-right: 40px;
    @media (max-width: 768px) { 
      width: 225.35px;
      height: 344.29px;
      margin-right: 28px;
    }
  }
  .first-item {
    margin-left: 262px;
    @media (max-width: 768px) { 
      margin-left: 20px;
    }
  }
  .last-item {
    margin-right: 262px;
    @media (max-width: 768px) { 
      margin-right: 20px;
    }
  }
  .slider-item img {
    max-width:100%;
    height:100%;
    object-fit:none;
    /* Parallax */
    object-position: 0% 100%;
    transition: object-position 1.1s ease-in-out;
    -moz-transition: object-position 1.1s ease-in-out; /* FF 4 */
    -webkit-transition: object-position 1.1s ease-in-out; /* Safari & Chrome */
    -o-transition: object-position 1.1s ease-in-out; /* Opera */
  }

`;