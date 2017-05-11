import React from 'react';

import {Table} from 'semantic-ui-react';

const data = [
  {
    checkedTime: '2017-05-06 16:00:10',
    result: '9 advert sets had turned off'
  },
  {
    checkedTime: '2017-05-06 16:00:10',
    result: '9 advert sets had turned off'
  },
  {
    checkedTime: '2017-05-06 16:00:10',
    result: '9 advert sets had turned off'
  }
];

const style = {
  marginTop: 20,
  border: '2px solid #ccc'
}

const RuleActivityListData = () => {
  return (
    <div className="RuleActivityListData" style={style}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Checked Time</Table.HeaderCell>
            <Table.HeaderCell>Results</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
        {data.map((item, key) => {
          return (
            <Table.Row key={key}>
              <Table.Cell>{item.checkedTime}</Table.Cell>
              <Table.Cell>{item.result}</Table.Cell>
            </Table.Row>
          )
        })}
        </Table.Body>
      </Table>
    </div>
  );
};

RuleActivityListData.propTypes = {

}

RuleActivityListData.displayName = 'RuleActivityListData';

export default RuleActivityListData;
