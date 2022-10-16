import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { GoMarkGithub } from "react-icons/go";
import Loading from "./Loading";
import { BiCurrentLocation } from "react-icons/bi";



class UserDetails extends React.Component {
    componentDidMount() {
        this.props.getUser(this.props.params.login)
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
                                        

                                    </div>
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