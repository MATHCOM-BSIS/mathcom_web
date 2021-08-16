import React, { Component } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Title from '../components/title';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import members from '../datas/members';

import ticktaktoe_img from "../images/perfect_ticktaktoe.png"

export default class Home extends Component {
    render() {
        const membs = members.map(
            (one, index) => (
                <Col key={index} xl={4} lg={6} md={6}>
                    <Card className="Members-card">
                    <Card.Img variant="top" src={one.img} />
                    <Card.Body className="Members-card-body text-center">
                        <Card.Title className="Members-card-title">{one.name}</Card.Title>
                        <Card.Subtitle className="Members-card-sub">{one.role}</Card.Subtitle>
                        <Card.Text className="Members-card-desc pt-2">
                        {one.description}
                        </Card.Text>
                        {
                        one.github && <Card.Link href={one.github} title="GitHub 링크" target="_blank">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </Card.Link>
                        }
                    </Card.Body>
                    </Card>
                </Col>
            )
        )

        return (
            <>
                <Title title="MATH COM" subtitle="부산일과학고등학교 인공지능 동아리" className="Title-gradient" />
                <Container fluid>
                <Container fluid="sm" className="ct Intro-ct">
                    <Button variant="main_btn" href="/projects">{'PROJECTS >'}</Button>
                    <Container>
                        <Row className="no-gutters">
                        <Col key="Perfect Ticktaktoe" xl={12} lg={12} md={12}>
                            <Card className="project-card flex-row flex-wrap">
                                <Col xl={4} lg={5} xs={9} className="project-img">
                                    <Card.Img variant="top" src={ticktaktoe_img} style={{ marginTop: '1rem' }} />
                                </Col>
                                <Col xl={8} lg={7}>
                                    <Card.Body>
                                        <Card.Title className="project-card-title">Perfect Ticktaktoe (완벽한 틱택토)</Card.Title>
                                        <Card.Text className="project-card-dsec">
                                            부산일과학고등학교 2021 7월 17일 제9회 승학과학축전의 주제로 사용된 "완벽한 틱택토" 입니다.
                                        </Card.Text>
                                        <Button variant="look_btn" href="/projects/ticktaktoe">자세히 보기</Button>
                                        <Button variant="github_btn" href="https://github.com/MATHCOM-BSIS/perfect-tictaktoe">
                                            깃허브 확인하기
                                        </Button>
                                        <Card.Text style={{color: 'blue', fontSize: '10pt'}}>개발 완료된 프로젝트입니다.</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Card>
                        </Col>
                        <Col key="minecraft" xl={12} lg={12} md={12}>
                            <Card className="project-card flex-row flex-wrap">
                                <Col xl={4} lg={5} xs={9} className="project-img">
                                    <Card.Img variant="top" src={ticktaktoe_img} style={{ marginTop: '1rem' }} />
                                </Col>
                                <Col xl={8} lg={7}>
                                    <Card.Body>
                                        <Card.Title className="project-card-title">Minecraft.PY</Card.Title>
                                        <Card.Text className="project-card-dsec">
                                            동아리 부원 전체가 참여하는 파이썬으로 만든 마인크래프트 "Minecraft.PY" 입니다.
                                        </Card.Text>
                                        <Button variant="look_btn" href="/projects/minecraft">자세히 보기</Button>
                                        <Button variant="github_btn" href="https://github.com/MATHCOM-BSIS/perfect-tictaktoe">
                                            깃허브 확인하기
                                        </Button>
                                        <Card.Text style={{color: 'green', fontSize: '10pt'}}>개발 중인 프로젝트입니다.</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Card>
                        </Col>
                        <Col key="minecraft" xl={12} lg={12} md={12}>
                            <Card className="project-card flex-row flex-wrap">
                                <Col xl={4} lg={5} xs={9} className="project-img">
                                    <Card.Img variant="top" src={ticktaktoe_img} style={{ marginTop: '1rem' }} />
                                </Col>
                                <Col xl={8} lg={7}>
                                    <Card.Body>
                                        <Card.Title className="project-card-title">Omok.ai</Card.Title>
                                        <Card.Text className="project-card-dsec">
                                            2021 기준 일동과 이동이 개발한 오목 인공지능 "Omok.ai" 입니다.
                                        </Card.Text>
                                        <Button variant="look_btn" href="/projects/omok">자세히 보기</Button>
                                        <Button variant="github_btn" href="https://github.com/MATHCOM-BSIS/perfect-tictaktoe">
                                            깃허브 확인하기
                                        </Button>
                                        <Card.Text style={{color: 'red', fontSize: '10pt'}}>개발 중단된 프로젝트입니다.</Card.Text>
                                    </Card.Body>
                                </Col>
                            </Card>
                        </Col>
                        </Row>
                        
                    </Container>

                    <Button variant="main_btn" href="/members"> { 'MEMBERS >' } </Button>
                    <Container>
                        <Row className="no-gutters">
                            {membs}
                        </Row>
                    </Container>
                </Container>
                </Container>
            </>
        )
    }
}