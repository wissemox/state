import './App.css'
import React, {Component} from 'react' 
import Wissem from './test/compent'
class App extends Component {
constructor() {
    super();
    this.state = { 
        count : 0 ,
        interval : null , 
        timer: 0 ,
    }
    
}
componentDidMount() {
    console.log("componentDidMount()")
    this.setState({ 
        interval : setInterval(() => {
            this.setState({timer: this.state.timer+1})
        }, 1000)
    })
}

        
       // console.log(this.state.bolen)
        
       // this.state.bolen === true ? this.wissem =this.state.profession : this.wissem=<div className="imaa"> {this.state.Fullname} 
      //  {this.state.Img} 
       // {this.state.profession} 
       // </div>
    
    render() { 
        return( 
            <>
            
        <Wissem/>
       
        {this.state.timer}
        </>
        )
    }
}
export default App