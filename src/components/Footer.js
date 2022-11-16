import React from 'react';
import styled from 'styled-components';

function FooterUnstyled({className}) {
    return (
    <footer className={className}>
        <span>© TEST, 1022–2022</span>
    </footer>
    );
 }

 export const Footer = styled(FooterUnstyled)`
  background: #141414;
  height: 200px;
  text-align:center;
  font-family: 'Roboto',sans-serif;
  font-weight: 400;
  font-size:14px;
  color:#FFFFFF;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top:160px;
  @media (max-width: 768px) { 
    margin-top:84px;
  }
  span{
    padding-left: 7px;
    margin-bottom: 27px;
    @media (max-width: 768px) { 
    margin-top:18px;
    padding-left:0px;
  }
  }
`;