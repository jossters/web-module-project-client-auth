import React from "react"
import { axiosWithAuth } from "../utils/axiosWithAuth";
import FriendForm from "./FriendForm"

class FriendsList extends React.Component {
    state = {
        friends:[],
    }
    componentDidMount() {
        this.getFriends();
        
    }
    getFriends = () => {
        axiosWithAuth()
        .get("/api/friends")
        .then((res) => {
            this.setState({
                friends: res.data
            })
        })
        .catch((err) => console.log(err))
    };

    

    
    render(){
      const friends = this.state.friends
     return (
         <div>
             <div>
            {friends.map((friend)=> (
            <div key={friend.id}>
            <p>Name: {friend.name}, Age: {friend.age}, Email: {friend.email}</p>
            </div>
            ))}
             </div>
             <FriendForm/>
         </div>
     )  
    }
    
}
export default FriendsList;
