import React, {Fragment} from 'react'

const Stock = (props) => (

  <Fragment>
    <tr>
      <th>{props.stock.name}</th>
      <td>{props.stock.symbol}</td>
      <td>{props.stock.price}</td>
      <td>{props.stock.dayHigh}</td>
      <td>{props.stock.dayLow}</td>

      <button onClick={props.parent === 'stock' ?
          () => props.addToPortofolio(props.stock)
        : () => props.removeFromPortofolio(props.stock)}>✔️</button>
    </tr>
  </Fragment>

);

export default Stock;
