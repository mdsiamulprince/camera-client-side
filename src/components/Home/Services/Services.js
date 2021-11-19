import React, { useEffect, useState } from 'react';


import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://frozen-plateau-35169.herokuapp.com/appoint')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div className="container">
            <h1>Our Products</h1>
            <div className="row">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }


            </div>
        </div>
    );
};

export default Services;