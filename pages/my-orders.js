import { useEffect, useState } from "react";
import CardLayout from "../components/card-layout";
import Layout from "../components/layout";
import Navbar from "../components/navbar";
import Table from "../components/table";
import { getOrders } from "../data/orders";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const headers = ["Order Date", "Total", "Payment Method"];

  useEffect(() => {
    getOrders().then((ordersData) => {
      if (ordersData) {
        setOrders(ordersData);
      }
    });
  }, []);

  return (
    <>
      <CardLayout title="Your Orders">
        <Table headers={headers}>
          {orders.map((order) => {
            const created_date = order.created_date;
            const payment_type_info = order.payment_type_info;
            const total_cost = order.lineitems.reduce((acc, lineitem) => {
              return acc + lineitem.product.price;
            }, 0);
            return (
              <tr key={order.id}>
                <td>{created_date}</td>
                <td>${total_cost.toFixed(2)}</td>
                <td>{payment_type_info && payment_type_info.merchant_name}</td>
              </tr>
            );
          })}
        </Table>
        <></>
      </CardLayout>
    </>
  );
}

Orders.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Navbar />
      <section className="container">{page}</section>
    </Layout>
  );
};
