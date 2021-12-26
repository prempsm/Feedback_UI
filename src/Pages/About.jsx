import React from 'react'
import Card from '../Component/shared/Card'
import {Link} from 'react-router-dom'

function About({ibool}) {
    console.log(ibool)
    return (
        <Card ibool={ibool}> 
            <div className="card about-us">
                <h1>About This Project</h1>
                <p>This is a React app to leave feedback for a product or service</p>
                <p>Version: 1.0.0</p>
                <p>By: <b>Prem Shankar Mahto</b></p>
                <Link to="/">Back to Home</Link>     
            </div>
        </Card>
    )
}

export default About
