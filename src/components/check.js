import React, { useState, useEffect } from 'react';
import { getData } from "../api/axios";
const Check = props => {
    const [ people, setPeople ] = useState([])
    useEffect(() => {
        getData().then(res => {
            setPeople(res.data)
        })
    }, [])
    return (
        <div className="agreement">
            {
                people.map(value => (
                    <p key={value.id}>
                        姓名：{ value.name }，公司：{ value.companyname }，电话：{ value.phone }，城市：{ value.province }{ value.city }
                    </p>
                ))
            }
        </div>
    )
}

export default Check