import React from 'react'
import styled from 'styled-components'
import sauceIcon from './sauce.png'

const NavBar = ({ links, ...props }) => {
  return (
    <Header>
      <HeaderMenu>
        <HeaderItem>
          <Icon size="small" alt="sauce" src={sauceIcon} />
        </HeaderItem>
        <HeaderItem>
          Recipes
        </HeaderItem>
        <HeaderItem>User@RecipeBoss.com</HeaderItem>
      </HeaderMenu>
    </Header>
  )
}
export default NavBar

NavBar.displayName = 'NavBar'

const Header = styled.header`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
border: 1px solid #e7e7e7;
background-color: #f3f3f3;
`
const HeaderMenu = styled.ul`
  margin-top: 0px;
  align-items: center;
  display: flex;
  > li:last-child {
    margin-left: auto;
  }
`
const HeaderItem = styled.li `
display: block;
color: #666;
text-align: center;
padding: 14px 16px;
text-decoration: none;

li a {

  display: block;
  color: #666;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #ddd;
}

li a.active {
  color: white;
  background-color: #4CAF50;
}
`
const Icon = styled.img`
  height: 24px;
  width: 24px;
  object-fit: cover;
  border-radius: 50%;
`
