import React, { useState, useEffect } from "react";
import Profile from "./components/Profile/Profile";
import Home from "./components/Wrapper/Wrapper";
import List from "./components/List/List";
import transactions from "./assets/transactions.json";
import { firestore } from "./services/config";

const arr = [
  { id: 1, value: "car", type: "premium" },
  { id: 2, value: "car" },
  { id: 3, value: "car" },
];

const App = () => {
  const [state, setState] = useState([]);
  async function saveTransactions() {
    await firestore.collection("transactions").add({
      transactions,
    });
  }

  async function getTransactions() {
    await firestore
      .collection("transactions")
      .get()
      .then((data) => {
        return data.docs.map((doc) => doc.data());
      })
      .then((res) => setState(res[0]?.transactions));
  }
  useEffect(() => {
    !state.length && getTransactions();
  }, []);

  return (
    <div>
      <Home>
        <Profile array={arr} />
      </Home>
      <Home>
        <Profile array={[]} />
      </Home>
      <List transactions={state} />
    </div>
  );
};

export default App;
