import React from 'react';

export default function Experience({place, dateRange, jobTitle, workSpotlight}) {

    return(
        <>
        <p>{place}</p>
        <p>{dateRange}</p>
        <p>{jobTitle}</p>
        <ul>{workSpotlight.map((worksp)=>(
            <>
                <li>{worksp.title}</li>
                <ul>
                    {worksp.description.map((d)=>(<li>{d}</li>))}
                </ul>
            </>
            ))}
        </ul>
        </>
    )
}