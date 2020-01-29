import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0 text-dark">Dashboard v3</h1>
                            </div>
                      
                            {this.props.children}
                          
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </div>
            </div>
        )
    }
}
