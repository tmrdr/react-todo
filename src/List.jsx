import React, { Component } from 'react';


import ListItem from './ListItem';

class List extends Component {
    render(){
      const items = this.props.items.map(item => {
        return <ListItem item={item}></ListItem>
      });
  function handleClick(e) {
  e.preventDefault();
  console.log('The link was clicked.');
  items.push("hello");
}

      return(
          <div>
          <h1>To Do:</h1>
            <form>
              <input type="text"></input>
              <input type="submit" onClick={handleClick}></input>
            </form>
            <ul>{items}</ul>
          </div>
      );
    }
}

export default List;
