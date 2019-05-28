import React, {useState, useEffect} from 'react';
import RecipeCard from './RecipeCard'
import styled from 'styled-components'
import SearchBar from './SearchBar'
import ImageSearchIndex from './ImageSearchIndex'
import axios from 'axios';

function RecipeForm(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [instructions, setInstructions] = useState("");
  const [image, setImage] = useState("");
  const [search, setSearch] = useState("");


  const [data, setData] = useState("");
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");


  useEffect(() => {
    if(!!url){
      const fetchData = async () => {
        const result = await axios(url);

        setData(result.data.results);
        console.log(result.data.results)
      };

      fetchData();
    }
  }, [url]);


  function handleSearchBarChange(searchTerm) {
    setQuery(searchTerm)
  }

  function handleSearchBarSubmit(searchTerm) {
    setUrl(`https://api.unsplash.com/search/photos/?page=1&per_page=6&query=${query}&client_id=f08cfd8bb084b32cbd52e463a16c4b579efdc280b61dba52d1c1386401cd8e26`)
  }

  function handleImageSelectedUrl(url){
    setImage(url)
    setData("")
  }


return (
    <Form className="form-group" onSubmit={() => props.handleFormSubmit({name, description, instructions, image})}>
      <FormHeader > Add New Recipe</FormHeader>
      <Input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Recipe Name"
        type="text"
        name="name"
        required
      />
      <Input
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
        type="text"
        name="description"
        required
      />
      <Input
        value={instructions}
        onChange={e => setInstructions(e.target.value)}
        placeholder="Instructions"
        type="text"
        name="instructions"
        required
      />
      <Input
        value={image}
        onChange={e => setImage(e.target.value)}
        placeholder="Image URL"
        type="text"
        name="image"
        required
      />
      <SearchBar handleSearchBarChange={handleSearchBarChange} handleSearchBarSubmit={handleSearchBarSubmit} />
      {!!data ? <ImageSearchIndex data={data} handleImageSelectedUrl={handleImageSelectedUrl} /> : null}
<Button type="submit">Submit</Button>
    </Form>
  );
}
export default RecipeForm;


const Form = styled.form`
border-radius: 20px;
background-color: #f2f2f2;
margin: 100px 100px 0px 100px;
position: relative;
`;
const FormHeader = styled.h1`
/* border-radius: 20px; */
/* background-color: #f2f2f2;
margin: 0px 0px 0px 350px;
position: relative;
top: 0px; */
margin: 0px;
padding: 20px 0px 0px 0px;
text-align: center;

`;
const Input = styled.input`
width: 90%;
padding: 12px 20px;
margin: 15px 8px 8px 45px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;
const Button = styled.button`
width: 90%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
margin: 15px 8px 30px 45px;
border: none;
border-radius: 4px;
cursor: pointer;

:hover {
   background-color: #45a049;
}
`;
