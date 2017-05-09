import React from 'react';

import {List, Grid, Button} from 'semantic-ui-react';

const data = [
  {
    name: 'Mokona #1',
    number: 4,
    today: '3.5X',
    yesterday: '3.5X',
    last3Days: '3.5X',
    last7Days: '3.5X'
  },
  {
    name: 'Mokona #1',
    number: 4,
    today: '3.5X',
    yesterday: '3.5X',
    last3Days: '3.5X',
    last7Days: '3.5X'
  },
  {
    name: 'Mokona #1',
    number: 4,
    today: '3.5X',
    yesterday: '3.5X',
    last3Days: '3.5X',
    last7Days: '3.5X'
  }
];

const style = {
  marginTop: 20,
  border: '2px solid #ccc'
}

const AccountListData = () => {
  return (
    <div className="AccountListData" style={style}>
      <List divided relaxed>
        {data.map((item, key) => {
          return (
            <List.Item key={key} as={Grid} padded>
              <Grid.Column width="2">
                {item.name}
              </Grid.Column>
              <Grid.Column width="2">
                {item.number} rules applied
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Today</div>
                <div>{item.today}</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Yesterday</div>
                <div>{item.yesterday}</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Last 3 Days</div>
                <div>{item.last3Days}</div>
              </Grid.Column>
              <Grid.Column width="2" textAlign="center">
                <div>Last 7 Days</div>
                <div>{item.last7Days}</div>
              </Grid.Column>
              <Grid.Column width="4">
                <Button size="mini">Advert Manager</Button>
                <Button size="mini">Add Rule</Button>
              </Grid.Column>
            </List.Item>
          )
        })}
      </List>
    </div>
  );
};

AccountListData.propTypes = {

}

AccountListData.displayName = 'AccountListData';

export default AccountListData;
