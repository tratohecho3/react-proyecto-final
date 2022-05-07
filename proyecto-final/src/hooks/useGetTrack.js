import { useEffect, useState, useCallback } from 'react';
import { URL_API_MAPPING } from '../constants/urls';
import { TRACKS } from '../constants/entities';
import useGetAuth from './useGetAuth';

const useGetTrack = ({ trackId }) => {
  const [track, setTrack] = useState();
  const [accessToken] = useGetAuth();
  const getData = useCallback(async () => {
    const response = await fetch(`${URL_API_MAPPING[TRACKS]}/${trackId}`, {
      headers: {
        'Content-Type': 'application/json',
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
