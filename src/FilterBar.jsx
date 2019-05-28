import React, { Component } from 'react';
import styled from 'styled-components'


class FilterBar extends Component {
  render() {
    return (
      <Input
        type="text"
        placeholder="Search for Recipes By Name..."
        onChange={event => this.props.handleFilterBarChange(event.target.value)}
      />

    );
  }
}


export default FilterBar;


const Input = styled.input`
width: 500px;
top: 300px;
margin: 10px auto;
display: block;
padding: 10px;
text-align: center;
text-color: #777;
position: relative;
top: 35px;
`;
