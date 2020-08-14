const getDonationSum = (zetje) => {
    let donationSum = 0;
  
    for (let i = 0; i < zetje.transaction.length; i += 1) {
      if (zetje.transaction[i].status === 'COMPLETED') {
        donationSum = donationSum + zetje.transaction[i].customerDonationAmount + zetje.transaction[i].userDonationAmount;
      }
    }
   
    return donationSum;
  };
  
  export default getDonationSum;
  