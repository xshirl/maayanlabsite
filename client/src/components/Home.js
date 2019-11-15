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
import pub from '../img/pub.png'
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


    renderRNAseq() {
        const rnaSeq = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'RNA-seq') {
              rnaSeq.push(resource);
            }
          })
      
          return (
            rnaSeq.map(res => {
                
            if(res.title=="BioJupies") {
                return (<Container>
                    <Row>
                     
                        <div className="webApp" key={res.id}>
                          <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="150px"/> </Link>
                          <h4 className="title">{res.title}</h4> 
                          <div className="icons">
                          <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                          </div> 
                        </div>
                      
                    </Row>
                  </Container>)
            } else {
                return (<Container>
                    <Row>
                     
                        <div className="webApp" key={res.id}>
                          <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                          <h4 className="title">{res.title}</h4> 
                          <div className="icons">
                          <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                          </div> 
                        </div>
                      
                    </Row>
                  </Container>)
            }
        
             
            }))          
        } else {
          <p>Loading...</p>
        }
      }


      renderProteomics() {
        const proteomics = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'proteomics') {
              proteomics.push(resource);
            }
          })
      
          return (
            proteomics.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="title">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderVis() {
        const vis = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'visualization') {
              vis.push(resource);
            }
          })
      
          return (
            vis.map(res => {
                if(res.title=="Clustergrammer"){
                    return (
                        <Container>
                          <Row>
                           
                              <div className="webApp" key={res.id}>
                                <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="150px"/> </Link>
                                <h4 className="title">{res.title}</h4> 
                                <div className="icons">
                                <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                                </div> 
                              </div>
                            
                          </Row>
                        </Container>)
                } 
                else {
                    return (
                        <Container>
                          <Row>
                           
                              <div className="webApp" key={res.id}>
                                <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                                <h4 className="title">{res.title}</h4> 
                                <div className="icons">
                                <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                                </div> 
                              </div>
                            
                          </Row>
                        </Container>)
                }
              console.log(res);
              
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderDatabases() {
        const databases = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'databases') {
              databases.push(resource);
            }
          })
      
          return (
            databases.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderDatabases() {
        const databases = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'databases') {
              databases.push(resource);
            }
          })
      
          return (
            databases.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderCommandLine() {
        const command = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'command line') {
              command.push(resource);
            }
          })
      
          return (
            command.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderLincs() {
        const lincs = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'lincs') {
              lincs.push(resource);
            }
          })
      
          return (
            lincs.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderIdg() {
        const idg = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'idg') {
              idg.push(resource);
            }
          })
      
          return (
            idg.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
        } else {
          <p>Loading...</p>
        }
      }

      renderInter() {
        const inter = [];
        if (this.state.dataLoaded) {
          this.state.resources.map(resource => {
            if (resource.category == 'interoperability') {
              inter.push(resource);
            }
          })
      
          return (
            inter.map(res => {
              console.log(res);
              return (
              <Container>
                <Row>
                 
                    <div className="webApp" key={res.id}>
                      <Link to={`/apps/${res.parameter}`}><img className="logo" src={res.logo} width="100px"/> </Link>
                      <h4 className="datatitle">{res.title}</h4> 
                      <div className="icons">
                      <img src={pub} width="30px" /><img src={altmetric} width="30px" /><img src={github} width="30px" /><img src={youtube} width="30px"  />
                      </div> 
                    </div>
                  
                </Row>
              </Container>)
            }))          
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
              <div className="RNA-seq">
                  <div className="heading">
          <h1> RNA-seq </h1>
          <span className="seeMore">See More</span>
          </div>
        <div className="webApps">
         {this.renderRNAseq()}
         </div>
         </div>

         <div className="proteomics">
             <div className="heading">
                 <h1>Proteomics</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderProteomics()}
             </div>
         </div>

         <div className="visualization">
             <div className="heading">
                 <h1>Visualization</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderVis()}
             </div>
         </div>

         <div className="databases">
             <div className="heading">
                 <h1>Databases</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderDatabases()}
             </div>
         </div>
         <div className="command">
             <div className="heading">
                 <h1>Command Line</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderCommandLine()}
             </div>
         </div>

         <div className="command">
             <div className="heading">
                 <h1>LINCS</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderLincs()}
             </div>
         </div>
         
         <div className="idg">
             <div className="heading">
                 <h1>IDG</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderIdg()}
             </div>
         </div>

         <div className="inter">
             <div className="heading">
                 <h1>Interoperability</h1>
                 <span className="seeMore">See More</span>
            </div>
            <div className="webApps">
                {this.renderInter()}
             </div>
         </div>
         </Container>
      </div>

      
    )
  }
};

export default Home;