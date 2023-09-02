const axios = require('axios'); // Import axios or your preferred HTTP library

// Your GitHub OAuth application credentials
const clientID = '24416';
const clientSecret = 'Tl76xxdI7osW6wSpQcTYZ9p1qILcZiFUCXVeckMo';

// The URL to GitHub's OAuth token endpoint
const tokenURL = 'https://github.com/login/oauth/access_token';

// Redirect URI - should match the one you configured on GitHub
const redirectURI = 'https://github.com/ayxse/osu-program';

// The code received after successful GitHub OAuth authentication
const code = 'code_received_from_oauth_callback';

// Exchange the code for an access token
axios
  .post(tokenURL, null, {
    params: {
      client_id: clientID,
      client_secret: clientSecret,
      code: code,
      redirect_uri: redirectURI,
    },
    headers: {
      Accept: 'application/json',
    },
  })
  .then((response) => {
    const accessToken = response.data.access_token;
    console.log('Access Token:', accessToken);

    // Now that you have the access token, you can make authenticated requests to the GitHub API.
    // You can use this token to fetch user data or perform other actions on behalf of the user.
  })
  .catch((error) => {
    console.error('Error:', error);
  });
