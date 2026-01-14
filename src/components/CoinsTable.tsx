import type { CoinInterface } from "../interfaces/Coin"
import Coin from "./Coin"

const CoinsTable = ({coins} : {coins: CoinInterface[]}) => {
  return (
    <table className="w-full bg-white rounded-lg shadow-sm overflow-hidden">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Orden</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nombre</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Precio</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Cambio 24h</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Favorito</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        {coins.map(coin => (
          <Coin
            key={coin.id}
            id={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            current_price={coin.current_price}
            price_change_percentage_24h={coin.price_change_percentage_24h}
            image={coin.image}
          />
        ))}
      </tbody>
    </table>
  )
}

export default CoinsTable