import axios from 'axios'
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Users from './components/Users'
import { GoMarkGithub } from "react-icons/go";
import './style.css'
import Search from './components/Search'
import Alert from './components/Alert'



export class App extends Component {
  state = {
    loading: false,
    users: [],
    alert: null
  }

 searchUsers = (keyword) => {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => this.setState({ users: res.data.items, loading: false 
      })).then (res => {
        if (this.state.users.length === 0) {
          this.setAlert('No user found', 'danger')
        }
      })
    }

  clearItem = () => {
    this.setState({ users: [], loading: false })
  }

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 1500)
  }
  render() {
    return (
      <>
        <Navbar icon={<GoMarkGithub />} />
        <Alert alert={this.state.alert}/>
        <Search 
        searchUsers={this.searchUsers} 
        clearItem={this.clearItem}
        showButton={this.state.users.length > 0 ? true : false}
        setAlert={this.setAlert}
        users={this.state.users.length}
        />
        <Users users={this.state.users} loading={this.state.loading} />
      </>
    )
  }
}

export default App