import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
import logo from '../../assets/logo.svg';

export default class Main extends Component {
    state = {
        
    };

    handleSubmint = () => {

    }

    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmint}>
                    <img src={logo} alt="" />
                    <input placeholder="Criar um box" />
                    <button type='submit'>Criar box</button>
                </form>
            </div>
        );
    }
}
