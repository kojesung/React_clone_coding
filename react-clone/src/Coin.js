import { useState, useEffect } from "react";
function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState("");
    const [selectedCoin, setSelectedCoin] = useState('')
    const [selectedCoinPrice, setSelectedCoinPrice] = useState(null)
    const handleSelect = (event) => {
        setSelectedCoinPrice(event.target.value)
    }
    const handleOnChange = (event) => {
        setMoney(event.target.value)
    }
    const getCoin = async () => {
        const response = await fetch(`https://api.coinpaprika.com/v1/tickers`)
        const json = await response.json()
        setCoins(json)
        setLoading(false)
    }
    useEffect(() => {
        getCoin()
    }, [])
    return (
        <div>
            <h1>The Coins!({coins.length})</h1>
            <input onChange={handleOnChange} value={money} placeholder="How many do you have?" />
            <br></br>
            <p></p>
            {loading ? <strong>loading...</strong> : null}
            <select onChange={handleSelect}>
                <option value="0"> Select your coin!</option>
                {coins.map((coin) => <option value={coin.quotes.USD.price} key={coin.id}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price}</option>)}
            </select>
            <div>
                <h2>
                    {money && selectedCoinPrice ? <div>{Math.floor(money / selectedCoinPrice)}개 구매 가능</div> : null}
                </h2>
            </div>
        </div >
    )
}
export default Coin;
/*select 안에 있는 option에 value를 설정해주고 select 태그 내에서 onChange속성으로 event.target.value로 접근하면 선택한 option의 value로 접근됨!!!!!!
*/