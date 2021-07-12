import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
class Product extends Component {
    state = {
        // "product-id" : this.props.product.id,
        // "productName": this.props.product.name,
        "cats" : ["meals", "chickens", "fish"],
    };
    // Any Js Functionality Must Excute Here To Be More Clean
    getProductState() {
        return this.state['product-id'] === 0 ? "alert alert-danger m-2" : "alert alert-primary m-2"
    }

    // to access to state obj and update it's data use setState({});

    increseProduct = (e) => {
        this.setState({ // setState() : it's accept a obj of props and values that will merge with the state when update
            "product-id": this.state['product-id'] += e,
        })
    }

    render() { // This Function Just For The UI Of The Components
        console.log(this.props)
        return (
            <div className="cart">
                <span>{this.props.product.name}</span>
                <span className={this.getProductState()}>{this.props.product.id}</span>
                <ul>
                    {this.state.cats.map(cat => <li key={cat}>{cat}</li>)}
                </ul>
                <button className="btn btn-primary btn-sm add-cart" onClick={() => this.increseProduct(2)}>+</button>
                <button className="delete btn btn-danger m-2" onClick={() => this.props.onDelete(this.props.product)}>Delete</button>
                <button className="update btn btn-success m-2" onClick={() => this.props.onUpdate(this.props.product)}>Update</button>
            </div>
        );
    }
}

export default Product;