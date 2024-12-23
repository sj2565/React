import React, {Component} from 'react'

class Heading extends Component{
  render(){
    return(
      <header>
        <h2>{this.props.greeting}</h2>
        {this.props.hello}
      </header>
    );
  }
}

export default Heading ;
