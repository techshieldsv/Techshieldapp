import React, { useState } from 'react'

export default function App() {
  const [orders, setOrders] = useState([])
  const [orderText, setOrderText] = useState('')

  const addOrder = () => {
    if (orderText.trim()) {
      setOrders([...orders, { text: orderText, id: Date.now() }])
      setOrderText('')
    }
  }

  const sendWhatsApp = (order) => {
    const msg = encodeURIComponent(`Orden de trabajo: ${order.text}`)
    window.open(`https://wa.me/?text=${msg}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">TechShield - Gestión de Órdenes</h1>

      <div className="mb-4">
        <input
          type="text"
          value={orderText}
          onChange={(e) => setOrderText(e.target.value)}
          className="border p-2 rounded mr-2"
          placeholder="Nueva orden..."
        />
        <button onClick={addOrder} className="bg-blue-500 text-white px-4 py-2 rounded">
          Agregar
        </button>
      </div>

      <ul className="space-y-2">
        {orders.map((order) => (
          <li key={order.id} className="flex justify-between items-center bg-white p-2 rounded shadow">
            <span>{order.text}</span>
            <button
              onClick={() => sendWhatsApp(order)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              WhatsApp
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
