import React, { Component } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from '../containers/PortofolioContainer';
import SearchBar from '../components/SearchBar';

class MainContainer extends Component {
state = {
  stocks: [],
  sortBy: '',
  myPortofolio: []
}


  componentDidMount() {
    const symbols = ["DOW", "AAPL", "FB", "ABT", "AMZN", "KO", "ABT", "DJ", "KSWS", "NYT", "MCD", "LUV", "TIF", "NOK", "FOSL", "DAL", "AET", "AW", "AOC", "BAC", "Carnival Corp", "F", "MOT", "NVDA", "MSFT", "PCLN", "NTRS", "ORCL", "TSLA", "SBUX", "BABA", "GE", "BA", "YHOO", "WHR", "TM", "WAG", "WMT", "NKE", "CHL", "HDI", "HD", "GOOGL", "KDE", "COMS", "SVNX", "AET", "T", "APPB", "BP", "CRA", "CEN", "HSY"]
    fetch(`https://financialmodelingprep.com/api/v3/quote/${symbols}?apikey=a0a157c96904aea3562d6398c3897aed`)
    .then(resp => resp.json())
    .then(stocks => this.setState({
      stocks: stocks
    }))
  }

  selectStocks = () => {
    let selectedStocks = [...this.state.stocks];
    if (this.state.sortBy === 'Alphabetically') {
      return selectedStocks.sort((firstStock, secondStock) => { if (firstStock.name < secondStock.name) {return -1}
                                                              if (firstStock.name > secondStock.name) {return 1}
                                                              return 0 })
    } else if (this.state.sortBy === 'Price'){
      return selectedStocks.sort((firstStock, secondStock) => firstStock.price - secondStock.price)
    } else {
      return selectedStocks;
    }
  }

  handleRadio = (event) => {
    this.setState({
      sortBy: event.target.value
    })
  }

  removeFromPortofolio =(stock)=> {
  if (this.state.myPortofolio.includes(stock)) {
    let filtered = this.state.myPortofolio.filter(s => s!==stock)
    this.setState({
      myPortofolio: filtered
    })
  }
}

addToPortofolio =(stock)=> {
  if (!this.state.myPortofolio.includes(stock)) {
    let newSelectedStocks = [...this.state.myPortofolio, stock]
    this.setState({
      myPortofolio: newSelectedStocks
    })
  }
}

  render() {
    return(
      <div>
        <SearchBar
          handleRadio={this.handleRadio}
          sortBy={this.state.sortBy}/>
        <div className="row">
          <div className="col-7">
            <StockContainer
              stocks = {this.selectStocks()}
              addToPortofolio={this.addToPortofolio}/>
          </div>
          <div className="col-5">
          <PortfolioContainer
              myPortofolio={this.state.myPortofolio}
              removeFromPortofolio={this.removeFromPortofolio}/>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;
