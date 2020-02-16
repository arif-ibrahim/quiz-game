import axios from "axios";
import { backendUrl, backendArtisanUrl, accessToken, msisdn, } from "./apiUrl.json";

export const get = endpoint => {
  axios.get(backendUrl + endpoint);
};

export const post = async endpoint => {
  const response = await axios.post(backendUrl + endpoint, {
      access_token: accessToken,
      msisdn: msisdn,
      
  });
  try {
    if (response.status === 200) {
      return response.data;
    }
  } catch (ex) {
    return ex;
  }
};

export const postPlayArtisan = async endpoint => {
  await axios.get(backendArtisanUrl + endpoint, {
      access_token: accessToken,
      msisdn: msisdn,
  });
};

