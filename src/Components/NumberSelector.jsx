import React, { useState } from 'react'
import styled from 'styled-components'

export const NumberSelector = ({setError, error, selectNum, setSelectNum}) => {
    const array = [1, 2, 3, 4, 5, 6];

    
    const numSelectorHandler = (num) => {
        setSelectNum(num);
        setError("");
    }
    
  return (
    <NumSelContainer>
        <p className='err'>{error}</p>
        <div className='flex'>
        {array.map((num,i)=>(
             <Box 
            isSelected = {num==selectNum}
            key={i} 
            onClick={() => numSelectorHandler(num)}
            >{num}
            </Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumSelContainer>
  )
}

const NumSelContainer = styled.div`
    .err{
        color: red;
        font-size: 20px;
    }
    display: flex;
    flex-direction: column;
    align-items: end;
    p {
        font-size: 24px;
        font-weight: 700px;
    }
    .flex {
        display: flex;
        gap: 24px;
    }
`
const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    color: ${(props) => (!props.isSelected ? "black" : "white")};
`