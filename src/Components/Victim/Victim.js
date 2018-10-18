import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Button from '@material-ui/core/Button';
import './Victim.css'

import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import DialogContent from '@material-ui/core/DialogContent';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

import TextField from '@material-ui/core/TextField';
import Slide from '@material-ui/core/Slide';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

export default class Victim extends Component{
    constructor(props){
        super();
        this.state = {
            openModal: false,
            pos: props.pos,
            address: "",
            food: 1,
            nop: 0,
            error: ""
        }
        console.log(props.pos)
    }
    componentDidMount(){
        const google = window.google;
        if(navigator.geolocation){
          console.log('in here')
          var pos = {};
          navigator.geolocation.getCurrentPosition((position) => {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            this.setState({pos: pos})
            var geocoder = new google.maps.Geocoder;
            geocoder.geocode({'location': this.state.pos}, (results, status) => {
                if (status === 'OK') {
                  if (results[0]) {
                    console.log(results[0].formatted_address)
                    this.setState({address: results[0].formatted_address})
                  }
                }
            })
            
          });
        }
        else{
          alert('You need to have location services enabled for this application.')
        }
    }
    static defaultProps = {
        zoom: 13
      };
      handleChange = (key, e) => {
        console.log(key)
        console.log(e.target.value)
        var obj={};
        obj[key]=e.target.value;

        this.setState(obj)
        
      }
      handleDropChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      }
      validate = () => {
        if(!this.state.name){
            return 'Please enter your name.'
        }
        else if(!this.state.phoneNo){
            return 'Please enter your phone number.'
        }
        else if(this.state.phoneNo.length!=10||!(/^\d+$/.test(this.state.phoneNo))){
            return 'Phone no. incorrect.'
        }
        else{
            return ""
        }
      }
      submitDistress = () => {
          this.setState({error: this.validate()});

      }
    render(){
        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <Button variant="contained" color="secondary" style={styles.button} onClick={() => this.setState({openModal: true})}>
                    Send a distress signal
                </Button>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBHcLHd5vdmSjIWLpXl6ZEEu7NK-og9FzQ"}}
                center={this.state.pos}
                defaultZoom={this.props.zoom}
                style={{marginTop: -5}}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                /> */}
                </GoogleMapReact>
                <Dialog
                    fullScreen
                    open={this.state.openModal}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                    >
                    <AppBar>
                        <Toolbar>
                            <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                                <CloseIcon onClick={() => this.setState({openModal: false})}/>
                            </IconButton>
                            <Typography variant="h6" color="inherit">
                                Give us more information
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <List style={{marginTop: 30}}>
                    <ListItem>
                        <p style={{marginBottom: 0, marginTop: 24}}>Name:</p>
                        <TextField
                            id="standard-name"
                            value={this.state.name}
                            onChange={(e) => this.handleChange('name', e)}
                            margin="normal"
                            style={{marginLeft: 20, marginTop: 100}}
                            />
                    </ListItem>
                    <ListItem>
                        <p style={{marginBottom: 0, marginTop: 24}}>Phone no:</p>
                        <TextField
                            id="standard-name"
                            value={this.state.phoneNo}
                            onChange={(e) => this.handleChange('phoneNo', e)}
                            margin="normal"
                            style={{marginLeft: 10}}
                            />
                    </ListItem>
                    <ListItem>
                        <p style={{marginBottom: 0, marginTop: 24}}>Your address:</p>
                        <TextField
                            id="standard-name"
                            value={this.state.address}
                            onChange={(e) => this.handleChange('address',e)}
                            margin="normal"
                            style={{marginLeft: 10}}
                            />
                    </ListItem>
                    <ListItem>
                        <p style={{marginBottom: 0, marginTop: 24}}>No. of people with you:</p>
                        <TextField
                            id="standard-name"
                            value={this.state.nop}
                            onChange={(e) => this.handleChange('nop', e)}
                            margin="normal"
                            style={{marginLeft: 10}}
                            />
                    </ListItem>
                    <ListItem>
                        <InputLabel htmlFor="demo-controlled-open-select">Do you have food and water?</InputLabel>
                        <Select
                            open={this.state.openDropDown}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.food}
                            onChange={(e) => this.handleDropChange(e)}
                            inputProps={{
                                name: 'food',
                              }}
                        >
                            <MenuItem value={1}>I have both food and water.</MenuItem>
                            <MenuItem value={2}>I have only food.</MenuItem>
                            <MenuItem value={3}>I have only water.</MenuItem>
                            <MenuItem value={4}>I have neither food nor water.</MenuItem>
                        </Select>
                    </ListItem>
                    </List>
                    <span style={styles.errorMessage}>{this.state.error}</span>
                    <Button variant="contained" color="secondary" style={styles.submitButton} onClick={() => this.submitDistress()}>
                        Submit
                    </Button>
                </Dialog>
            </div>
        )
    }
}

const styles = {
    button: {zIndex: 10, marginTop: 10},
    submitButton: {width: '70%', position: 'absolute', bottom: 20, marginLeft: '15%'},
    errorMessage: {color: 'red', position: 'absolute', bottom: 70, marginLeft: '20%'}

}