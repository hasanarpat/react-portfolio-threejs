import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Mac from "./Mac"
import styled from 'styled-components'

const Description = styled.div`
width:200px;
height:70px;
padding:15px;
background-color:white;
color:black;
font-size:14px;
font-weigth:300;
border-radius:10px;
position:absolute;
top:100px;
right:100px;
@media only screen and (max-width: 768px){
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
 }
`;

const WebDesign = () => {
  return (
   <>
     <Canvas>
      <Stage enviroment="city" intensity={0.6}>
        <Mac />
      </Stage>
      <OrbitControls enableZoom={false} />
    </Canvas>
    <Description>
      We design products with a strong focus on both wolrd class design and ensuring your product is a market success.
    </Description>
   </>
  )
}

export default WebDesign