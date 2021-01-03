import React from 'react'
import WrappedMap from './Map'

const OverLay = () => {
    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '400px' }} />}
                mapElement={<div style={{ height: '100vh' }} />}
            />
        </div>
    )
}

export default OverLay
