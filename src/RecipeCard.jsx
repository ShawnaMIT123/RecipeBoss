import React, {useState} from 'react';
import styled from 'styled-components'


const RecipeCard = ({ image, name, description, instructions, arrayIndex, removeRecipe}) => {
  const [recipe, setRecipes] = useState([])
  const [formDisplayed, setFormDisplayed] = useState(false)

  return (
    <CardWrapper>
      <Image
        width="250px"
        height="230px"
        src={image}
        style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{instructions}</p>
     <Button onClick={()=>{removeRecipe(arrayIndex)}} >X</Button>

    </CardWrapper>
  )
}

export default RecipeCard

const CardWrapper = styled.div`
  background-color: white;
  width: 250px;
  height: 400px;
  cursor: pointer;
  position: relative;
  border: black solid 3px;
  border-radius: 5px;

`

export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`

const Button = styled.button`

background: ${props => props.primary ? "black" : "white"};
color: ${props => props.primary ? "white" : "black"};

font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid black;
border-radius: 3px;

margin-top: 1px;
margin-right: 2px;
position:absolute;
top:0;
right:0;

 `;
