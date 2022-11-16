import React from 'react';
import styled from 'styled-components';

const ImgBlockUnstyled = ({className, image, alt}) => (
  <div className={className}>
    <img className='img' src={`/images/${image}`} alt={`${alt}`}/>
  </div>
  
)
export const ImgBlock = styled(ImgBlockUnstyled)`
  ${ p => p.isMobile ? '' : (p.position === 'l' ? 'padding: 4px 3px 0px 0px;' : '')}
  width: ${p => p.position === 'r' ? '857px' : '602px'};
  height: ${p => p.position === 'r' ? '480px' : '415px'};
  
  @media (max-width: 768px) { 
    width: 100%;
    height: ${p => p.position === 'r' ? '371px' : '360px'};
  }

  .img {
    width:100%;
    height:100%;
    object-fit:none;
    object-position: ${p => p.objectPos};
    @media (max-width: 768px) { 
      object-fit:cover;
      object-position: ${p => p.objectPos};
    }
  }
`;

const TextBlockUnstyled = ({className, title, text1, text2}) => (
  <div className={className}>
    <div className="text-block">
      <div className="section-title">
          {title}
      </div>
      <p className="section-desc">{text1}
      <span>{text2}</span></p>
    </div>
  </div>
)
export const TextBlock = styled(TextBlockUnstyled)`
  ${p => p.isMobile ? '' : (p.position === 'l' ? 'display: flex; justify-content: flex-end; width: 857px; margin: -6px 0px 0px 5px;' : 'margin: 10px 3px 0px 0px;') }
  @media (max-width: 768px) { 
      margin: 40px 0px 0px 0px;
      padding:0px 20px 0px 20px;
  }
  .text-block{
    max-width:620px;
    padding-left: 20px;
    @media (max-width: 768px) { 
      padding-left: 0px;
    }
  }
  .section-title{
    line-height: 110%;
  }
  .section-desc{
    font-family: 'Manrope-medium',sans-serif;
    font-weight: 500;
    font-size: 18px;
    color:#141414;
    margin-top: 33px;
    line-height: 127%;
    @media (max-width: 768px) { 
      font-size: 14px;
      margin-top: 30px;
      margin-bottom: 0px;
      line-height: 130%;
    }
    span{margin-top:8px; display: block;}
  }
`;

function ContentUnstyled({className, isMobile, title, sec1Img, sec1ImgPos, sec1Title, sec1TopText, sec1BottomText, sec2Img, sec2ImgPos, sec2Title, sec2TopText, sec2BottomText}) {
  
  const content = (swap, position, img, imgPos, title, topText, bottomText) => {
    const textBlock = <TextBlock isMobile={isMobile} position={position} title={title} text1={topText} text2={bottomText}/>;
    const imgBlock = <ImgBlock isMobile={isMobile} position={position} image={img} alt='image2' objectPos={imgPos}/>
    return swap ? [textBlock, imgBlock] : [imgBlock, textBlock]
  }

  return (
    <section className={className}>
        <div className='header-title'>
          {typeof title === 'string' && title}
          {typeof title === 'object' && title.map((t, i) => i + 1 < title.length ? [t, <br/>] : t)}
        </div>
        <div className="section-content">
          {content(false, 'r', sec1Img, sec1ImgPos, sec1Title, sec1TopText, sec1BottomText)}
        </div>
        <div className="section-content mc">
          {content(!isMobile, 'l', sec2Img, sec2ImgPos, sec2Title, sec2TopText, sec2BottomText)}
        </div>
    </section>
    );
 }

 export const Content = styled(ContentUnstyled)`
  max-width:1588px;
  
  font-family: 'OrchideaPro-medium',sans-serif;
  font-weight: 500;
  font-size:48px;
  color:#141414;
  @media (max-width: 768px) { 
    font-size: 24px;
    font-style: normal;
  }
  .header-title{
    margin: 0px 27px 0px 0px;
    text-align:center;
    text-transform: uppercase;
    margin-bottom:125px;
    line-height: 130%;
    @media (max-width: 768px) { 
      margin: 0px 0px 62px 0;
      text-align:left;
      padding:0px 20px 0px 20px;

    }
  }
  .section-content{
    display:flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) { 
      flex-direction: column;
    }
  }
  .mc{
      margin-top:96px;
      @media (max-width: 768px) { 
        margin-top:60px;
    }
  }
`;