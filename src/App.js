import axios from 'axios'
import { Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Users from './components/Users'
import { GoMarkGithub } from "react-icons/go";
import './style.css'
import Search from './components/Search'
import Alert from './components/Alert'
import About from './components/About'
import UserDetails from './components/UserDetails'



export class App extends Component {
  state = {
    loading: false,
    users: [],
    user: {},
    alert: null
  }

  searchUsers = (keyword) => {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/search/users?q=${keyword}`)
      .then(res => this.setState({
        users: res.data.items, loading: false
      })).then(res => {
        if (this.state.users.length === 0) {
          this.setAlert('No user found', 'danger')
        }
      })
  }

  getUser = (username) => {
    this.setState({ loading: true })
    axios.get(`https://api.github.com/users/${username}`)
      .then(res => this.setState({
        user: res.data, loading: false
      }))
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
        <Routes>
          <Route path="/" element={
            <>
              <Navbar icon={<GoMarkGithub />} />
              <Alert alert={this.state.alert} />
              <Search
                searchUsers={this.searchUsers}
                clearItem={this.clearItem}
                showButton={this.state.users.length > 0 ? true : false}
                setAlert={this.setAlert}
                users={this.state.users.length}
              />
              <Users users={this.state.users} loading={this.state.loading} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/user/:login" element={ 
            <UserDetails getUser={this.getUser} user={this.state.user} loading={this.state.loading} />
                  } />
        </Routes>
      </>
    )
  }
          
}

export default App