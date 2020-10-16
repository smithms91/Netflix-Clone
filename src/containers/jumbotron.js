import React from 'react';
import jumboData from '../fixtures/jumbo'
import { Jumbotron } from '../components'


export function JumbotronContainer() {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => (
        <Jumbotron key={item.id} direction={item.direction}>
          <Jumbotron.Side>
            <Jumbotron.Title>{item.title}</Jumbotron.Title>
            <Jumbotron.Subtitle>{item.subTitle}</Jumbotron.Subtitle>
          </Jumbotron.Side>
          <Jumbotron.Image src={item.image} alt={item.alt}></Jumbotron.Image>
        </Jumbotron>
      ))}
    </Jumbotron.Container>
  );
}
