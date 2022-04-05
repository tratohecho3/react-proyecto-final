import { useEffect, useState, useCallback } from "react";
import { URL_API_MAPPING } from "../constants/urls";
import { TOKEN } from "../constants/entities";
import { Buffer } from "buffer";
import {
  REACT_APP_SPOTIFY_CLIENT_ID,
  REACT_APP_SPOTIFY_CLIENT_SECRET,
} from "../config";
const useGetAuth = ({ clientId, clientSecret }) => {
  const [accessToken, setAccessToken] = useState("");
  const getAuth = useCallback(async () => {
    const headers = {
      Authorization: `Basic ${new Buffer(
        `${REACT_APP_SPOTIFY_CLIENT_ID}:${REACT_APP_SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    };
    const response = await fetch(URL_API_MAPPING[TOKEN], {
      method: "post",
      headers,
      body: "grant_type=client_credentials",
    });
    const data = await response.json();
    setAccessToken(data.access_token);
  }, [clientId, clientSecret]);

  useEffect(() => {
    if (clientId && clientSecret) {
      getAuth();
    }
  }, [clientId, clientSecret, getAuth]);

  return [accessToken];
};

export default useGetAuth;
