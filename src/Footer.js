import React from 'react'
import styled from 'styled-components'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
}

var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

function Footer(props) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>

                <Button onClick={props.displayRecipeForm}>Add New Recipe</Button>
            </div>
        </div>
    )
}

export default Footer

const Button = styled.button`
width: 90%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
border-radius: 4px;
cursor: pointer;

:hover {
   background-color: #45a049;
}
`;
