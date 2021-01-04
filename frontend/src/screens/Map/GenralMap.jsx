import React from 'react'
import WrappedMap from './Map'
import { Scrollbar } from "react-scrollbars-custom";

const GenralMap = () => {
    return (
        <Scrollbar style={{ width: '100%', height: 500 }}>
            <div style={{ width: '100%', height: '100vh' }}>
                <WrappedMap
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                    loadingElement={<div style={{ height: '100%' }} />}
                    containerElement={<div style={{ height: '400px' }} />}
                    mapElement={<div style={{ height: '100vh' }} />}
                />
            </div>
        </Scrollbar>
    )
}

export default GenralMap
