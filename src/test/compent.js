import React, {Component} from 'react' 

class Wissem extends Component {
    
    state = { 
         
        person : {
        Fullname : "wissemabid",
        Img : <img src="logo512.png" /> ,
        profession : "adzd" ,
        
    },
    
    bolen : false
    } 
    

  
    clickmea =  () => {
        this.setState({
            bolen : !this.state.bolen
            
        })
        
       // console.log(this.state.bolen)
        
       // this.state.bolen === true ? this.wissem =this.state.profession : this.wissem=<div className="imaa"> {this.state.Fullname} 
      //  {this.state.Img} 
       // {this.state.profession} 
       // </div>
    }
    render() { 
        return( 
           /* <> 
            <button onClick={this.clickmea}> click me </button>
            if ({this.state.bolen===true}) {
               <div> <h1>wissem</h1></div>
            }
            </> */
            
            <>
         
            {(this.state.bolen) ?
            <div className="profil">
            <button className="omg" onClick={this.clickmea}> click me </button>
            
                <h1>{this.state.person.Fullname}</h1>
                <h1> {this.state.person.profession}</h1>
                <h1> {this.state.person.Img}</h1>
            </div> :
            <button  className="omg" onClick={this.clickmea}> click me </button>
            }
            </>

            
        )
    }
}
export default Wissem