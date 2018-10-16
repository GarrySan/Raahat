import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
export default class Victim extends Component{
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render(){
        return(
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBHcLHd5vdmSjIWLpXl6ZEEu7NK-og9FzQ"}}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
                >
                {/* <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text={'Kreyser Avrora'}
                /> */}
                </GoogleMapReact>
            </div>
        )
    }
}