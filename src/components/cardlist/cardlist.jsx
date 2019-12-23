import React from 'react';
import './cardlist.css';
import { Card } from '../card/Card';

export const Cardlist = (props) => {
    // this console will return props monsters={this.state.monsters} are sent by app.js
    // console.log(props);

    // monster={monster} is a props, yang akan dikirim ke component card, so anything in a attribut or proprties are going to send to other component
    return (
        <div className="card-list">
            {props.monsters.map(monster =>
                <Card key={monster.id} monster={monster} />
            )}
        </div>
    );
}