import React from "react"
import Header from "./compunents/Header"
import Users from "./compunents/Users"
import AddUser from "./compunents/addUser"

class Root extends React.Component  {
    constructor(props) {
      super(props)
      this.state = {
          users: [
              {
              id: 1,
              firstname: 'Bob',
              lastname: 'Korneblad',
              bio: "ijewfiewni newnin fwefngweg ignewng nwegnwe gowengn",
              age: 52,
              isHappy: true,
              },
              {
              id: 2,
              firstname: 'Victor',
              lastname: 'Ananasov',
              bio: "ogwri giwjq wirgring nwognnwog iowengiweg oiqewnge",
              age: 42,
              isHappy: false,
              }
          ]
      }
      this.addUser = this.addUser.bind(this)
  }
  render() {
    return (
      <div>
        <Header title="Список пользователь"></Header>
        <main>
          <Users users={this.state.users}/>
        </main>
        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>
      </div>)
  }

  addUser(user){
    const id = this.state.users.length + 1
    this.setState({ users: [...this.state.users, {id, ...user}] })
  }

}



export default Root