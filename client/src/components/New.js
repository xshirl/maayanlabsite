import React, { Component } from 'react';

class New extends Component {
    constructor(props){
        super(props);
        this.state = {
            resource: Object.assign({
                title: '',
                logo: '', 
                website: '', 
                doc: '', 
                pub: '', 
                keywords: '', 
                citations: '', 
                pmid: '', 
                altmetric: '', 
                github: '', 
                youtube:'',
                parameter: ''
            }, props.initialValue)
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState((prevState,props) => ({
            resource: {
                ...prevState.resource,
                [name]: value
            }
        }))
    }
    handleSubmit(e) {
        this.props.onSubmit(this.state.resource);
        const param= this.state.title.toLowerCase();
        if(param.includes(" ")) {
            param = param.replace(/ /g, "_");
        }
        e.preventDefault();
        // fetch('/api/resources', {
        //     method: "POST",
        //     data: {
        //         title: this.state.title,
        //         logo: this.state.logo, 
        //         website: this.state.website, 
        //         doc: this.state.doc, 
        //         pub: this.state.pub, 
        //         keywords: this.state.keywords, 
        //         citations: this.state.citations, 
        //         pmid: this.state.pmid, 
        //         altmetric: this.state.altmetric, 
        //         github: this.state.github, 
        //         youtube:this.state.youtube,
        //         parameter: param
        //     }
        // })
        // .then(function(resp) {
        //     return resp.json()
        // }).then(function(body) {
        //     console.log(body)
        // })
    }

    render() {
        
        return(
            <form onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.resource.title} onChange={this.handleChange} placeholder="Application Name" />
            <input type="text" value={this.state.resource.logo} onChange={this.handleChange} placeholder="Logo Link" />
            <input type="text" value={this.state.resource.website} onChange={this.handleChange} placeholder="Website Link" />
            <input type="text" value={this.state.resource.doc} onChange={this.handleChange} placeholder="Documentation Link" />
            <input type="text" value={this.state.resource.pub} onChange={this.handleChange} placeholder="Publication Link" />
            <input type="text" value={this.state.resource.keywords} onChange={this.handleChange} placeholder="Keywords, separated by comma" />
            <input type="text" value={this.state.resource.citations} onChange={this.handleChange} placeholder="Number of citations" />
            <input type="text" value={this.state.resource.pmid} onChange={this.handleChange} placeholder="PMID (Pubmed ID)" />
            <input type="text" value={this.state.resource.altmetric} onChange={this.handleChange} placeholder="Altmetric Score" />
            <input type="text" value={this.state.resource.github} onChange={this.handleChange} placeholder="Github Link" />
            <input type="text" value={this.state.resource.youtube} onChange={this.handleChange} placeholder="Youtube Link" />
            <input type="submit" />
            </form>
        )
    }
}

export default New;