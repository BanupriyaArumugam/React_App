// import './Main.css'
// import { useReducer } from 'react'
import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from './Alert.js'
// const initialState = { firstName:"",lastName:"",email:"",noOfSeats:0,bookedOn:""}

function Main() {
  const [alert,setAlert]=useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setAlert(true)
  };
  

  // function reducer(state, action) {
  //   switch (action.type) {
  //     case 'increment':
  //       return { count: state.count + 1 }
  //     case 'decrement':
  //       return { count: state.count - 1 }
  //     case 'reset':
  //       return {count: state.count = 0}
  //     default:
  //      return { count: state.count  }
  //   }
  // }
  // const [state, dispatch] = useReducer(reducer, initialState)
  return (
  <div className="container-fluid body">
    {alert==true?<Alert></Alert>:null}
    <div className="row">
      <div className="col-md-4 offset-md-4"><form onSubmit={handleSubmit(onSubmit)}>

        <h2 style={{ padding: "5%", fontFamily: "serif", fontWeight: "bold" }}>Book a ticket</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="text" className="form-control" id="email" name="email"   {...register("email", {
            required: true,
            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
          })} aria-describedby="emailHelp" />
          {errors.email && (
            <p className="errorMsg">PLease give valid email</p>
          )}

        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">FirstName</label>
          <input type="text" className="form-control" id="firstName"  {...register("firstName", { required: true })} name="firstName" />
          {errors.firstName && (
            <p className="errorMsg">Firstanme is required</p>
          )}</div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">lastName</label>
          <input type="text" className="form-control" id="lastName" name="lastName" {...register("lastName", { required: true })} />
          {errors.lastName && (
            <p className="errorMsg">Lastname is required</p>
          )}</div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">No of seats</label>
          <input type="number" className="form-control" id="noOfSeats" name="noOfSeats" {...register("noOfSeats", { required: true })} />
          {errors.noOfSeats && (
            <p className="errorMsg">No of seat should be greater than 0.</p>
          )}</div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Book on</label>
          <input type="date" className="form-control" id="bookedOn" {...register("bookedOn", { required: true })} />
          {errors.bookedOn && (
            <p className="errorMsg">Please choose date.</p>
          )}
        </div>
        <div style={{ textAlign: "center", padding: "10%" }}>
          <button type="submit" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Submit</button>
        </div>
      </form></div>
    </div>
  </div>
  )
}
export default Main