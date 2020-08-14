import axios from 'axios';

function getZetjePaymentLink(id, code, donationAmount, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/pay/${id}`;
  
  const body = {
    code,
    donationAmount,
  };
  //debugger
  return (
    axios.post(
      url,
      body,
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default getZetjePaymentLink;
