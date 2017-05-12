import React from 'react'

import Overview from './overview'
import LatestActions from './latest-actions'

const Dashboard = (props) => {
  const {
    List: {
      data
    }
  } = props

  return (
    <div className="Dashboard" style={{marginTop: 20}}>
      <Overview/>
      <LatestActions data={data}/>
    </div>
  )
}

Dashboard.propTypes = {

}

Dashboard.displayName = 'Dashboard'

export default Dashboard
