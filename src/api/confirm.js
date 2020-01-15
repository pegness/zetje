import axios from 'axios';

function confirm(data, success, failure) {
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    //notificationEnabled,
    confirmationToken,
    confirmationCode,
    allowedToContact,
  } = data;

  const url = `${process.env.REACT_APP_API_URL}/zetje/auth/confirm`;

  return (
    axios.post(
      url,
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        //notificationEnabled,
        confirmationToken,
        confirmationCode,
        allowedToContact,
      },
    )
      .then(response => success(response.data))
      .catch(error => failure(error))
  );
}

export default confirm;
