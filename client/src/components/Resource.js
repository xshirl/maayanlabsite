import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Resource extends Component {
    constructor(props) {
        super();
        this.state = {
            resource: null,
            dataLoaded: false,
            unMount: false
        }
    }

    componentDidMount() {
        this.state.unMount = true;
        axios({
            method: 'GET',
            url: `/api/resources/${this.props.match.params.id}`
        })
        .then(data => {
            if (this.state.unMount) {
                this.setState({
                    resource: data.data.data,
                    dataLoaded: true
                })
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount() {
        this.state.unMount = false;
    }

    renderResource(){
        const resource = this.state.resource;
        if (this.state.dataLoaded) {
            return (
                <div key={resource.id}>
                        <img src={resource.logo} />
                        <h3>{resource.title}</h3>
                        <a href={resource.website}>Website</a>
                        <br/>
                        <a href={resource.doc}>Documentation</a>
                        <a href={resource.pub}>Publication</a>
                        <p>{resource.keywords}</p>
                        <p>{resource.citations}</p>
                        <p>{resource.pmid}</p>
                        <p>{resource.altmetric}</p>
                        <a href={resource.github}>Github</a>
                        <a href={resource.youtube}>Youtube</a>
                </div>
            )
        } else {
            return(
                <p> Loading...</p>
            )
        }
    }

    render() {
        return (
            <div className="Resource">
                {this.renderResource()}
                <Link to="/">Back to Home</Link>
            </div>
        )
    }

}

export default Resource;