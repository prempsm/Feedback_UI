


function Card({children, ibool}) {
    console.log('card',ibool);
    return (
        <div  className={`card-parent ${!ibool && `card-reverse`}`}>
            {children}
        </div>
    )
}

export default Card
