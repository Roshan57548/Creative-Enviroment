import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import "./Apply.css";
const Apply = () => {
  

  return (
    <Wrapper>
      
        <a className="top-btn" href="https://wa.me/+918937991921" target="_blank">
          <WhatsAppIcon id="WhatsAppIcon"/>
        </a>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .top-btn {
    font-weight: bold;
    font-size: 20px;
    width: 70px;
    height: 70px;
    color: #fff;
    background-color: green;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 50%;
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }
  @media screen and (max-width: 600px) {
    .top-btn {
      font-size: 10px;
      width: 60px;
      height: 60px;
      right: 0;
      left: 80%;
      bottom: 2rem;
    }
  }
`;

export default Apply;
