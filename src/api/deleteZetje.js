import axios from 'axios';

function deleteZetje(data, token, success, failure) {
  const {
    zetjeId,
  } = data;

  const url = `${process.env.REACT_APP_API_URL}/zetje/delete`;

  const body = {
    zetjeId,
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

export default deleteZetje;
