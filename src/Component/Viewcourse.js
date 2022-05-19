import React from 'react'
import Nav from './Nav'

const Viewcourse = () => {
    var viewall=[{"_id":"6285a2a31887dc001619415c","courseTitle":"Python Django Internship","courseDescription":"Internship programme","courseDuration":"3 months","courseVenue":"ONLINE","courseDate":"02/01/2023"},{"_id":"6285a2c21887dc001619415d","courseTitle":"MERN Stack","courseDescription":"Internship programme","courseDuration":"6 months","courseVenue":"ONLINE","courseDate":"02/06/2022"}]
  return (
    <div>
        <Nav/>
        <div>

    
        <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            
            <table class="table table-success table-striped" >
            <thead>
      <tr>
        
        <th scope="col">COURSE TITLE</th>
        <th scope="col">DURATION </th>
        <th scope="col">DESCRIPTION</th>
        <th scope="col">VENUE</th>
        <th scope="col">DATA</th>
       
      </tr>
    </thead>
    <tbody>
                {
                    viewall.map((value,key)=>{
                        return <tr>
                                        <th><p class="card-text">{value.courseTitle}</p></th>
                                        <td><p class="card-text">{value.courseDescription}</p></td>
                                        <td><p class="card-text">{value.courseDuration}</p></td>
                                        <td><p class="card-text">{value.courseVenue}</p></td>
                                        <td><p class="card-text">{value.courseDate}</p></td>

                                        </tr>     
                    
                    })}
                    </tbody>
                                </table>
            </div>
        </div>
    </div>

    </div>
    </div>
  )
}

export default Viewcourse