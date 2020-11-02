import React from 'react'
import 'antd/dist/antd.css';
import { Card, Row, Col } from 'antd';
import ProfileCard from "./components/ProfileCard"
import styled from 'styled-components'

const StyledWrapper = styled.div`

`
const Home = () => {
  return (
    <StyledWrapper>
      <ProfileCard />
    </StyledWrapper>
  )
}

export default Home;