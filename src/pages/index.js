import React from 'react'
import Helmet from 'react-helmet'
import styled from 'react-emotion'
import { injectGlobal } from 'emotion'
import { fluid } from 'utils'

injectGlobal`
  body {
    margin: 0;
    overflow: hidden;
    padding: 0;
  }
`

const Container = styled.div`
  background: #fff;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  padding: 1vh 1vw;
  position: relative;
  width: 100vw;
`

const Float = styled.span`
  left: 17vw;
  max-width: 45vw;
  position: fixed;
  top: 17vh;
  z-index: 11;
`

const Title = styled.h1`
  color: #080808;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  font-weight: bold;
  font-size: ${fluid({ min: '56px', max: '160px' })}
  font-style: italic;
  line-height: 1;
  margin: 0;
  mix-blend-mode: difference;
  padding: 0;
  text-transform: uppercase;
`

const IndexPage = () => (
  <Container>
    <Helmet>
      <title>Young Guns</title>
    </Helmet>

    <Float>
      <Title>
        <div>Young</div>
        <div>Guns</div>
      </Title>
    </Float>
  </Container>
)

export default IndexPage
