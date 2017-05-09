require('semantic-ui-css/semantic.min.css');

import React from 'react';
import {StyleRoot} from 'radium';

import Header from '../containers/header'
import Content from './content';

const App = (props) => {
  return (
    <StyleRoot>
      <Header path={props.path}/>
      <Content>
        {props.children}
      </Content>
    </StyleRoot>
  );
};

App.propTypes = {};

export default App;
