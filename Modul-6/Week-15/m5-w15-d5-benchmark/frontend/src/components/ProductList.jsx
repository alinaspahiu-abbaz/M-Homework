import React, {Component} from "react"
import {Container, Row} from "react-bootstrap"
import ProductListItem from "./ProductListItem"

class ProductList extends Component {
    render (){
        return(
            <Container className="my-5">
                <Row>
                    {this.props.products.map(x => <ProductListItem  key={x.p_id} item={x} />)}
                </Row>
            </Container>
        )
    }
}

export default ProductList