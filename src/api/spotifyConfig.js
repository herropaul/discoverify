const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

export const getAuthToken = async () => {
  // Client credential flow of authentication
  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    },
    body: 'grant_type=client_credentials',
})
    .then((result) => result.json())
    .then((data) => {
      console.log(data?.access_token)
      return data?.access_token;
    })
    .catch((error) => console.log('Error: ', error));
}