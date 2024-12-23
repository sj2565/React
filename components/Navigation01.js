import React, {Component} from 'react'
class Navigation extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">{this.props.subject01}</a></li>
          <li><a href="2.html">{this.props.subject02}</a></li>
          <li><a href="3.html">{this.props.subject03}</a></li>
        </ul>
      </nav>
    );
  }
}
export default Navigation ;
