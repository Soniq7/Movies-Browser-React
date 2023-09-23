import {
  Content,
  Header,
  Poster,
  ImageWrapper,
  Title,
  Review,
  Score,
  Votes,
  Scale,
  Shadow,
  ReviewIcon,
} from "./styled";
import { useEffect, useState } from "react";
import { getWidth } from "../../../../../common/getWidth";
import shadow from "../../../../../images/shadow.png";

const Backdrop = ({ image, name, score, votes }) => {
  const [viewportWidth, setViewportWidth] = useState(getWidth());

  useEffect(() => {
    const updateViewportWidth = () => {
      setViewportWidth(getWidth());
    };

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, [viewportWidth]);
  return (
    <Header>
      <ImageWrapper>
        <Poster src={`https://image.tmdb.org/t/p/original/${image}`} />
        <Shadow src={shadow} />
      </ImageWrapper>
      {image && (
        <Content>
          <Title>{name}</Title>
          <Review>
            <ReviewIcon />
            <Score>{score}</Score>
            <Scale>/10</Scale>
            {viewportWidth <= 700 ? <Votes>{votes} votes</Votes> : ""}
          </Review>
          {viewportWidth > 700 ? <Votes>{votes} votes</Votes> : ""}
        </Content>
      )}
    </Header>
  );
};

export default Backdrop;
