import{r as o,h as t}from"./p-7562b88f.js";const e=class{constructor(t){o(this,t),this.stockUserInput="",this.inputError="",this.stockSymbol=""}handleUserInput(o){this.stockUserInput=o.target.value,this.inputError&&(this.inputError=""),this.stockSymbol&&(this.stockSymbol="")}handleSubmit(o){if(o.preventDefault(),0===this.stockUserInput.trim().length)return this.inputError="Stock name required !!!";fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${this.stockUserInput}&apikey=SX2DS5OUFISOMRIZ`).then((o=>o.json())).then((o=>{if(!o["Global Quote"].hasOwnProperty("01. symbol"))return this.inputError="Invalid stock symbol !!!";this.stockPrice=+o["Global Quote"]["05. price"],this.stockSymbol=o["Global Quote"]["01. symbol"],this.stockUserInput=""})).catch((o=>(console.log(o),this.inputError="System Error !!!")))}render(){return t("div",{id:"stock-price-container"},t("form",{onSubmit:this.handleSubmit.bind(this),autocomplete:"off"},t("div",{class:"form-group"},t("input",{id:"stock-symbol",ref:o=>{this.stockInput=o},class:"form-control",type:"text",placeholder:"MSFT, AAPL, SBUX, etc.",autocomplete:"off",value:this.stockUserInput,onInput:this.handleUserInput.bind(this)})),t("button",{type:"submit"},"Get Stock Price")),(()=>this.inputError?t("div",{id:"validation-feedback"},this.inputError):this.stockSymbol?t("div",{id:"price"},this.stockSymbol," Price: $",this.stockPrice):t("div",{id:"price"}," - "))())}static get assetsDirs(){return["assets"]}};e.style='@import url(\'https://fonts.googleapis.com/css2?family=Creepster&display=swap\');*,*::before,*::after{box-sizing:border-box}#stock-price-container{display:inline-block;display:block;width:100%;min-width:400px;max-width:500px;padding:25px;margin:0;width:100%;background-color:#FFF;border:2px solid #85bb65;border-radius:15px;box-shadow:0px 2px 4px rgba(0,0,0,0.25)}input,button,select,optgroup,textarea{margin:0;font-family:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button:not(:disabled),[type="button"]:not(:disabled),[type="reset"]:not(:disabled),[type="submit"]:not(:disabled){cursor:pointer}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{padding:0;border-style:none}input[type="radio"],input[type="checkbox"]{box-sizing:border-box;padding:0}.form-group{margin-bottom:1rem}.form-control{display:block;width:100%;height:calc(1.5em + 0.75rem + 2px);padding:0.375rem 0.75rem;font-size:1rem;font-weight:400;line-height:1.5;color:#495057;background-color:#fff;background-clip:padding-box;border:1px solid #85bb65;border-radius:5px;transition:border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out}.form-control:focus{color:#495057;background-color:#fff;border-color:#85bb65;outline:0;box-shadow:0 0 0 0.2rem rgba(133, 185, 101, 0.25)}.form-control::-webkit-input-placeholder{color:#6c757d;opacity:1}.form-control::-moz-placeholder{color:#6c757d;opacity:1}.form-control:-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::-ms-input-placeholder{color:#6c757d;opacity:1}.form-control::placeholder{color:#6c757d;opacity:1}.form-control:disabled,.form-control[readonly]{background-color:#e9ecef;opacity:1}form button{width:100%;padding:5px 10px;font:inherit;color:#FFF;background:#85bb65;border:1px solid rgba(0,0,0,0.15);cursor:pointer;border-radius:5px;box-shadow:0px 2px 4px rgba(0,0,0,0.25)}form button:focus{outline:none}form button:active{background:#5B9338;box-shadow:none}#price{margin-top:15px;color:#85bb65;font-size:20px;font-weight:bold;font-family:courier;text-align:center;line-height:1}#validation-feedback{margin-top:15px;color:rgb(220,0,0);font-size:20px;font-family:Creepster, Helvetica;font-style:italic;text-align:center;line-height:1}';export{e as stock_price}