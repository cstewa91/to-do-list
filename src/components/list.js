import React, {Component} from 'react';
import listData from '../dummy_data/list';

class List extends Component{
   constructor(props){
      super(props);
      this.state = {
         list: []
      }
   }
   getListData(){
      this.setState({
         list: listData
      })
   }
   render(){
      console.log(listData)
      return(
         <ul>
            <li>This will be the list</li>
         </ul>
      );
   }
}

export default List;