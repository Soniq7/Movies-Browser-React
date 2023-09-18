import {
  Shadow,
  BackdropPoster,
  Header,
  Wrapper,
  Content,
  Title,
  ReviewIcon,
  Review,
  Score,
  Scale,
  Votes,
} from "./styled";
import { useEffect, useState } from "react";
import { getWidth } from "../../../../../common/getWidth";
import shadow from "../../../../../images/shadow.png";

const Backdrop = ({ imagePath, title, score, votes }) => {
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
      <Shadow src={shadow} />
      <Wrapper>
        <Content>
          <Title>{title}</Title>
          <Review>
            <ReviewIcon />
            <Score>{score}</Score>
            <Scale>/10</Scale>
            {viewportWidth <= 700 ? <Votes>{votes} votes</Votes> : ""}
          </Review>
          {viewportWidth > 700 ? <Votes>{votes} votes</Votes> : ""}
        </Content>
        <BackdropPoster
          src={`https://image.tmdb.org/t/p/original/${imagePath}`}
        />
      </Wrapper>
    </Header>
  );
};

export default Backdrop;
