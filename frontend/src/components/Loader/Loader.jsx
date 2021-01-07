import React, { useState } from 'react'
import { css } from "@emotion/react";
import PuffLoader from "react-spinners/PuffLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: green;
`;

const Loader = () => {

    let [loading] = useState(true);
    let [color] = useState("#24d32b");

    return (
        <div className="sweet-loading">
            <PuffLoader color={color} loading={loading} css={override} size={100} />
        </div>
    )
}

export default Loader
