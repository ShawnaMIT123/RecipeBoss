import React from 'react'
import RecipeCard from './RecipeCard'
import styled from 'styled-components'

const RecipeIndex = ({recipes, filterTerm, ...props}) => {

  function filteredRecipes(filterTerm){
    if(!!filterTerm == false){
      return recipes
    } else {
      return recipes.filter((recipe) => {
        return recipe.name.toLowerCase().indexOf(filterTerm.toLowerCase()) >= 0
      })
    }
  }

  return (
    <GridLayout >
      {filteredRecipes(filterTerm).length != 0 ? filteredRecipes(filterTerm).map((recipe, idx) => (
        <RecipeCard key={idx} {...recipe} arrayIndex={idx} removeRecipe={props.removeRecipe} />
      )) : <h1> No Recipes Found</h1>}
      { console.log(filteredRecipes(filterTerm)) }
    </GridLayout>
  )
}

export default RecipeIndex

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 15px;
  justify-items: center;
  position: relative;
  margin-top: 50px;
  margin-bottom: 30px;
  `
