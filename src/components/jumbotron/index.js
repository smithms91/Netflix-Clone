import React from 'react';
import { Container, Side, Title, Subtitle, Image, Inner, Item } from './styles/jumbotron'

export default function Jumbotron({ children,  direction = 'row', ...restProps}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction} >
        {children}
      </Inner>
    </Item>
  );
};


Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
  return <Container {...restProps}>{children}</Container>
}

Jumbotron.Side = function JumbotronSide({children, ...restProps}) {
  return <Side {...restProps}>{children}</Side>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
  return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}) {
  return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
  return <Image {...restProps} />
}