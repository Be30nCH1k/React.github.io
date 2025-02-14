import React from "react"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5"

class User extends React.Component{
    user = this.props.user

    render() {
      return (
            <div className="user" key={this.user.id}>
                <IoCloseCircleSharp className="deleteIcon"/>
                <IoHammerSharp className="addIcon" />
                <h3>{this.user.firstname} {this.user.lastname}</h3>
                <p>{this.user.bio}</p>
                <p>Возраст: {this.user.age}</p>
                <b>{this.user.isHappy ? 'Счастливчик :)' : 'Грустит :('}</b>
            </div>
      )
    }


  }

export default User
