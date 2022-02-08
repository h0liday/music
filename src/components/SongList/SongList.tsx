import { FC } from "react";
import { Stack } from "react-bootstrap";
import { useGetTopSongs } from "../../hooks/useGetTopSongs";

const SongList: FC = () => {
  const { error, isLoading, songs } = useGetTopSongs();

  return (
    <Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
  );
};

export default SongList;
