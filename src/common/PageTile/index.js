import {
  Tile,
  Portrait,
  PersonContent,
  MovieContent,
  Name,
  PersonalInfo,
  Term,
  Info,
  Description,
  MobileDescription,
  InfoWrapper,
  Year,
  Genres,
  Rating,
  RatingScore,
  VoteCount,
  RatingScale,
} from "./styled";

import { formatDate } from "../formatDate";
import { TileTags, TileRatingIcon } from "../Tile/styled";
import icon from "../../images/shape-star.png";
import { useEffect, useState } from "react";
import { getWidth } from "../getWidth";

const PageTile = ({
  isPersonTile,
  image,
  name,
  description,
  dateOfBirth,
  placeOfBirth,
  poster,
  production,
  release_date,
  genreList,
  score,
  votes,
}) => {
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

  if (isPersonTile) {
    return (
      <Tile>
        <Portrait src={`https://image.tmdb.org/t/p/original/${image}`} />
        <PersonContent>
          <Name>{name}</Name>
          <PersonalInfo>
            <InfoWrapper>
              <Term>
                {viewportWidth > 670 ? "Date of birth:" : "Birth:"} &nbsp;{" "}
              </Term>
              <Info>{formatDate(dateOfBirth)} </Info>
            </InfoWrapper>
            <InfoWrapper>
              <Term>Place of birth: &nbsp; </Term>
              <Info>{placeOfBirth}</Info>
            </InfoWrapper>
          </PersonalInfo>
          {viewportWidth >= 700 ? (
            <Description>{description}</Description>
          ) : null}
        </PersonContent>
        {viewportWidth <= 700 ? (
          <MobileDescription>{description}</MobileDescription>
        ) : null}
      </Tile>
    );
  }
  const [countryList] = production;
  const { iso_3166_1: countriesShort, name: countries } = countryList;
  return (
    <Tile>
      <Portrait src={`https://image.tmdb.org/t/p/original/${poster}`} />
      <MovieContent>
        <Name>{name}</Name>
        <Year>{release_date.substring(0, 4)}</Year>
        <PersonalInfo>
          <InfoWrapper>
            {viewportWidth > 670 ? <Term>Production: &nbsp;</Term> : ""}
            <Info>{viewportWidth > 670 ? countries : countriesShort}</Info>
          </InfoWrapper>
          <InfoWrapper>
            {viewportWidth > 670 ? <Term>Release date: &nbsp;</Term> : ""}
            <Info>{formatDate(release_date)} </Info>
          </InfoWrapper>
        </PersonalInfo>
        {genreList ? (
          <Genres>
            {genreList.map((genre) => (
              <TileTags key={genre.id}>{genre.name}</TileTags>
            ))}
          </Genres>
        ) : (
          ""
        )}
        {votes ? (
          <Rating>
            <TileRatingIcon src={icon} alt="" />
            <RatingScore>{score.toFixed(1)}</RatingScore>
            <RatingScale>/10</RatingScale>
            <VoteCount>{`${votes} votes`} </VoteCount>
          </Rating>
        ) : (
          <VoteCount>No votes yet</VoteCount>
        )}
        {viewportWidth >= 700 ? <Description>{description}</Description> : null}
      </MovieContent>
      {viewportWidth <= 700 ? (
        <MobileDescription>{description}</MobileDescription>
      ) : null}
    </Tile>
  );
};

export default PageTile;
