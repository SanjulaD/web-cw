import React from 'react'
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
    return (
        <Helmet>
           <title>{title}</title> 
           <meta name='description' content={description} />
           <meta name='keyword' content={keywords} />
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Agroic',
    description: 'Agriclutural website by The Department of Agriculture (DoA) of Sri Lanka along with the Keels ',
    keywords: 'farmers, argio, department of agriculture, agricultural science'
}

export default Meta
