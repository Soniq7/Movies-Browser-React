import { Camera, MovieFrame, PersonFrame, Person } from "./styled";

const ImagePlaceholder = ({ isPerson }) => {
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
