import React from 'react'

import {Menu} from 'semantic-ui-react'

const Header = (props) => {
  const activeItem = 'messages'
  return (
    <div className="Header">
      <Menu pointing secondary>
          <Menu.Item header>Atwood</Menu.Item>
          <Menu.Item name='dashboard' active={activeItem === 'home'}/>
          <Menu.Item name='Advert Accounts' active={activeItem === 'messages'}/>
          <Menu.Menu position='right'>
            <Menu.Item name='logout' active={activeItem === 'logout'}/>
          </Menu.Menu>
        </Menu>
    </div>
  )
}

Header.propTypes = {}

export default Header
