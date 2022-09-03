import axios from "axios";
import { getAuthToken } from "../spotifyConfig";

export const getArtistById = async () => {
  // 4pb4rqWSoGUgxm63xmJ8xc <- artist id
  const access_token = await getAuthToken();
  console.log('Access token: ' + access_token);
  return access_token;

  //const api_url = `https://api.spotify.com/v1/artists/${artist_id}`;

  /*
  try{
    const response = fetch(api_url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      }
    });
    console.log(response.data);
    return response.data
  }
  catch(e){
    console.log("Error: ", e)
  }
  */
}
