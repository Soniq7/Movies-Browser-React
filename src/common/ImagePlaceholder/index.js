import {
  Camera,
  MovieFrame,
  PersonFrame,
  Person,
  PersonPageFrame,
} from "./styled";

const ImagePlaceholder = ({ isPerson, isPage }) => {
  if (isPerson && isPage) {
    return (
      <PersonPageFrame>
        <Person />
      </PersonPageFrame>
    );
  }

  if (isPerson) {
    return (
      <PersonFrame>
        <Person />
      </PersonFrame>
    );
  }
  return (
    <MovieFrame>
      <Camera />
    </MovieFrame>
  );
};

export default ImagePlaceholder;
