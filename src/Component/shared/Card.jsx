


function Card({children, ibool}) {
  
    return (
        <div  className={`card-parent ${!ibool && `card-reverse`}`}>
            {children}
        </div>
    )
}

export default Card
