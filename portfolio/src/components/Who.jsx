
import styled from "styled-components";
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';

const Section = styled.div`
  height: 100vh;
  scrool-snap-align: center;
  display:flex;
  align-items:center;
  justify-content:center;
`;

const Container = styled.div`
  height:100vh;
  scrool-snap-align:center;
  width:1400px;
  display:flex;
  justify-content:space-between;
`;

const Left = styled.div`
 flex:1;

 @media only screen and (max-width: 768px){
  display:none;
 }
`;


const Right = styled.div`
flex:1;
position:relative;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-end;
gap:20px;
@media only screen and (max-width: 768px){
  align-items:center;
  text-align:center;
  padding:10px;
 }

`;

const Title = styled.h1`
 font-size:74px;
 @media only screen and (max-width: 768px){
  font-size:60px;
 }
 @media only screen and (min-width: 768px){
  text-align:right;
 }
`;
const WhatWeDo = styled.div`
 display:flex;
 align-items:center;
  gap:10px;
`;
const Line = styled.img`
 height:5px;
`;
const Subtitle = styled.h2`
 color:#da4ea2;
`;
const Desc = styled.p`
 font-size:24px;
 color:ligthgrey;
 text-align:center;
`;
const Button = styled.button`
 background-color:#da4ea2;
 color:white;
 width:150px;
 font-weigth:500;
 padding:10px;
 border:none;
 border-radius:5px;
 cursor:pointer;
`;

const Who = () => {
  return (
    <Section id="who">
      <Container>
        <Left>
        <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/> 
        <ambientLight intensity={1} />
        <directionalLight position={[3,2,1]} /> 
           <Cube />
        </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc style={{ color:"#da4ea2"}}>- John Doe -</Desc>
          <Desc>a developer with a passion for the creating, multiple diciplines like math, philosophy, science and art</Desc>
          <Button>See my works</Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
