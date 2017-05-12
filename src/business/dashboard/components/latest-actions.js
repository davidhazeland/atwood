import React from 'react'

import { Table } from 'semantic-ui-react'

const LatestActions = (props) => {
  const { data } = props

  return (
    <div className="LatestActions" style={{marginTop: 20}}>
      <Table basic>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell colSpan="4">LATEST ACTIONS</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Account</Table.HeaderCell>
            <Table.HeaderCell>Rule</Table.HeaderCell>
            <Table.HeaderCell>Checked Time</Table.HeaderCell>
            <Table.HeaderCell>Results</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {data.map((item, key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>{item.account}</Table.Cell>
              <Table.Cell>{item.rule}</Table.Cell>
              <Table.Cell>{item.checkedTime}</Table.Cell>
              <Table.Cell>{item.result}</Table.Cell>
            </Table.Row>
          )
        })}
        </Table.Body>
      </Table>
    </div>
  )
}

LatestActions.propTypes = {

}

LatestActions.displayName = 'LatestActions'

export default LatestActions
