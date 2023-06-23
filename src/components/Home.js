import Tile from './Tile';
import Inputbox from './Inputbox';
import { useState, useEffect } from 'react';
function Home() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [transactions, setTransactions] = useState(JSON.parse(localStorage.getItem("transactions"))||[]);
  const RenderTile = (transaction, index) => {
    return (
      <Tile transaction={transaction}
        transactions={transactions}
        setTransaction={setTransactions}
        key={index}
        index={index} />
    )
  }
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions))
  },[transactions]);
  return (
    <div>
      <Inputbox
        amount={amount}
        setAmount={setAmount}
        category={category}
        setCategory={setCategory}
        transaction={transactions}
        setTransaction={setTransactions} />
      <br />
      {transactions.map(RenderTile)} <br />
    </div>
  );
}
export default Home;
