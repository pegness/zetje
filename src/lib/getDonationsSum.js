import getCompletedTransactions from './getCompletedTransactions';

const getDonationsSum = (zetjesArray) => {
  let donationsSum = 0;

  for (let i = 0; i < zetjesArray.length; i += 1) {
    const numberOfCompletedTransactions = getCompletedTransactions(zetjesArray[i]).length;

    donationsSum += zetjesArray[i].donationAmount * numberOfCompletedTransactions;
  }

  return donationsSum;
};

export default getDonationsSum;
