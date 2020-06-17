import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Team = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink)`
  text-decoration: none;
`

export default ({ name }) => (
  <Team>
    <Link to={`/champions/${name}`}>{`${name}`}</Link>
  </Team>
)
