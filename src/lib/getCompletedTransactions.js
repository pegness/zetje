const getCompletedTransactions = (zetje) => {
  const transactions = [];

  for (let i = 0; i < zetje.transaction.length; i += 1) {
    if (zetje.transaction[i].status === 'COMPLETED') {
      transactions.push(zetje.transaction[i]);
    }
  }
 
  return transactions;
};

export default getCompletedTransactions;
