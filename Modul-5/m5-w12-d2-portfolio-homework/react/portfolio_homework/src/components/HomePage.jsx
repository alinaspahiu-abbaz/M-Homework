import React, { Component } from 'react'
import {Container, Row} from "react-bootstrap"

export default class HomePage extends Component {
    state ={
        users:[]
    }
    render() {
        return (
           
                <Container>
                    <div>
                    { this.state.users.map(user => <Row>{user.name}</Row> )}
                    </div>
                   

                </Container>
            
        )
    }
    componentDidMount = async () => {

        const usersResp = await fetch("http://localhost:3030/users")
        const users = await usersResp.json()
        this.setState({
            users: users.data
        })
        console.log(users)
    }

}
