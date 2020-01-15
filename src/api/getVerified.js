import axios from 'axios';

function getVerified(token, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/user/check-verified`;

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return (
    axios.get(
      url,
      config,
    )
      .then(response => success(response.data))
      .catch(error => failure(error, 'getVerified'))
  );
}

export default getVerified;
