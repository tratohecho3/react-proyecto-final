import { useEffect, useState, useCallback } from "react";
import { URL_API_MAPPING } from "../constants/urls";
import { SEARCH } from "../constants/entities";
import useGetAuth from "./useGetAuth";

const useSearchTracks = ({ query }) => {
  const [tracks, setTracks] = useState();
  const [accessToken] = useGetAuth();
  const getData = useCallback(async () => {
    const response = await fetch(
      `${URL_API_MAPPING[SEARCH]}/?q=${query}&type=track`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    setTracks(data.tracks);
  }, [accessToken, query]);

  useEffect(() => {
    if (query && accessToken) {
      getData();
    }
  }, [query, accessToken, getData]);

  return [tracks];
};

export default useSearchTracks;
