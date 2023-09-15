import {
  Tile,
  Portrait,
  Content,
  Name,
  PersonalInfo,
  Term,
  Info,
  Description,
  MobileDescription,
  InfoWrapper,
} from "./styled";
import { useEffect, useState } from "react";
import { getWidth } from "../getWidth";

const PageTile = ({ image, name, description, dateOfBirth, placeOfBirth }) => {
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
    <Tile>
      <Portrait src={`https://image.tmdb.org/t/p/original/${image}`} />
      <Content>
        <Name>{name}</Name>
        <PersonalInfo>
          <InfoWrapper>
            <Term>
              {viewportWidth > 670 ? "Date of birth:" : "Birth:"} &nbsp;{" "}
            </Term>
            <Info>{dateOfBirth} </Info>
          </InfoWrapper>
          <InfoWrapper>
            <Term>Place of birth: &nbsp; </Term>
            <Info>{placeOfBirth}</Info>
          </InfoWrapper>
        </PersonalInfo>
        {viewportWidth >= 700 ? <Description>{description}</Description> : null}
      </Content>
      {viewportWidth <= 700 ? (
        <MobileDescription>{description}</MobileDescription>
      ) : null}
    </Tile>
  );
};

export default PageTile;
