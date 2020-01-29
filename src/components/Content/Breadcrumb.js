import React, { Component } from 'react'

export default class Breadcrumb extends Component {
    render() {
        return (
          
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active">Dashboard v3</li>
                    </ol>
                
            </div>
        )
    }
}
