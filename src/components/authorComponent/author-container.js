import React from 'react';
import AuthorView from './author-view';

export default class AuthorContainer extends React.Component {
    
    constructor() {
        super(...arguments);
    }

    render() {
        return (
        <div>
            <AuthorView name="Author view example"/>
        </div>           
        );
    }
}