import React, { Component } from 'react'

import { useSelector } from 'react-redux';

export class Counter extends Component {
  render() {

    const counter = useSelector( state=>state.counter.value)


    return (
        <div className='card'>
            <div className="card-header bg-secondary">
                <h4 className='text-white'>My Counter App</h4>
            </div>
            <div className="card-body">
                <h1>{counter}</h1>
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
