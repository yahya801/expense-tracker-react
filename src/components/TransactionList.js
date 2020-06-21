import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  const { deleteallTransaction } = useContext(GlobalContext);
  return (
    <>
      <div>
        <h3 >History <button className="deletex"
        onClick={() => deleteallTransaction()}
        >Delete All</button></h3>
        
      </div>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
