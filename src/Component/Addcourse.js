import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Addcourse = () => {
    var [ctitle,setTitle]=useState("")
    var [duration,setDue]=useState("")
    var [des,setDes]=useState("")
    var [venue,setVenue]=useState("")
    var [date,setDate]=useState("")
    const changeData=()=>{
        const data={"courseTitle":ctitle,"courseDuration":duration,"courseDescription":des,"courseVenue":venue,"dacourseDatete":date}
        console.log(data)
        axios.post("https://mylinkurcodesapp.herokuapp.com/addcourse",data).then(
            (response)=>{
                console.log(response.data)
                if(response.data.status=="success"){
                    alert("Successfully Added")
                }
                else{
                    alert("Something went Wrong!")
                }
            }
        )
    }
  return (
    <div>
        <Nav/>
            <div class="container">
    <div class="row">
        <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div class="row g-3">
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" class="form-label">Corse Title</label>
                    <input onChange={(e)=>{setTitle(e.target.value)}} type="text" class="form-control"/>
                </div>
                <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                  <label for="" class="form-label">Duration</label>
                  <input onChange={(e)=>{setDue(e.target.value)}} type="text" class="form-control"/>
              </div>
              <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label for="" class="form-label">Description</label>
                <input onChange={(e)=>{setDes(e.target.value)}} type="text" class="form-control"/>
              </div>
              <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label for="" class="form-label">Venue</label>
                <input onChange={(e)=>{setVenue(e.target.value)}} type="text" class="form-control"/>
            </div>
            <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <label for="" class="form-label">Date</label>
              <input onChange={(e)=>{setDate(e.target.value)}} type="date" class="form-control"/>
          </div>
                
                <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button class="btn btn-primary" onClick={changeData}>REGISTER</button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Addcourse