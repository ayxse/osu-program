import { Client } from 'osu-web.js';

// Initialize the client with your Osu! API key
const client = new Client('4de9a885c54d8daac6b9c7245f453ad317f644dc'); // Replace with your API key

// Function to fetch and display user data
async function getUserData(username) {
  try {
    // Fetch user data using the 'getUser' method
    const userData = await client.users.getUser(username, {
      urlParams: {
        mode: 'osu', // Specify the game mode (e.g., 'osu', 'taiko', 'mania', 'fruits')
      },
    });

    // Display the user data in the HTML
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = `
      <h2>User Data for ${username}</h2>
      <p>Osu! ID: ${userData.id}</p>
      <p>Username: ${userData.username}</p>
      <p>PP: ${userData.statistics.pp}</p>
      <!-- Add more user data fields as needed -->
    `;

    console.log('User Data:', userData); // Log the user data for debugging

  } catch (error) {
    // Handle any errors that occur during the API request
    console.error('Error fetching user data:', error);

    // Display an error message in the HTML
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = '<p>Error fetching user data. Please try again.</p>';
  }
}

// Event listener for the form submission
const osuForm = document.getElementById('osu-form');

osuForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  // Get the input value (Osu! username)
  const username = document.getElementById('osu-username').value;

  // Call the function to fetch user data using the entered username
  getUserData(username);
});
