import {Component} from "react";
import DjangoHeading from './components/DjangoHeading'
import {Card} from 'react-bootstrap'
import DjangoWidget from './components/DjangoWidget'
import ViewList from './components/ViewList'
import ChartBar from './components/ChartBar'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      heading:{title:'장고와 리액트', subtitle:'둘이 연동'},
      mode:'readdata'
    }
  } // end constructor

  setRendering(){
    var _article = null ;
    if(this.state.mode === 'readdata'){
      _article = <ViewList></ViewList>
    }else if(this.state.mode === 'chart'){
      _article = <ChartBar></ChartBar>
    }
    return _article;
  } // end setRendering()

  render(){
    return(
      <Card>
        <Card.Header>
          <DjangoHeading title={this.state.heading.title}
                         subtitle={this.state.heading.subtitle}>
          </DjangoHeading>
        </Card.Header>
        <Card.Body>
          <DjangoWidget
            onChangePage={
              function(_mode){
                console.log('_mode : ' + _mode);
                this.setState({
                  mode:_mode
                });
              }.bind(this)
            }>
          </DjangoWidget>
        </Card.Body>
        {this.setRendering()}
      </Card>
    );
  }
}

export default App;
