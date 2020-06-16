import React from 'react';
const UserCard = props => {
    return(
        <div className='userCard'>
            <h1>{props.name}</h1>
            <h1> ID: {props.userId}</h1>
            <h2>{props.email}</h2>
            <h3>Password Length: {props.pass}</h3>
        </div>
    );
}
export default UserCard;