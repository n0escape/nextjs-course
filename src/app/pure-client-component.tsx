"use client";

import {FC, useState} from "react";

const PureClientComp: FC = () => {
    const [count, setCount] = useState(0);
    console.log('PureClientComp is rendered');
    return (
        <p>
            <b>pure component</b>
        </p>      
    )
}

export default PureClientComp;