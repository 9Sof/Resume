import React from 'react'
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';
import { FacebookFilled, GithubFilled, MediumSquareFilled } from '@ant-design/icons';
import styled from 'styled-components'

const StyledWrapper = styled.div`

  font-family: 'Poppins', sans-serif;

  .title-card{
    width: 572px;
    height: 700px;
    border-color: red;
    background-color: #FFE00D;
    background-image: url("Path1.png");
    background-repeat: no-repeat;
    background-position: bottom; 
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    box-shadow: 0 0 6px 0 rgba( 0, 255, 255,0.6);
  }

  h2{
      color: #FC394D;
      font-size: 32px;
      font-weight: bold;
      margin: 0;
  }
  h3 {
      color: #222B45;
      font-size: 24px;
      font-weight: 600;
      margin: 0;
  }
  p{
      color: #707070;
      font-size: 16px;
  }

  .icon-profile{
      display:flex;
      justify-content: center;
      margin-bottom: 12px;
  }
  .icon_{
    color: #A9A9A9;
    font-size: 36px;
    padding: 10px;
  }
  .btn-download{
    background-image: linear-gradient(#FC364A, #FD8590);
    font-size:16px;
    font-weight:600;
    color:white;
    width:191px;
    height:50px;
  }
`

const ProfileCard = () => {
    return (
        <StyledWrapper>
                <Card bordered={true} className='title-card'>
                    <img src="image2.png" />
                    <h3>Hi, I'm Madsoffee Yako</h3>
                    <h2>Computer Engineering</h2>
                    <p>Website Developer</p>
                    <div className="icon-profile">
                        <FacebookFilled className="icon_" />
                        <GithubFilled className="icon_" />
                        <MediumSquareFilled className="icon_" />
                    </div>
                    <Button shape="round" className="btn-download" >Download CV</Button>
                </Card>
        </StyledWrapper>
    )
}

export default ProfileCard;