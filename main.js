// Function to fetch Osu! user stats from the Osu! API
function fetchUserStats(username) {
    const userDataContainer = document.getElementById('userDataContainer');
    const userDataElement = document.getElementById('userData');
  
    // Make a GET request to the Osu! API to fetch the user's stats
    axios
      .get(`https://osu.ppy.sh/api/get_user?u=${username}&k=b784e0522318bab6e28fa03d4b1072874480e1eb`)
      .then((response) => {
        // Display the user stats in the userDataContainer
        userDataElement.textContent = JSON.stringify(response.data, null, 2);
        userDataContainer.style.display = 'block';
      })
      .catch((error) => {
        console.error('Error fetching user stats:', error);
        userDataElement.textContent = 'Error fetching user stats';
        userDataContainer.style.display = 'block';
      });
  }
  
  // Event listener for the "Fetch User Stats" button
  const fetchUserDataButton = document.getElementById('fetchUserDataButton');
  fetchUserDataButton.addEventListener('click', () => {
    const usernameInput = document.getElementById('usernameInput');
    const username = usernameInput.value.trim();
  
    if (!username) {
      alert('Please enter an Osu! username.');
      return;
    }
  
    // Call the fetchUserStats function with the username
    fetchUserStats(username);
  });
  