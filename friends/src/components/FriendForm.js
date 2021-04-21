import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendForm extends React.Component {
state = {
        id:0,
        name:"",
        age:"",
        email:"",
    }

handleChange = (e) => {
    this.setState({
        
            ...this.state,
            [e.target.name]: e.target.value,
        
    })
}

addFriend = (e) => {
    e.preventDefault();
    const { name, age, email } = this.state;
    axiosWithAuth()
    .post("/api/friends",{name, age, email})
    .then((res) => {
        console.log(res.data);
       
    })
    .catch((err) => console.log(err))
}
render(){
  return (
      <div>
          <form onSubmit={this.addFriend}>
            <input
            placeholder="Name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            />
            <input
            placeholder="Age"
            type="text"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
            />
            <input
            placeholder="Email"
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <button>Add Friend</button>
        </form>
      </div>
  ) 
}

}
export default FriendForm;