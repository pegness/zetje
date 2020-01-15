import axios from 'axios';

function signup(phoneNumber, success, failure) {
  const url = `${process.env.REACT_APP_API_URL}/zetje/auth/signup`;

  return (
    axios.post(
      url,
      {
        phoneNumber,
      },
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default signup;
