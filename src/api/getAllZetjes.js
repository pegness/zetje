import axios from 'axios';

function getAllZetjes(token, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/all`;

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

export default getAllZetjes;