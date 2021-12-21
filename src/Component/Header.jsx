import React from 'react'
import PropTypes from 'prop-types'


function Header({title, changeColor}) {
    

    return (
       
        <div className="header-container">
            <div className="header-text">
            <h2>{title}</h2>
            </div>
            <div className="header-button">
                <button onClick={changeColor}>Card Color</button>
            </div>
            
        </div>
    )
}
Header.defaultProps = {
    title: 'Feedback UI',
}
Header.propTypes =  {
    title: PropTypes.string.isRequired,
}

export default Header
