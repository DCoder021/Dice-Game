import React from 'react'
import styled from "styled-components";

const HomePage = ({toggle}) => {
  return (
   <Container>
    <div>
    <img src="/images/dices.png" alt="" />
    </div>
    
    <div className='content'>
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
    </div>
   </Container>
  )
}

export default HomePage

const Container = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    align-items: center;

    margin: 0 auto;
    .content {
        h1 {
            font-size: 96px;
            white-space: nowrap;
            //sass property
        }

    }
`
const Button = styled.button`
padding: 10px, 18px, 10px, 18px;
color: white;

min-width: 220px;
height: 44px;
font-size:16px ;

border-radius: 5px;
background: #000000;
transition: 0.4s background ease-in;

&:hover {
    background-color: white;
    border-color: 1px solid black;
    color: black;
    transition: 0.3s background ease-out;
    cursor: pointer;
}
`
