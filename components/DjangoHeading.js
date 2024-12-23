import {Component} from 'react'

class DjangoHeading extends Component{
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
            {this.props.subtitle}
      </div>
    );
  }
}

export default DjangoHeading;
