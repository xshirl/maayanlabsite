import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import { Link } from 'react-router-dom';
import New from './components/New';

class Home extends Component {
    constructor() {
        super();
        
        this.state = {
            resources: [],
            dataLoaded: false,
            isMounted:false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
   
    componentDidMount() {
        this.state.isMounted = true;
        axios({
            method: 'GET',
            url: '/api/resources'
        })
        .then(data => {
            if(this.state.isMounted) {
            this.setState({
                resources: data.data.data,
                dataLoaded: true
            })
        }
        })
        .catch(err => {
            console.log(err);
        })
    }

    componentWillUnmount() {
        this.state.isMounted = false;
      }
    
    createResource(resource) {
        fetch('/api/resources', {
            method: 'POST',
            body: JSON.stringify(resource),
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(resp => {
            if (!resp.ok) throw new Error(resp.statusMessage);
            return resp.json();
        })
        .then(resBody => {
            console.log('Adding resource');
            console.log(resBody);
            this.setState((prevState, props) => {
              return {
                resources: prevState.resources.concat(resBody.data)
              }
            })
        })
    }

    handleSubmit(resource) {
        this.createResource(resource);
    }

    renderResources() {
        if (this.state.dataLoaded) {
            return this.state.resources.map(resource => {
                return (
                    <Container>
                        <Row>
                            <Col sm={4}>
                    <div className="webApp" key={resource.id}>
                        <Link to={`/apps/${resource.parameter}`}><img src={resource.logo} /> </Link>
                        <h4>{resource.title}</h4>
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
                    </Col>
                    </Row>
                    </Container>

                    
                )
            })
        } else {
            <p>Loading...</p>
        }
    }
  render() {
    return (
      <div className="Home">
          {this.renderResources()}
          
      </div>
    )
  }
};

export default Home;