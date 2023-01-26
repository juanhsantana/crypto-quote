import React, { useEffect, useState } from "react"
import axios from "axios"
import "./CryptoQuotex.styles.css"

type CoinData = {
  id: string
  symbol: string
  name: string
  image: string
  market_cap: string
  current_price: string
  price_change_percentage_24h: number
}

export function CryptoQuotex() {
  const [cryptoData, setCryptoData] = useState<CoinData[]>([])

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((response) => {
        setCryptoData(response.data)
        console.log(response.data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="cryptoQuoteContainer">
      <div className="cryptoQuoteContent">
        {cryptoData.map((coin, i) => {
          return (
            <div key={i} className="coinCard">
              <div className="leftCardContent">
                <img src={coin.image} alt="" />
                <span>{coin.name}</span>
              </div>

              <span>${coin.current_price.toLocaleString()}</span>

              {coin.price_change_percentage_24h < 0 ? (
              <span style={{ color: '#FF626B' }}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
              ) : (
                <span style={{ color: '#41CB74' }}>{coin.price_change_percentage_24h.toFixed(2)}%</span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
