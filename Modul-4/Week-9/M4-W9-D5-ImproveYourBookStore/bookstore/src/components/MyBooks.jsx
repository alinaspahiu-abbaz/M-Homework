import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import history from '../jsons/history.json'
import fantasy from '../jsons/fantasy.json'
import horror from '../jsons/horror.json'
import romance from '../jsons/romance.json'
import scifi from '../jsons/scifi.json'

const books = [ ...romance, ...history, ...scifi, ...horror, ...fantasy]

class Latestrelease extends Component {
    state = {
        size: 4,
    }
    increaseSize = () =>{
        this.setState({
            size: this.state.size + 8,
        })
    }
    render(){
        return (
            <>
            <div className="row row-cols-1 row-cols-md-4">
                {books.filter((book) => book.category == this.props.category).slice(0,this.state.size).map((book) =>{
                    return (
                    <div className="col-6 col-md-4 col-lg-3 mb-3" key={book._id}>
                        <Card key={book._id}>
                        <Card.Img variant="top" src={book.img} />
                        <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                            {book.category}
                            </Card.Text>
                            <Button variant="success">Order it for just {book.price} $</Button>
                        </Card.Body>
                        </Card>
                        
                    </div>
                    )
                })}
            </div>
            <Button variant="dark" onClick={this.increaseSize}>Show more books</Button>
            </>
        )
    }
}
export default Latestrelease