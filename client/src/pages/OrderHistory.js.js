import React from "react";
import Nav from "../components/HomePage/Nav";
import Footer from "../components/HomePage/Footer";
import CopyRight from "../components/HomePage/CopyRight";
import HistoryLists from "../components/OrderHistoryPage/HistoryLists";

const OrderHistory = () => {
  return (
    <section className="orderHistory">
      <Nav />
      <HistoryLists />
      <Footer />
      <CopyRight />
    </section>
  );
};

export default OrderHistory;
