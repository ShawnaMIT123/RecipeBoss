import React from 'react'
import styled from 'styled-components'

import {
  Button,
  Input,
  Footer,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";

const ImageSearchCard = ({picture, handleImageSelectedUrl, ...props}) => {
  return (
    <div className="col-md-3" style={{ marginTop: "10px", marginBottom: "10px" }}>
      <Card onClick={()=>{handleImageSelectedUrl(picture.urls.thumb)}}>
        <CardBody>
        <Image
          width="250px"
          height="150px"
          src={picture.urls.thumb}
          style={{ borderTopLeftRadius: '5px', borderTopRightRadius: '5px' }}
        />
        </CardBody>
      </Card>
    </div>
  )
}

export default ImageSearchCard



export const Image = styled.img`
  height: ${p => p.height};
  width: ${p => p.width};
  object-fit: cover;
`
