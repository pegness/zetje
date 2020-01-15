import axios from 'axios';

function getZetje(id, code, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/details/${id}/${code}`;

  return (
    axios.get(
      url,
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default getZetje;
