import React, { Component } from 'react'

export class Counter extends Component {
  render() {
    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>00</h1>
                <div className="my-4">
                    <button className='btn btn-success'>Increase</button>
                    <button className='btn btn-danger mx-2 '>Decrease</button>
                </div>
            </div>
        </div>
    )
  }
}

export default Counter
