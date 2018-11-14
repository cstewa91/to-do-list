import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class List extends Component {
   render() {
      if (this.props.error) {
         return <h1 className="center red-text">{this.props}</h1>
      }
      const listElements = this.props.data.map((item, index) => {
         return (
            <li className="collection-item row" key={item._id}>
               <div className="col s8">
                  {item.title}
               </div>
               <div className="col s4 right-align">
                  <button className="btn red darken-2" onClick={() => { this.props.delete(item._id) }}>Delete</button>
               </div>
            </li>
         );
      });
      return (
         <div>
            <h1 className="center">To Do List</h1>
            <div className="row">
               <div className="col s12 right-align">
                  <Link to="/add-item" className="btn blue darken-2">Add Item</Link>
               </div>
            </div>
            <ul className="collection">
               {listElements}
            </ul>
         </div>
      );
   }
}

export default List;