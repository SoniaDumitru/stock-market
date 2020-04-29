import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return(
      <div>
        <h2>Stocks</h2>
        <table className="table table-striped">
          <thead>
            <tr>
                <th scope="col">Company</th>
                <th scope="col">Symbol</th>
                <th scope="col">Current</th>
                <th scope="col">Low</th>
                <th scope="col">High</th>
                <th>Add</th>

            </tr>
          </thead>
          <tbody>
              {this.props.stocks.map(stock =>
              < Stock
                stock={stock}
                parent='stock'
                addToPortofolio={this.props.addToPortofolio}/>)}
          </tbody>
        </table>
      </div>
    )
  }
}

export default StockContainer;
