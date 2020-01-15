import axios from 'axios';

function confirmLogin(data, success, failure) {
  const {
    phoneNumber,
    confirmationToken,
    confirmationCode,
  } = data;

  const url = `${process.env.REACT_APP_API_URL}/zetje/auth/login/confirm`;

  return (
    axios.post(
      url,
      {
        phoneNumber,
        confirmationToken,
        confirmationCode,
      },
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default confirmLogin;
