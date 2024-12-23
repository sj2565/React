import React, {Component} from 'react'

class Heading extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        {this.props.sub}
        </div>
    );
  }
}

export default Heading;
