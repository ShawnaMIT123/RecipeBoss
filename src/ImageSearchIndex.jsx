import React from 'react'
import ImageSearchCard from './ImageSearchCard'
import styled from 'styled-components'


const ImageSearchIndex = ({data, handleImageSelectedUrl }) => {
  return (
    <GridLayout >
      {data.map((pic, idx)  => {
        return <ImageSearchCard key={idx} picture={pic} handleImageSelectedUrl={handleImageSelectedUrl}/>
      })}
    </ GridLayout>
  )
}

export default ImageSearchIndex

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 15px;
  justify-items: center;
  position: relative;
  margin-top: 5px;
`
