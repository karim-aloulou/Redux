import React, { Component } from 'react';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

import logo from './logo.svg';
import './App.css';
import Content from './components/Content';
import AddTodo from './components/AddTodo';

const styles = {
    navbar : {
      listStyle: 'none',
      padding: '-10px 0px',
    },
    navbarRight: {
      float: 'right',
      top: '-40px',

    },
    left_side : {
      width: '49%',
      float: 'left',
      backgroundColor: '#ccc',
      height: '50px',
    },
    right_side : {
      width: '49%',
      marginLeft: '3px',
      float: 'right',
      backgroundColor: '#ccc',
      height: '50px'
    },
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <ul style={styles.navbar} className="navigasi">
            <li><p>React Redux Todo List</p></li>
          </ul>
            <li style={styles.navbarRight}><ListItem
                disabled={true}
                leftAvatar={
                  <Avatar src={logo} style={{top: '-20px', animation: 'App-logo-spin infinite 1s linear', backgroundColor: '#000'}} />
                }></ListItem>
            </li>
        </div>
        <div className="content">
          <Content />

        </div>
      </div>
    );
  }

}

export default App;
