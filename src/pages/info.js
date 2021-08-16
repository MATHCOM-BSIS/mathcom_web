import React, { Component } from 'react';
import Title from '../components/title';
import { Container, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <>
        <Title title="MATH-COM" subtitle="정보 수학 융합 동아리" className="info-title-gradient" />
        <Container fluid>
          <Container fluid="sm" className="ct">
            <h1 className="Header">
              MATHCOM - BSIS 정보 수학 융합동아리
            </h1>
          </Container>
        </Container>
      </>
    );
  }
}