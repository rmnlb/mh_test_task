import React from 'react'
import './style.scss'

const UserCard = (props) => (
    <div className='user-card'>
        <div>
            <img
                src={`http://dev.frevend.com/json/images/u_${props.user.id}.png`}
                alt={props.user.name + ' ' + props.user.surname}
                className='user-card__img'
            />
            <h3
                className='user-card__title'
            >
                {props.user.name + ' ' + props.user.surname}
            </h3>
        </div>
        <p className='user-card__desc'>
            {"    " + props.user.desc}
            </p>
    </div>
);

export default UserCard;