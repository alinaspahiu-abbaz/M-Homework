import React, { Component } from 'react'
import {FormControl, Button} from 'react-bootstrap'


export default class SearchLinkedInProfile extends Component {

    state = {
        data: '',
        search: null,
        status: false
    }

    fetchData = async () => {
        await fetch("https://striveschool.herokuapp.com/api/profile/", {
            headers: new Headers ({
                'Authorization': 'Basic ' + "dXNlcjE2OmM5V0VVeE1TMjk0aE42ZkY=",
                "Content-Type": "application/json",
            }),
        })

        .then(response => response.json())
        .then(responseObject => this.setState({ data:responseObject,}))

    }

    componentDidMount() { this.fetchData() }

    render() {
        return (
            <div>
                <FormControl 
                 onChange={this.updateState}
                 type="text" 
                 placeholder="Search" 
                 className="mr-sm-2" />

                <Button
                onClick={this.fetchData} 
                variant="outline-success">Search</Button>
                
            </div>
        )
    }
}
