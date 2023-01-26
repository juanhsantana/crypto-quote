import React, { useState } from "react"
import axios from "axios"
import "./SearchBar.styles.css"

export function SearchBar() {
  const [searchCoin, setSearchCoin] = useState("")

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCoin(event.target.value)
  }

  return (
    <div className="searchBarContainer">
      <input
        type="text"
        value={searchCoin}
        onChange={handleChange}
        placeholder="Pesquisar"
      />
    </div>
  )
}
