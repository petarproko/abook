import React from 'react';

export default class AuthorView extends React.Component {
    
    constructor() {
        super(...arguments);
    }

    render() {
        return (
        <div>
            <p>{this.props.name}</p>
        </div>           
        );
    }
}