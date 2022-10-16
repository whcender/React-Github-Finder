import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { GoMarkGithub } from "react-icons/go";
import Loading from "./Loading";
import { BiCurrentLocation } from "react-icons/bi";
import Repos from "./Repos";



class UserDetails extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.params.login)
        this.props.getUserRepos(this.props.params.login)
    }
    render() {
        if (this.props.loading) {
            return (<Loading />)
        } else
            return (
                <div>
                    <Navbar icon={<GoMarkGithub />} />
                    <div className="container mt-3">
                        <div className="row">
                            <div className="col-md-3">
                                <div className="card">
                                    <img src={this.props.user.avatar_url} alt="" className="card-img-top" />
                                    <div className="card-body">
                                        <p style={{ textTransform: "uppercase", fontWeight: "bold", fontSize: "18px" }}>{this.props.user.name}</p>
                                        <p><i><BiCurrentLocation /></i>{(
                                            this.props.user.location === null) ? "Not Available" : this.props.user.location
                                        }</p>
                                        <p><a className="btn btn-block btn-primary btn-sm" href={this.props.user.html_url}>GitHub Page</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9">
                                <div className="card">
                                    <div className="card-body">
                                        {this.props.user.bio
                                            ? <p>{this.props.user.bio}</p>
                                            : <p>No Bio</p>
                                        }
                                        <h3>Blog</h3>
                                        {      
                                            this.props.user.blog
                                            ? <p><a href={this.props.user.blog.includes('https://', 'http://') ? this.props.user.blog : `https://${this.props.user.blog}`}>{this.props.user.blog}</a></p>
                                            : <p>No Blog</p>
                                        }
                                        <div>
                                            <span className="badge badge-primary m-1">Followers: {this.props.user.followers}</span>
                                            <span className="badge badge-danger m-1">Following: {this.props.user.following}</span>
                                            <span className="badge badge-success m-1">Repo: {this.props.user.public_repos}</span>
                                        </div>


                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <Repos repos={this.props.repos} />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            )
    }
}

export default (props) => (
    <UserDetails
        {...props}
        params={useParams()}
    />
);