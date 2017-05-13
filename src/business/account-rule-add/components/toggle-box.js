import React from 'react'

import { Header, Segment, Radio } from 'semantic-ui-react'

const ToggleBox = (props) => {
  const { title } = props
  return (
    <div className="ToggleBox">
      <Segment.Group>
        <Segment clearing>
          <Header as="h4" floated="left">
            {title}
          </Header>
          <Header floated="right">
            <Radio toggle/>
          </Header>
        </Segment>
        <Segment>
          {props.children}
        </Segment>
      </Segment.Group>
    </div>
  )
}

ToggleBox.propTypes = {

}

ToggleBox.displayName = 'ToggleBox'

export default ToggleBox
