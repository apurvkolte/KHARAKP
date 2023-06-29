import React from 'react'
import { CSVLink } from 'react-csv';


const downlaod = () => {

    // const csvData = JSON.parse(JSON.stringify(coupons ? coupons : []));

    const csvData = [
        ["firstname", "lastname", "email"],
        ["Ahmed", "Tomi", "ah@smthing.co.com"],
        ["Raed", "Labes", "rl@smthing.co.com"],
        ["Yezzi", "Min l3b", "ymin@cocococo.com"]
    ];

    return (
        <div>
            <h5 style={{ display: 'inline' }} className="marginleft mt-5 px-md-2"> <CSVLink className='menuorder' data={csvData}
                filename={"coupons.csv"} target="_blank" >Download</CSVLink></h5>
            <br />
        </div>

    )
}

export default downlaod