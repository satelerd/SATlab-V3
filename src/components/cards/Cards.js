import React from 'react'
import Card from './card/Card.js'
import './Cards.css'

const info = [
    {
        id: 1,
        rocket: <h2><span className="spacex">SpaceX</span> Starship</h2>,
        misionName: <h4>15Km flight</h4>,
        time: <h5>2021-06-01T00:00:00Z</h5>
    },
    {
        id: 2,
        rocket: <h2><span className="spacex">SpaceX</span> Falcon 9</h2>,
        misionName: <h4>Transporter 2 (Dedicated SSO Rideshare)</h4>,
        time: <h5>2021-06-01T00:00:00Z</h5>
    },
    {
        id: 3,
        rocket: <h2><span className="spacex">SpaceX</span> Falcon 9</h2>,
        misionName: <h4>Transporter 2 (Dedicated SSO Rideshare)</h4>,
        time: <h5>2021-06-01T00:00:00Z</h5>
    },
    {
        id: 4,
        rocket: <h2><span className="spacex">SpaceX</span> Falcon 9</h2>,
        misionName: <h4>Transporter 2 (Dedicated SSO Rideshare)</h4>,
        time: <h5>2021-06-01T00:00:00Z</h5>
    },
    {
        id: 5,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 6,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 7,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },
    {
        id: 8,
        title: <h2>SpaceX Starship</h2>,
        body: <h5>500 CubeSat from SATlab</h5>
    },

]

function Cards({ data }) {
    return (
        <div className="grid">
            <Card rocket={data[0].rocket} launch_provider={data[0].launch_provider} misionName={data[0].misionName} time={data[0].time} />
            <Card rocket={data[1].rocket} launch_provider={data[1].launch_provider} misionName={data[1].misionName} time={data[1].time} />
            <Card rocket={data[2].rocket} launch_provider={data[2].launch_provider} misionName={data[2].misionName} time={data[2].time} />
            <Card rocket={data[3].rocket} launch_provider={data[3].launch_provider} misionName={data[3].misionName} time={data[3].time} />
            <Card title={info[4].title} body={info[4].body} />
            <Card title={info[5].title} body={info[5].body} />
            <Card title={info[6].title} body={info[6].body} />
            <Card title={info[7].title} body={info[7].body} />

        </div>
    );
};

export default Cards;
