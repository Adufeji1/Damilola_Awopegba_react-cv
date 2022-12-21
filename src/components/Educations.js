import React, { Component } from 'react'
import {HashLink as Link} from 'react-router-hash-link';

export class Educations extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <h6><strong>EDUCATIONS</strong></h6>
          <table className='striped'>
            <thead>
              <tr>
                <th>certificate</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Web Development</td>
                <td>Jan 2018</td>
                <td><link t0="#" className='btn blue lighten-2'>View</link></td>
              </tr>

              <tr>
                <td>Web Design</td>
                <td>Jan 2019</td>
                <td><link t0="#" className='btn blue lighten-2'>View</link></td>
              </tr>

              <tr>
                <td>Graphic Design</td>
                <td>May 2020</td>
                <td><link t0="#" className='btn blue lighten-2'>View</link></td>
              </tr>

              <tr>
                <td>Other</td>
                <td>Jan 2018</td>
                <td><link t0="#" className='btn blue lighten-2'>View</link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Educations