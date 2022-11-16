import React from 'react';
import styled from 'styled-components';
import logo from '../logo.svg';

function HeaderUnstyled({className, isMobile}) {
    return (
      <header className={className}>
          <div className='container'>
            <img src={logo} alt="logo" height= { isMobile?'20px':undefined}/>
            { !isMobile && <span className='phone'>+7 (495) 495-49-54</span> }
            { isMobile && <img  src="/images/phone.svg" alt="phone"/> }
          </div>
      </header>
    );
 }

 export const Header = styled(HeaderUnstyled)`
  background: linear-gradient(0deg, #464341 0%, #010101 100%);
  margin-bottom: 196px;
  @media (max-width: 768px) { 
       margin-bottom: 71px;
  }
  .container{
    max-width:1447px;
    padding: 6px 29px 0px 25px;
    height: 100px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap; 
    @media (max-width: 768px) { 
      padding: 18px 24.3px 18px 20px;
      height: 60px;
    }
  }
  .phone{
    color:#fff;
    font-size: 24px;
  }
`;
 

