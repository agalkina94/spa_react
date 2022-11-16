import React from 'react';
import $ from 'jquery';
import {Header} from './components/Header';
import {Content} from './components/Content';
import {Slider} from './components/Slider';
import {Footer} from './components/Footer';

function App() {

  const scrollStates = [
    { pageTop: 0, sliderLeft: 0, sliderItemPos: '0% 100%'},
    { pageTop: 570, sliderLeft: 0, sliderItemPos: '0% 100%'},
    { pageTop: 1520, sliderLeft: 0, sliderItemPos: '0% 100%'},
    { pageTop: 1520, sliderLeft: 700, sliderItemPos: '20% 80%'},
    { pageTop: 1520, sliderLeft: 1600, sliderItemPos: '40% 60%'},
    { pageTop: 2380, sliderLeft: 1600, sliderItemPos: '40% 60%'},
    { pageTop: 2745, sliderLeft: 1600, sliderItemPos: '40% 60%'},
    { pageTop: 4000, sliderLeft: 1600, sliderItemPos: '40% 60%'},
  ];
  const curScroll = React.useRef(0);
  const scrolling = React.useRef(false);

  const mobileWidth = 768;
  const [isMobile, setMobile] = React.useState(window.innerWidth <= mobileWidth);

  React.useEffect(() => {
    // modern Chrome requires { passive: false } when adding event
    let supportsPassive = false;
    try {
      window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; } 
      }));
    } catch(e) {}

    const wheelOpt = supportsPassive ? { passive: false } : false;
    const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
    
    const slider = $('#slider');
    const doc = $('html, body');
    const sliderItems = $('.slider-item img');
    const onScroll = (down) => {
      if (scrolling.current) return;

      const prevScroll = curScroll.current;
      curScroll.current = down ? 
        Math.min(curScroll.current+1, scrollStates.length-1)
        : Math.max(curScroll.current-1, 0);
        
      if (prevScroll !== curScroll.current) {
          scrolling.current = true;
          doc.stop().animate({
            scrollTop: scrollStates[curScroll.current].pageTop
          }, 1100, () => scrolling.current = false);
          slider.stop().animate({
            scrollLeft: scrollStates[curScroll.current].sliderLeft
          }, 1100, () => scrolling.current = false);
          sliderItems.css('object-position', scrollStates[curScroll.current].sliderItemPos)
      }
    }

    const preventScroll = (e) => {
      e.preventDefault();
      onScroll(e.deltaY > 0);
    }
    window.addEventListener(wheelEvent, preventScroll, wheelOpt); // modern desktop

    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    const keys = {38: 1, 40: 1, 33: 1, 34: 1, 32: 1};
    const preventScrollKeys = (e) => {
      if (keys[e.keyCode]) {
        e.preventDefault();
        onScroll(e.keyCode === 40 || e.keyCode === 34 || e.keyCode === 32)
        return false;
      }
      if (e.keyCode === 36 || e.keyCode === 35) {
        if (scrolling.current) {
          e.preventDefault();
          return false;
        }
        if (e.keyCode === 36) curScroll.current = 0;
        else curScroll.current = scrollStates.length-1;
      }
    }
    window.addEventListener('keydown', preventScrollKeys, false);

    const handleResize = () => {
      setMobile(window.innerWidth <= mobileWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(wheelEvent, preventScroll);
      window.removeEventListener('touchmove', preventScroll);
      window.removeEventListener('keydown', preventScrollKeys);
      window.removeEventListener('resize', handleResize);
    }

  }, []);

  return (
    <div className="App">
        <Header isMobile={isMobile}/>
          <Content 
            title={!isMobile?"ut aliquip ex ea commodo consequat":["ut aliquip","ex ea commodo","consequat"]}
            sec1Img="photo1.png" 
            sec1ImgPos={!isMobile?'-24.25px -104px':'50%'}
            sec1Title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            sec1TopText="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            sec1BottomText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            sec2Img="photo2.png"
            sec2ImgPos={!isMobile?'50% 29.5%':'0% 14%'}
            sec2Title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            sec2TopText="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            sec2BottomText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            isMobile={isMobile}
          />
          <Slider 
            images={["slider1.png", "slider2.png", "slider3.png", "slider4.png", "slider5.png", "slider6.png", "slider7.png", "slider8.png"]}
          />
          <Content 
            title={!isMobile?"ut aliquip ex ea commodo consequat":["ut aliquip","ex ea commodo","consequat"]}
            sec1Img="photo3.png" 
            sec1ImgPos={!isMobile?'-20px -62px':'50%'}
            sec1Title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            sec1TopText="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            sec1BottomText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            sec2Img="photo4.png"
            sec2ImgPos={!isMobile?'50% 30%':'0% 14%'}
            sec2Title="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            sec2TopText="Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            sec2BottomText="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
            isMobile={isMobile}
          />
          <Footer/>
    </div>
  );
}

export default App;
