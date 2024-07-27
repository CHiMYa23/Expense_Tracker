import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { TrasactionList } from "./components/TrasactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container mt-0">
        <Balance />
        <IncomeExpenses />
        <TrasactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
