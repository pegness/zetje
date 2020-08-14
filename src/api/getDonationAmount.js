import axios from 'axios';

function getDonationAmount(token, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/donated/all`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (
    axios.get(
      url,
      config,
    )
      .then(response => success(response.data))
      .catch(error => failure(error, 'getAllZetjes'))
  );
}

export default getDonationAmount;
