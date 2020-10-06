import React, { Component} from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    console.log(this.props.myPortofolio)
    return (
      <div>
        <h2>My Portfolio</h2>
        <div>
          <table className="table table-striped">
          {this.props.myPortofolio.length > 0 ?
              <thead>
                <tr>
                  <th scope="col">Company</th>
                  <th scope="col">Symbol</th>
                  <th scope="col">Current</th>
                  <th scope="col">Low</th>
                  <th scope="col">High</th>
                  <th>Remove</th>
                </tr>
                </thead>
                : null}
                <tbody>
                {this.props.myPortofolio.map(stock =>
                  <Stock
                    stock={stock}
                    removeFromPortofolio={this.props.removeFromPortofolio}
                    parent='portofolio'/>)}
                </tbody>
            </table>
            </div>
      </div>
    );
  }

}

export default PortfolioContainer;
