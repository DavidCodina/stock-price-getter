import { Component, State, h } from '@stencil/core';
import { AV_API_KEY } from '../../global/global';


@Component({
  tag: 'stock-price',
  styleUrl: 'stock-price.css',
  shadow: true,
  assetsDirs: ['assets'],
})


export class StockPrice {
  stockInput: HTMLInputElement;
  @State() stockPrice: number;
  @State() stockUserInput = '';
  @State() inputError     = '';
  @State() stockSymbol    = '';


  handleUserInput(e: Event){
    this.stockUserInput = (e.target as HTMLInputElement).value;
    if (this.inputError){  this.inputError  = ''; }
    if (this.stockSymbol){ this.stockSymbol = ''; }
  }


  handleSubmit(e: Event){
    e.preventDefault();

    if (this.stockUserInput.trim().length === 0){
      return this.inputError = "Stock name required !!!";
    }


    fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockUserInput}&apikey=${AV_API_KEY}`)
    .then(res  => { return res.json(); })

    .then(res  => {
      if (!res['Global Quote'].hasOwnProperty('01. symbol')){ return this.inputError = "Invalid stock symbol !!!" }

      this.stockPrice     = +res['Global Quote']['05. price'];
      this.stockSymbol    = res['Global Quote']['01. symbol'];
      this.stockUserInput = '';
    })

    .catch(err => {
      console.log(err);
      return this.inputError = "System Error !!!"
    });
  }


  render(){
    const renderInfo = () => {
      if (this.inputError){
        return <div id="validation-feedback">{this.inputError}</div>;
      }

      if (this.stockSymbol){
        return <div id="price">{this.stockSymbol} Price: ${this.stockPrice}</div>;
      } else {
        return <div id="price"> - </div>;
      }
    };

    return (
      <div id="stock-price-container">
        <form onSubmit={this.handleSubmit.bind(this)} autocomplete="off">
          <div class="form-group">
            <input
              id="stock-symbol"
              ref={(element) => { this.stockInput = element; }}
              class="form-control"
              type="text"
              placeholder="MSFT, AAPL, SBUX, etc."
              autocomplete="off"
              value={this.stockUserInput}
              onInput={this.handleUserInput.bind(this)}
            />
          </div>

          <button type="submit">Get Stock Price</button>
        </form>


        { renderInfo() }
      </div>
    );
  }
}
