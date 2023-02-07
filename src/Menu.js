import React from 'react'

function Menu(props) {
    return (
        <div>
            <h1 className='menu-message'>{props.name}</h1>
            <h2 className='menu-discreption'>{props.discreption}</h2>
            <h2 className='menu-price'>${props.price}</h2>

        </div>
    )
}

export default Menu