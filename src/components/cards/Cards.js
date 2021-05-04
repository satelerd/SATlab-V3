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
    console.log(data)
    return (
        <div className="grid">
            <Card rocket={data[0].rocket} launch_provider={data[0].launch_provider} misionName={data[0].misionName} time={data[0].time} imagen={data[0].imagen} />
            <Card rocket={data[1].rocket} launch_provider={data[1].launch_provider} misionName={data[1].misionName} time={data[1].time} imagen={data[1].imagen} />
            <Card rocket={data[2].rocket} launch_provider={data[2].launch_provider} misionName={data[2].misionName} time={data[2].time} imagen={data[2].imagen} />
            <Card rocket={data[3].rocket} launch_provider={data[3].launch_provider} misionName={data[3].misionName} time={data[3].time} imagen={data[3].imagen} />
            <Card rocket={data[4].rocket} launch_provider={data[4].launch_provider} misionName={data[4].misionName} time={data[4].time} imagen={data[4].imagen} />
            <Card rocket={data[5].rocket} launch_provider={data[5].launch_provider} misionName={data[5].misionName} time={data[5].time} imagen={data[5].imagen} />
            <Card rocket={data[6].rocket} launch_provider={data[6].launch_provider} misionName={data[6].misionName} time={data[6].time} imagen={data[6].imagen} />
            <Card rocket={data[7].rocket} launch_provider={data[7].launch_provider} misionName={data[7].misionName} time={data[7].time} imagen={data[7].imagen} />
            <Card rocket={data[8].rocket} launch_provider={data[8].launch_provider} misionName={data[8].misionName} time={data[8].time} imagen={data[8].imagen} />
            <Card rocket={data[9].rocket} launch_provider={data[9].launch_provider} misionName={data[9].misionName} time={data[9].time} imagen={data[9].imagen} />
        </div>
    );
};

export default Cards;