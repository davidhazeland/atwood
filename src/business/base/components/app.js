import React from 'react';

import Header from './header';
import Content from './content';

const App = (props) => {
  return (
    <div className="App">
      <Header/>
      <Content>
        {props.children}
      </Content>
    </div>
  );
};

App.propTypes = {};

export default App;
