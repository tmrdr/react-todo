import React, { Component } from 'react';


import ListItem from './ListItem';

class List extends Component {
    render(){
      const items = this.props.items.map(item => {
        return <ListItem item={item}></ListItem>
      });

      return(
          <div>
            <h1>Toby</h1>
            <ul>{items}</ul>
          </div>
      );
    }
}

export default List;
