import React from 'react';
import styled, { keyframes} from 'styled-components';

// import "./style.css";

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;
const Loading = styled.div`
border: 8px solid #f3f3f3; 
  border-top: 8px solid ${(props) => (props.$primary ? "hotpink" : "green")}; 
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 2s linear infinite;
`;
export default function Loader() {
  return (
    <Loading $primary></Loading>
  )
}
