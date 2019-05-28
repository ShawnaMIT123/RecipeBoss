import React, { Component } from 'react';
import styled from 'styled-components'



class SearchBar extends Component {
  render() {
    return (
      <div >
      <span >
      <Input
        type="text"
        placeholder="Search for Image URL"
        value={this.props.query}
        onChange={event => this.props.handleSearchBarChange(event.target.value)}
      /> </span>
      <span >
      <Button type="button" onClick={() => this.props.handleSearchBarSubmit()} >
      Search Images
    </Button>
    </span>
    </div>

    );
  }
}

export default SearchBar;

const Input = styled.input`
width: 25%;
padding: 12px 20px;
margin: 15px 8px 8px 45px;
display: inline-block;
border: 1px solid #ccc;
border-radius: 4px;
box-sizing: border-box;
`;
const Button = styled.button`
width: 15%;
background-color: #4CAF50;
color: white;
padding: 14px 20px;
border: none;
border-radius: 4px;
cursor: pointer;

`;
