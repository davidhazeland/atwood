import React from 'react'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const renderTab = (name, to, path) => {
  return <Menu.Item name={name} as={Link} to={to} active={to === path}/>
}

const Header = (props) => {
  const { path } = props

  return (
    <div className="Header">
      <Menu pointing secondary>
        <Menu.Item header>Atwood</Menu.Item>
        {renderTab('Dashbard', '/dashboard', path)}
        {renderTab('Advert Accounts', '/accounts', path)}
        <Menu.Menu position='right'>
          <Menu.Item name='logout'/>
        </Menu.Menu>
      </Menu>
    </div>
  )
}

Header.propTypes = {}

export default Header
