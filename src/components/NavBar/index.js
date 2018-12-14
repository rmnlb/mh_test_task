import React from 'react'
import './style.scss'

const NavBar = (props) => {

    const pages = Math.ceil(props.usersAmount / 5);
    let buttons = [
        <button
            key={'prev'}
            onClick={() => props.showPage(props.currentPage - 1)}
            disabled={props.currentPage <= 1}
        >{'<'}</button>
    ];

    for (let i = 1; i <= pages; i++) {
        buttons = [
            ...buttons,
            <button
                key={i}
                onClick={() => props.showPage(i)}
                disabled={props.currentPage === i}
            >{i}</button>
        ]
    }

    buttons = [
        ...buttons,
        <button
            key={'next'}
            onClick={() => props.showPage(props.currentPage + 1)}
            disabled={props.currentPage >= pages}
        >{'>'}</button>
    ];

    return (
        <div className='nav-container'>
            {buttons}
        </div>
    )
};

export default NavBar;