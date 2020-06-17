import React from 'react'

export default ({ championRoles }) => (
  <>
    <div>Roles:</div>
    {
      championRoles.map(role => (
        <div key={role.id}>{role.role}</div>
      ))
    }
  </>
)
