import React, {Component} from 'react'

class Closing extends Component{
  render(){
    return(
      <article>
        <h2>{this.props.closing}</h2>
        {this.props.comment}
      </article>
    );
  }
}
export default Closing ;
