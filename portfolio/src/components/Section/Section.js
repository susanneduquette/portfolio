import React from 'react';
import { Container, Name } from './Section.styles';

export default function Section({ title, id }) {
    return (
      <Container>
        <div className="section-content" id={id}>
          <Name>{title}</Name>
        </div>
      </Container>
    );
  }