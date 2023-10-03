import React from 'react'
import styled from "styled-components";

const HeaderStyled = styled.div`
    width: 680px;
    min-height: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    border: 1px solid black;
`

const Title = styled.div`
    font-size: 15px;
    font-weight: 600;
`

const Header = () => {
  return (
    <HeaderStyled>
        <Title>
            끝말잇기 왕은 누구인가?
        </Title>
    </HeaderStyled>
  )
}

export default Header
