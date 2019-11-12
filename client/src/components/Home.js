import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel'
import biojupies from '../img/biojupies.png'
import geneshot from '../img/geneshot.png'
import pubmed from '../img/pubmed.png'
import youtube from '../img/youtube.png'
import github from '../img/github.png'
import altmetric from '../img/alt.png'

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
        
        const rnaSeq = [];

        if (this.state.dataLoaded) {
            
            this.state.resources.map(resource => {
                console.log(resource);
                if (resource.category == 'RNA-seq') {
                    rnaSeq.push(resource);
                }
                console.log(rnaSeq);
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
            rnaSeq.map(i => {
                console.log(i);
                // return (
               
    
      
          
                        
                //     <div className="webApp" key={i.id}>
                //           <Link to={`/apps/${i.parameter}`}><img src={i.logo} /> </Link>
                //           <h4>{i.title}</h4>
                //           <img src={pubmed} width="40px" /><img src={altmetric} width="40px" /><img src={github} width="40px" /><img src={youtube} width="40px"  />
                //       </div> 
                  
                      
              
                       
                      
                //   )   
            })
            
        } else {
            <p> Loading...</p>
        } 

       

          
    
          
    }
         
    renderRNAseq() {
        const rnaSeq = [];
        if (this.state.dataLoaded) {
            return this.state.resources.map(resource => {
                if (resource.category == 'RNA-seq') {
                    rnaSeq.push(resource);
                }
                return (
                    rnaSeq.map(res => {
                    <Container>
                        <Row>
                            <Col sm={4}>
                    <div className="webApp" key={res.id}>
                        <Link to={`/apps/${res.parameter}`}><img src={res.logo} /> </Link>
                        <h4>{res.title}</h4>
                        
                    </div>
                    </Col>
                    </Row>
                    </Container>})
                    

                    
                )
            })
        } else {
            <p>Loading...</p>
        }
    }

  render() {
    return (
      <div className="Home">
         
                        <Container>
                        <Navbar className="nav" fixed="top" bg="dark" variant="dark" expand="lg">
                            <Navbar.Brand href="/" className="uppercase">
                                <img src="https://avatars3.githubusercontent.com/u/5282243?s=200&v=4" width="50px" /> Ma'ayan Lab Apps</Navbar.Brand>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                            </Navbar>
        

                            </Container>
                            <div className="menu">
                                <a className="menu-item" href="/apps">Apps</a>
                                <a className="menu-item" href="/tutorials">Tutorials</a>
                                <a className="menu-item" href="/publications">Publications</a>
                                <a className="menu-item" href="/casestudies">Case Studies</a>
                            </div> 

                            <Carousel className="slideshow">
                                <Carousel.Item>
                                    <img className="d-block w-100" src={biojupies} alt="First slide" width="500px"/>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className="d-block w-100" src={geneshot} alt="Second slide" width="500px"/>
                                </Carousel.Item>
                            </Carousel>
           
          <Container className="apps">
              
         {this.renderRNAseq()}
         </Container>
      </div>
    )
  }
};

export default Home;