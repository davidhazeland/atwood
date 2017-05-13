import React from 'react'

import { Segment } from 'semantic-ui-react'

const Box = (props) => {
  const { title, children } = props
  return (
    <Segment.Group className="Box">
      <Segment>
        {title}
      </Segment>
      <Segment>
        {children}
      </Segment>
    </Segment.Group>
  )
}

Box.propTypes = {

}

Box.displayName = 'Box'

export default Box
