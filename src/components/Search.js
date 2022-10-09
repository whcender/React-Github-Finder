import React, { Component } from 'react'


export class Search extends Component {
    state = {
        keyword: '',
    }


    onChange = (e) => {
        this.setState({ keyword: e.target.value })
    }

    onSubmint = (e) => {
        e.preventDefault()
        if (this.state.keyword === '') {
            this.props.setAlert('Please enter something!', 'danger')
        }
        else{
        this.props.searchUsers(this.state.keyword)
        this.setState({ keyword: '' })
        }
    }

    render() {
        return (
            <div className="container my-5">

                <form onSubmit={this.onSubmint}>
                    <div className="input-group">
                        <input value={this.state.keyword} type="text" onChange={this.onChange} className='form-control' />
                        <div className="input-group-append">
                            <button type='submit' onClick={this.searchUsers} className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                {this.props.showButton && <button className="btn btn-danger btn-block mt-3" onClick={this.props.clearItem}>Clear</button>}
            </div>


        )
    }
}

export default Search