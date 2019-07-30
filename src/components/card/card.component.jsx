import React from 'react'
import './card.style.css'

const Card = (props) => {
    let u = props.user
    return (
        <div className='pa1 card-container '>
            <div><img src={`https://robohash.org/${u.id}?set=set2&size=180x180`} alt={u.name}/></div>
            <div className='fw6 pb2'>{u.name} </div>
            <div>{u.email} </div>
            <div>{u.address.zipcode}</div>
        </div>
    )
}


export default Card;