import axios from "axios";

const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;

export const getAuthToken = async () => {
  fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
        Authorization: 'Basic ' + btoa(client_id + ':' + client_secret),
    },
    body: 'grant_type=client_credentials',
})
    .then((result) => result.json())
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((error) => console.log('Error: ', error));
}