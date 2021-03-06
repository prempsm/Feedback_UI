import PropTypes from 'prop-types'

function Button({children,type,version,isDisabled}) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >
            {children}
        </button>
    )
}
Button.defaultProps ={
    type: 'button',
    disabled:'true',
    version: 'primary'
}
Button.propType ={
 children: PropTypes.node.isRequired,
 version: PropTypes.string,
 type: PropTypes.string,
 isDisabled: PropTypes.bool
}
export default Button
