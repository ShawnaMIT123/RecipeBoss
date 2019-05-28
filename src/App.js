import React, {useState, useEffect} from 'react';
import RecipeIndex from './RecipeIndex'
import RecipeForm from './RecipeForm'
import Footer from './Footer'
import FilterBar from './FilterBar'
import NavBar from './NavBar';
import recipeData from './recipes'
import RecipeCard from './RecipeCard'
import styled from 'styled-components'


function App() {
  const [recipes, setRecipes] = useState([])
  const [formDisplayed, setFormDisplayed] = useState(false)
  const [filterTerm, setFilterTerm] = useState("")

  useEffect(() => {
    setRecipes(recipeData)
  }, [])

  function handleFormSubmit(newRecipe) {
    setRecipes([...recipes, newRecipe])
    setFormDisplayed(!formDisplayed)
  }

  function displayRecipeForm(){
    setFormDisplayed(!formDisplayed)
  }

  function removeRecipe(index){
    setRecipes([...recipes.slice(0,index), ...recipes.slice(index + 1)])
  }

  function handleFilterBarChange(filterTerm){
    setFilterTerm(filterTerm)
  }

  return (
    <div className="App">
      <NavBar />
      <Content >
        {
          formDisplayed
          ? <RecipeForm handleFormSubmit={handleFormSubmit} />
          : (
        <div>
        <FilterBar handleFilterBarChange={handleFilterBarChange} />
        <RecipeIndex removeRecipe={removeRecipe} recipes={recipes} setRecipes={setRecipes} filterTerm={filterTerm} />
        <Footer displayRecipeForm={displayRecipeForm} />
        </div>
          )
        }
      </ Content>
    </div>
  );
}

export default App;

const Content = styled.div`
  /* margin-top: 45px; */
`
