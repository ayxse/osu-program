// Function to fetch Osu! user data
function fetchUserData(username) {
    const userDataContainer = document.getElementById('userDataContainer');
    const userDataElement = document.getElementById('userData');
  
    // Make a GET request to the Osu! API to fetch the user's data
    axios
      .get(`https://osu.ppy.sh/${username}`)
      .then((response) => {
        // Display the user data in the userDataContainer
        userDataElement.textContent = JSON.stringify(response.data, null, 2);
        userDataContainer.style.display = 'block';
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        userDataElement.textContent = 'Error fetching user data';
        userDataContainer.style.display = 'block';
      });
  }
  
  // Event listener for the "Fetch User Data" button
  const fetchUserDataButton = document.getElementById('fetchUserDataButton');
  fetchUserDataButton.addEventListener('click', () => {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim();
  
    if (!username) {
      alert('Please enter an Osu! username.');
      return;
    }
  
    // Call the fetchUserData function with the username
    fetchUserData(username);
  });
  