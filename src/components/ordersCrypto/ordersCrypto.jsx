import { useState, useEffect } from "react";
import "./ordersCrypto.css";

const OrdersCrypto = () => {
    const [activeTab, setActiveTab] = useState("open");
    const [orders, setOrders] = useState([]);
    const [newOrder, setNewOrder] = useState({ coin: "", buyPrice: "", sellPrice: "", investment: "", date: "" });
    const [editingOrder, setEditingOrder] = useState(null);
  
    useEffect(() => {
      const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
      setOrders(storedOrders);
    }, []);
  
    useEffect(() => {
      if (orders.length > 0) {
        localStorage.setItem("orders", JSON.stringify(orders));
      }
    }, [orders]);
  
    const addOrder = () => {
      const amount = parseFloat(newOrder.investment) / parseFloat(newOrder.buyPrice);
      const newOrderData = { ...newOrder, amount, id: Date.now(), closed: false, closeDate: "" };
      setOrders([...orders, newOrderData]);
      setNewOrder({ coin: "", buyPrice: "", sellPrice: "", investment: "", date: "" });
    };
  
    const deleteOrder = (id) => {
      setOrders(orders.filter(order => order.id !== id));
    };
  
    const editOrder = (id, updatedOrder) => {
      const amount = updatedOrder.investment ? parseFloat(updatedOrder.investment) / parseFloat(updatedOrder.buyPrice) : updatedOrder.amount;
      setOrders(orders.map(order => (order.id === id ? { ...order, ...updatedOrder, amount } : order)));
      setEditingOrder(null);
    };
  
    const openEditForm = (order) => {
      setEditingOrder(order);
    };
  
    const closeOrder = (id, sellPrice) => {
      setOrders(orders.map(order =>
        order.id === id
          ? { ...order, sellPrice, closed: true, closeDate: new Date().toLocaleDateString() }
          : order
      ));
    };
  
    const totalProfit = orders.filter(order => order.closed).reduce((acc, order) => {
      return acc + (order.sellPrice - order.buyPrice) * order.amount;
    }, 0);
  
    // Función para asegurar que el valor es un número y si no lo es, darle un valor por defecto
    const formatPrice = (price) => {
      const number = parseFloat(price);
      return isNaN(number) ? 0 : number;
    };
  
    return (
      <div className="dashboard-container">
        <div className="tab-container">
          <button onClick={() => setActiveTab("open")} className={activeTab === "open" ? "active" : ""}>Órdenes Abiertas</button>
          <button onClick={() => setActiveTab("closed")} className={activeTab === "closed" ? "active" : ""}>Órdenes Cerradas</button>
        </div>
  
        {activeTab === "open" && (
          <div>
            <h2 className="section-title">Órdenes Abiertas</h2>
            {editingOrder ? (
              <div className="order-form">
                <input type="text" placeholder="Moneda" value={editingOrder.coin} onChange={(e) => setEditingOrder({ ...editingOrder, coin: e.target.value })} />
                <input type="number" placeholder="Precio de Compra" value={editingOrder.buyPrice} onChange={(e) => setEditingOrder({ ...editingOrder, buyPrice: parseFloat(e.target.value) })} />
                <input type="number" placeholder="Dinero invertido" value={editingOrder.investment} onChange={(e) => setEditingOrder({ ...editingOrder, investment: parseFloat(e.target.value) })} />
                <input type="number" placeholder="Cantidad" value={editingOrder.amount} onChange={(e) => setEditingOrder({ ...editingOrder, amount: parseFloat(e.target.value) })} />
                <input type="date" id="datepicker" value={editingOrder.date} onChange={(e) => setEditingOrder({ ...editingOrder, date: e.target.value })} />
                <button onClick={() => editOrder(editingOrder.id, editingOrder)} className="add-button">Guardar Cambios</button>
                <button onClick={() => setEditingOrder(null)} className="cancel-button">Cancelar</button>
              </div>
            ) : (
              <div className="order-form">
                <input type="text" placeholder="Moneda" value={newOrder.coin} onChange={(e) => setNewOrder({ ...newOrder, coin: e.target.value })} />
                <input type="number" placeholder="Precio de Compra" value={newOrder.buyPrice} onChange={(e) => setNewOrder({ ...newOrder, buyPrice: parseFloat(e.target.value) })} />
                <input type="number" placeholder="Dinero invertido" value={newOrder.investment} onChange={(e) => setNewOrder({ ...newOrder, investment: parseFloat(e.target.value) })} />
                <input type="date" value={newOrder.date} onChange={(e) => setNewOrder({ ...newOrder, date: e.target.value })} />
                <button onClick={addOrder} className="add-button">Agregar</button>
              </div>
            )}
  
            <div className="order-table-wrapper">
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Moneda</th>
                    <th>Precio de Compra</th>
                    <th>Inversión</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(order => !order.closed).map(order => (
                    <tr key={order.id}>
                      <td>{order.coin}</td>
                      <td>{`$${formatPrice(order.buyPrice).toFixed(2)}`}</td>
                      <td>{`$${formatPrice(order.investment).toFixed(2)}`}</td>
                      <td>{formatPrice(order.amount).toFixed(2)}</td>
                      <td>{order.date}</td>
                      <td>
                        <div className="order-actions">
                          <button onClick={() => openEditForm(order)} className="edit-button">Editar</button>
                          <button onClick={() => closeOrder(order.id, prompt("Ingrese precio de cierre:"))} className="close-button">Cerrar</button>
                          <button onClick={() => deleteOrder(order.id)} className="delete-button">Eliminar</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
  
        {activeTab === "closed" && (
          <div>
            <h2 className="section-title">Órdenes Cerradas</h2>
            <div className="order-table-wrapper">
              <table className="order-table">
                <thead>
                  <tr>
                    <th>Moneda</th>
                    <th>Precio de Compra</th>
                    <th>Precio de Cierre</th>
                    <th>Inversión</th>
                    <th>Cantidad</th>
                    <th>Fecha</th>
                    <th>Cierre</th>
                    <th>Ganancia</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.filter(order => order.closed).map(order => (
                    <tr key={order.id}>
                      <td>{order.coin}</td>
                      <td>{`$${formatPrice(order.buyPrice).toFixed(2)}`}</td>
                      <td>{`$${formatPrice(order.sellPrice).toFixed(2)}`}</td>
                      <td>{`$${formatPrice(order.investment).toFixed(2)}`}</td>
                      <td>{formatPrice(order.amount).toFixed(2)}</td>
                      <td>{order.date}</td>
                      <td>{order.closeDate}</td>
                      <td>{`$${(formatPrice(order.sellPrice) - formatPrice(order.buyPrice)) * formatPrice(order.amount)}`}</td>
                      <td>
                        <button onClick={() => openEditForm(order)} className="edit-button">Editar</button>
                        <button onClick={() => deleteOrder(order.id)} className="delete-button">Eliminar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="total-profit">Total Ganado: ${totalProfit.toFixed(2)}</h3>
          </div>
        )}
      </div>
    );
  };
  
  export { OrdersCrypto };
  