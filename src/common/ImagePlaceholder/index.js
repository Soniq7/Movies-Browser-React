import {
  Camera,
  MovieFrame,
  PersonFrame,
  Person,
  PersonPageFrame,
} from "./styled";

const ImagePlaceholder = ({ isPersonTile, isPageTile }) => {
  if (isPersonTile && isPageTile) {
    return (
      <PersonPageFrame>
        <Person />
      </PersonPageFrame>
    );
  }

  if (isPersonTile) {
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
