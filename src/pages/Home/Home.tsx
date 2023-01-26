import React from "react"
import { CryptoQuotex } from "../../components/CryptoQuote/CryptoQuotex"
import { Navbar } from "../../components/Navbar/Navbar"
import { SearchBar } from "../../components/SearchBar/SearchBar"

export function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <CryptoQuotex />
    </>
  )
}
