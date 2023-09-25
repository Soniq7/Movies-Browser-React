import {
  Content,
  Header,
  Poster,
  Title,
  Review,
  Score,
  Votes,
  Scale,
  Shadow,
  ReviewIcon,
  Wrapper,
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
      <Shadow src={shadow} />
      <Wrapper>
        <Poster src={`https://image.tmdb.org/t/p/original/${image}`} />
        {image && (
          <Content>
            <span>
              <Title>{name}</Title>
              <Review>
                <ReviewIcon />
                <Score>{score}</Score>
                <Scale>/10</Scale>
                {viewportWidth <= 700 ? <Votes>{votes} votes</Votes> : ""}
              </Review>
              {viewportWidth > 700 ? <Votes>{votes} votes</Votes> : ""}
            </span>
          </Content>
        )}
      </Wrapper>
    </Header>
  );
};

export default Backdrop;
