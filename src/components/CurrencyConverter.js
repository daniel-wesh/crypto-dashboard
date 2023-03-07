import ExchangeRate from "./ExchangeRate"

const CurrencyConverter = () => {
    return (
      <div className="currency-converter">
        <h2>CurrencyConverter</h2>
        <table>
            <tbody>
                <tr>
                    <td>Primary Currency:</td>
                    <td>
                        <input
                            type= "number"
                            name="currency-amount -1"
                            value = ""
                        
                        />
                    </td>
                </tr>
            </tbody>
        </table>
        <ExchangeRate />
      </div>
    )
  }
  
  export default CurrencyConverter
  