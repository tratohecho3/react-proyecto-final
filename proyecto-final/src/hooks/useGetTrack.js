import { useEffect, useState, useCallback } from "react";
import { URL_API_MAPPING } from "../constants/urls";
import { TRACKS } from "../constants/entities";
import useGetAuth from "./useGetAuth";

const useGetTrack = ({ trackId }) => {
  const [track, setTrack] = useState();
  const clientId = "cc4e061f3d0344f29e7f171023f80d3c";
  const clientSecret = "f8565989cc1b46f0b9e4b6f57295717a";
  const [accessToken] = useGetAuth({ clientId, clientSecret });
  const getData = useCallback(async () => {
    const response = await fetch(`${URL_API_MAPPING[TRACKS]}/${trackId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    setTrack(data);
  }, [accessToken, trackId]);

  useEffect(() => {
    if (trackId && accessToken) {
      getData();
    }
  }, [trackId, accessToken, getData]);

  return [track];
};

export default useGetTrack;
