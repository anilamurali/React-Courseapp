import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Viewcourse = () => {
    var [viewalist,setViewlist]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("https://mylinkurcodesapp.herokuapp.com/getcourses").then(
        (response)=>{
            console.log(response.data)
            setViewlist(response.data)
            setLoadstatus(false)

        }
    )
  return (
    <div>
        <Nav/>
        <div>

    
        <div class="container">
    <div class="row ">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <table class="table table-info table-striped" >
            <thead>
      <tr>
        
        <th scope="col">COURSE TITLE</th>
        <th scope="col">DURATION </th>
        <th scope="col">DESCRIPTION</th>
        <th scope="col">VENUE</th>
        <th scope="col">DATA</th>
       
      </tr>
    </thead>
    {loadstatus ? <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>:
    <tbody>
    {
        viewalist.map((value,key)=>{
            return <tr>
                            <th><p class="card-text">{value.courseTitle}</p></th>
                            <td><p class="card-text">{value.courseDescription}</p></td>
                            <td><p class="card-text">{value.courseDuration}</p></td>
                            <td><p class="card-text">{value.courseVenue}</p></td>
                            <td><p class="card-text">{value.courseDate}</p></td>

                            </tr>     
        
        })}
        </tbody>

    }
                              </table>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Viewcourse