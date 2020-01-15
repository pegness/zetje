import axios from 'axios';

function getZetjePaymentLink(id, code, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/pay/${id}/${code}`;

  return (
    axios.get(
      url,
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default getZetjePaymentLink;
