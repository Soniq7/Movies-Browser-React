import {
  StyledTile,
  Image,
  PersonContent,
  MovieContent,
  Name,
  InfoList,
  Term,
  Info,
  Description,
  MobileDescription,
  InfoListWrapper,
  Year,
  GenreList,
  Rating,
  Score,
  Votes,
  RatingScale,
} from "./styled";
import { GenreTag, RatingIcon } from "../defaultTileStyles";

import { formatDate } from "../../formatDate";
import icon from "../../../images/shape-star.png";
import { useEffect, useState } from "react";
import { getWidth } from "../../getWidth";
import ImagePlaceholder from "../../ImagePlaceholder";

const PageTile = ({
  isPersonTile,
  image,
  name,
  description,
  dateOfBirth,
  placeOfBirth,
  production,
  releaseDate,
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
      <StyledTile>
        {image ? (
          <Image src={`https://image.tmdb.org/t/p/original/${image}`} />
        ) : (
          <ImagePlaceholder isPerson={true} isPageTile={true} />
        )}
        <PersonContent>
          <Name>{name}</Name>
          <InfoList>
            <InfoListWrapper>
              <Term>
                {viewportWidth > 670 ? "Date of birth:" : "Birth:"} &nbsp;{" "}
              </Term>
              <Info>{dateOfBirth ? formatDate(dateOfBirth) : "-"} </Info>
            </InfoListWrapper>
            <InfoListWrapper>
              <Term>Place of birth: &nbsp; </Term>
              <Info>{placeOfBirth ? placeOfBirth : "-"}</Info>
            </InfoListWrapper>
          </InfoList>
          <Description>{description}</Description>
        </PersonContent>
        <MobileDescription>{description}</MobileDescription>
      </StyledTile>
    );
  }

  let countryList = [];

  if (production.length > 0) {
    [countryList] = production;
  }

  const countriesShort = countryList?.iso_3166_1 || "";
  const countries = countryList?.name || "";

  return (
    <StyledTile>
      {image ? (
        <Image src={`https://image.tmdb.org/t/p/original/${image}`} />
      ) : (
        <ImagePlaceholder />
      )}
      <MovieContent>
        <Name>{name}</Name>
        <Year>{releaseDate.substring(0, 4)}</Year>
        <InfoList>
          {production !== "" ? (
            <InfoListWrapper>
              {viewportWidth > 670 ? <Term>Production: &nbsp;</Term> : ""}
              <Info>{viewportWidth > 670 ? countries : countriesShort}</Info>
            </InfoListWrapper>
          ) : (
            ""
          )}
          <InfoListWrapper>
            {viewportWidth > 670 ? <Term>Release date: &nbsp;</Term> : ""}
            <Info>{formatDate(releaseDate)} </Info>
          </InfoListWrapper>
        </InfoList>
        {genreList ? (
          <GenreList>
            {genreList.map((genre) => (
              <GenreTag key={genre.id}>{genre.name}</GenreTag>
            ))}
          </GenreList>
        ) : (
          ""
        )}
        {votes ? (
          <Rating>
            <RatingIcon src={icon} alt="" />
            <Score>{score}</Score>
            <RatingScale>/10</RatingScale>
            <Votes>{`${votes} votes`} </Votes>
          </Rating>
        ) : (
          <Votes>No votes yet</Votes>
        )}
        <Description>{description}</Description>
      </MovieContent>
      <MobileDescription>{description}</MobileDescription>
    </StyledTile>
  );
};

export default PageTile;
