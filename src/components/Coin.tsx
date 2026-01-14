import { useState } from "react"
import type { CoinInterface } from "../interfaces/Coin"
import { Link } from "react-router-dom"

const Coin = ({id, name, symbol, current_price, image, price_change_percentage_24h}: CoinInterface) => {

  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  
  const handleFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")
    setIsFavorite(!isFavorite)
    localStorage.setItem("favorites", JSON.stringify([...favorites, id]))
  }

  return (
    <tr className="hover:bg-gray-50 transition-colors">      
      <td className="px-6 py-4 text-sm text-gray-600">{id}</td>
      <td className="px-6 py-4">
        <Link to={`/coin/${id}`} className="flex items-center gap-3">
          <img src={image} alt={symbol} className="w-10 h-10 rounded-full" />
          <div className="flex flex-col">
            <span className="font-semibold text-gray-900">{name}</span>
            <span className="text-sm text-gray-500">{symbol}</span>
          </div>
        </Link>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900">{current_price}</td>
      <td className="px-6 py-4 text-sm text-gray-600">{price_change_percentage_24h?.toFixed(2)}%</td>
      <td className="px-6 py-4">
        <button 
          onClick={handleFavorites}
          className="px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-gray-100 hover:bg-gray-200 text-gray-700"
        >
          {isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
        </button>
      </td>
    </tr>
  )
}

export default Coin