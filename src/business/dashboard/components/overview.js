import React from 'react'

import { Header, Segment, Grid, Statistic } from 'semantic-ui-react'

const Overview = () => {
  return (
    <div className="Overview">
      <Header as='h5' attached='top'>
        ROAS
      </Header>
      <Segment attached as={Grid} columns="4" textAlign="center" divided>
        <Grid.Column>
          <Statistic size="mini">
            <Statistic.Label>Today</Statistic.Label>
            <Statistic.Value>3.5X</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="mini">
            <Statistic.Label>Yesterday</Statistic.Label>
            <Statistic.Value>3.5X</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="mini">
            <Statistic.Label>Last 3 Days</Statistic.Label>
            <Statistic.Value>3.5X</Statistic.Value>
          </Statistic>
        </Grid.Column>
        <Grid.Column>
          <Statistic size="mini">
            <Statistic.Label>Last 7 Days</Statistic.Label>
            <Statistic.Value>3.5X</Statistic.Value>
          </Statistic>
        </Grid.Column>
      </Segment>
    </div>
  )
}

Overview.propTypes = {

}

Overview.displayName = 'Overview'

export default Overview
