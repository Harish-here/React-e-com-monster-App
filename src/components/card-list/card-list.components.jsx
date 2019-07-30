import React from 'react'
import './card-list.style.css'
import Card from '../card/card.component'
const CardList = (props) => {
    
    return (
        <div className='card-list'>
            {
                props.monsters.map(x => <Card key={x.id} user={x} />)
            }
        </div>
    )
}

export default CardList;