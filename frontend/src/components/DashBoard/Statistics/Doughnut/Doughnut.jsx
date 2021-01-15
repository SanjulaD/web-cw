import React, { useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../../components/Message/Message'
import Loader from './../../../../components/Loader/Loader'
import { listSupplierProducts } from './../../../../actions/supplierProduct'

const data = {
    labels: ['paddy', 'seeds', 'fruits'],
    datasets: [{
        data: [2, 1, 3],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const DoughnutComponent = () => {

    const dispatch = useDispatch()
    let history = useHistory()

    const supplierProductList = useSelector(state => state.supplierProductList)
    const { loading: loadingProducts, error: errorProducts } = supplierProductList

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
        <>
            <h4 style={{ marginTop: "40px", textAlign: "center" }}>Suppliers</h4>
            {loadingProducts ? <Loader />
                : errorProducts ? <Message variant='danger'>{errorProducts}</Message>
                    : (
                        <Doughnut data={data} />
                    )
            }
        </>
    )
}

export default DoughnutComponent
