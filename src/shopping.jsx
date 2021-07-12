import React, {Component} from 'react';
import Product from './product';

class Shopping extends Component {
    state = {
        products : [
            {
                id: 1,
                name: "Fish",
                num: 6
            },
            {
                id: 2,
                name: "Meat",
                num: 2
            },
            {
                id: 3,
                name: "Chickens",
                num: 9
            },
        ]
    }

    // Delete Handler
    Delete = (product) => {
        // clone & Edit
        let newProds = this.state.products.filter(prop => {
            return prop.id !== product.id
        });
        // set New State
        this.setState({products: newProds});
    }

    update = (product) => {
        // clone & edit
        let newProds = this.state.products.map(pro => {
            pro.name = "Mohamed";
            return pro;
        });
        // set new State

        this.setState({products: newProds})
    }

    render() {
        return (
            <React.Fragment> {/* This A Non Visible Element That Created To Contain the hole Component Elements Withot Showing In The HTML */}
                <h1>My Shooing Cart</h1>
                {this.state.products.map(pro => {
                    return <Product key={pro.id} product={pro} onDelete={this.Delete} onUpdate={this.update}>
                        <h3>{pro.id}</h3>
                    </Product>
                })}
                
            </React.Fragment>
        );
    }
}

export default Shopping;
