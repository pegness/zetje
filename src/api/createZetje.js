import axios from 'axios';

function createZetje(data, token, success, failure) {
  const {
    totalAmount,
    donationAmount,
    description,
  } = data;

  const url = `${process.env.REACT_APP_API_URL}/zetje/create`;

  const body = {
    totalAmount,
    donationAmount,
    description,
  };

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (
    axios.post(
      url,
      body,
      config,
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default createZetje;
