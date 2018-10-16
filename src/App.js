import React, { Component } from 'react';
import './App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Victim from './Components/Victim/Victim.js';
import Helper from './Components/Helper/Helper.js';
const {Provider, Consumer} = React.createContext("none");
class App extends Component {
  constructor(){
    super();
    this.state = {
      mode: "none"
    }
  }
  render() {
    return (
      <div className="App" style={{backgroundColor: "#fefefe"}}>
        <Provider mode={this.state.mode}>
        <Dialog open={this.state.mode=="none"}>
          <DialogTitle id="simple-dialog-title">We are helping in the management of a Rescue operation near your location.</DialogTitle>
          <div className="optionsDiv">
            <List>
              <ListItem onClick={() => {console.log('seeting');this.setState({mode: "Victim"})}}>
                  <ListItemText primary={"I need help."}/>
              </ListItem>
            
              <ListItem>
                <ListItemText primary="I wish to help." onClick={() => {this.setState({mode: "Helper"})}}/>
              </ListItem>
            </List>
          </div>
        </Dialog>
        {this.state.mode=="Victim"?<Victim/>:this.state.mode=="Helper"?<Helper/>:null}
        {/* <Consumer>
          {mode => {
            console.log(mode)
            return mode=="Victim"?<Victim/>:mode=="Helper"?<Helper/>:null
          }}
        </Consumer> */}
        </Provider>
      </div>
    );
  }
}

export default App;
