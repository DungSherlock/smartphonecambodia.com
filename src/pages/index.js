import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Link from '../components/link'
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBolt, FaHome, FaWrench } from 'react-icons/fa'
import Form from '../components/form'
import Slider from '../components/slider'
import Box from '../components/box'
import Hr from '../components/hr'
import Benefits from '../components/benefits'
import styled from 'styled-components'
import HomeFeatures from '../components/homeFeatures'

let StyledBackground = styled.div`
  background: linear-gradient(to bottom,#f9fbfd 0,#fff 100%);
`

let Service = ({title, Icon = FaHome}) => (
  <Col xs={12} md={4} className="mb-3">
    <Link to="/">
      <Box>
        <Icon size={30}/>
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

let Index = () => (
  <Layout>
    <SEO title="Home" />
    <Slider/>
    <Container className="pt-4">
      <div className="text-center">
        <h4>Chuyên các loại đồ uống, bia, nước ngọt</h4>
        <p className="text-muted">Địa chỉ: ĐƯỜNG 12C - TRƯỜNG YÊN - HOA LƯ</p>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">Sản phẩm</h2>
      <Row>
        <Service title="Bia"/>
        <Service title="Nước ngọt" Icon={FaBolt}/>
        <Service title="Nước giải khát" Icon={FaWrench}/>
      </Row>
    </Container>
    {/* <div className="text-center py-5">
      <Button to="https://github.com/jeremylynch/gatsby-strapi-starter" className="btn btn-primary btn-lg">
        <FaGithub className="mr-1"/>
        View on Github
      </Button>
    </div> */}
    <StyledBackground>
      <Benefits/>
      <div className="py-5">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col md={8}>
              <Box style={{textAlign: 'left'}}>
                <h3 className="text-center">Liên hệ với cửa hàng</h3>
                <Hr/>
                <Form/>
              </Box>
            </Col>
          </Row>
        </Container>
      </div>
    </StyledBackground>
    <HomeFeatures/>
  </Layout>
)

export default Index
