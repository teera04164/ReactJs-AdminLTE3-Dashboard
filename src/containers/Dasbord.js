import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Content from '../components/Content';
export default class Dasbord extends Component {
 
    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
                <Content />
            </div>
        )
    }
}
