import useGetTrack from "./hooks/useGetTrack";
import Track from "./components/Track/Track";

const App = () => {
  const [track] = useGetTrack({ trackId: "2r6OAV3WsYtXuXjvJ1lIDi" });

  return <Track track={track}></Track>;
};

export default App;
