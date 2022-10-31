import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <HeaderTitles>
        <HeaderTitleSm>Hero & carosel</HeaderTitleSm>
        <HeaderTitleLg className="headerTitleLg">accordion</HeaderTitleLg>
      </HeaderTitles>
      <HeaderImg
        className="headerImg"
        src="https://4kwallpapers.com/images/wallpapers/dark-background-abstract-background-network-3d-background-2560x1440-8324.png"
        alt=""
      />
    </Container>
  )
}

export default Header

const Container = styled.div`
    margin-top: 60px;
    
`
const HeaderTitles = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Lora", serif;
    color: #444;
`

const HeaderTitleSm = styled.span`
    position: absolute;
    top: 16%;
    font-size: 20px;
    font-size: 72px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`
const HeaderTitleLg = styled.span`
    position: absolute;
    top: 20%;
    font-size: 100px;
    
`

const HeaderImg = styled.img`
    width: 100%;
    height: 250px;
    margin-top: 80px;
    object-fit: cover;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(5,5,74,1) 60%, rgba(0,212,255,1) 100%);
`