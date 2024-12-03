import React from "react"

class AddUser extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: null,
            isHappy: null

        }
    }
    render() {
      return (
        <form>
            <input placeholder="Имя"  onChange={(e) => this.setState({ firstname: e.target.value})}/>
            <input placeholder="Фамилия" onChange={(e) => this.setState({ lastname: e.target.value})}/>
            <textarea placeholder="Биография" onChange={(e) => this.setState({ bio: e.target.value})}/>
            <input placeholder="Возраст" type="number" onChange={(e) => this.setState({ age: e.target.value})}/>
            <label htmlFor="isHappy">Счастлив?</label>
            <input id="isHappy" type="checkbox" onChange={(e) => this.setState({ isHappy: e.target.checked})}/>
            <button type="button" onClick={() => this.props.onAdd({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy,

            })}>Добавить</button>
        </form>
      )
    }


  }

export default AddUser
