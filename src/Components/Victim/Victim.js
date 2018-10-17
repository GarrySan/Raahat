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
    constructor(){
        super();
        this.state = {
            openModal: false
        }
    }
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
      handleChange = () => {

      }
    render(){
        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <Button variant="contained" color="secondary" style={styles.button} onClick={() => this.setState({openModal: true})}>
                    Send a distress signal
                </Button>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBHcLHd5vdmSjIWLpXl6ZEEu7NK-og9FzQ"}}
                defaultCenter={this.props.center}
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
                            label="Name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            style={{marginLeft: 20}}
                            />
                    </ListItem>
                    <ListItem>
                        <p style={{marginBottom: 0, marginTop: 24}}>No. of people with you:</p>
                        <TextField
                            id="standard-name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                            style={{marginLeft: 10}}
                            />
                    </ListItem>
                    <ListItem>
                        <InputLabel htmlFor="demo-controlled-open-select">Age</InputLabel>
                        <Select
                            open={this.state.open}
                            onClose={this.handleClose}
                            onOpen={this.handleOpen}
                            value={this.state.age}
                            onChange={this.handleChange}
                            inputProps={{
                            name: 'age',
                            id: 'demo-controlled-open-select',
                            }}
                        >
                            <MenuItem value="">
                            <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </ListItem>
                    </List>
                </Dialog>
            </div>
        )
    }
}

const styles = {
    button: {zIndex: 10, marginTop: 10}
}