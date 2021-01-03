import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap,
    Marker
} from 'react-google-maps'
import Message from './../../components/Message/Message'
import Loader from './../../components/Loader/Loader'
import { listSupplierProducts } from './../../actions/supplierProduct'

const Map = () => {

    const dispatch = useDispatch()
    let history = useHistory()

    const supplierProductList = useSelector(state => state.supplierProductList)
    const { loading: loadingProducts, error: errorProducts, products } = supplierProductList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo.isAdmin && !userInfo) {
            history.push('/login')
        } else {
            dispatch(listSupplierProducts())
        }
    }, [dispatch, history, userInfo])

    return (
        <GoogleMap
            defaultCenter={{ lat: 6.927079, lng: 79.861244 }}
            defaultZoom={10}
        >
            {loadingProducts ? <Loader />
                : errorProducts
                    ? <Message variant='danger'>{errorProducts}</Message>
                    : (
                        products.map(i => (
                            <Marker
                                key={i._id}
                                position={{
                                    lat: i.latitude,
                                    lng: i.longitude
                                }}
                            />
                        ))
                    )

            }
        </GoogleMap>

    )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
