import styled from "styled-components";
import starsBg from "../../assets/background-stars.svg";
import wikipediaArrow from "../../assets/icon-source.svg";

export const StructureContainer = styled.div`
  background-image: url(${starsBg});
  background-color: #070724;
  padding-bottom: 2rem;
  min-height: 100vh;
  margin: 0 auto;
`;

export const PlanetImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  img {
    width: 250px;
    height: 250px;
  }
`;

export const PlanetDetails = styled.div``;

export const PlanetDescription = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: white;
  padding: 0 2rem;
  margin-top: 5rem;
  letter-spacing: 0.5px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1150px) {
    flex-direction: column;
    margin-left: 20rem;
  }

  h3 {
    color: white;
    font-family: "Antonio", sans-serif;
    font-size: 40px;
    font-weight: 500;
    text-align: center;
    @media screen and (min-width: 768px) {
      text-align: left;
    }
  }

  p {
    margin-top: 1rem;
    font-family: "League Spartan", sans-serif;
    line-height: 22px;
    text-align: center;
    opacity: 0.7;

    @media screen and (min-width: 768px) {
      width: 450px;
      text-align: left;
    }
  }
`;

export const Source = styled.div`
  opacity: 0.7;
  font-family: "League Spartan", sans-serif;
  letter-spacing: 0.5px;
  margin-top: 2rem;

  a {
    color: white;
    position: relative;
    margin-left: 0.5rem;
  }

  a::after {
    content: "";
    position: absolute;
    background-image: url(${wikipediaArrow});
    background-repeat: no-repeat;
    width: 40px;
    height: 40px;
    margin-left: 5px;
    top: 1px;
  }
`;

export const PlanetFigures = styled.div`
  color: white;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Figure = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(151, 151, 151, 0.3);
  padding: 1rem 2rem;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: 300px;
    padding: 1.5rem 1rem;
  }

  p {
    font-size: 11px;
    font-weight: bold;
    font-family: "League Spartan", sans-serif;
    letter-spacing: 0.73px;
    opacity: 0.5;
  }

  h3 {
    font-size: 20px;
    font-family: "Antonio", sans-serif;

    @media screen and (min-width: 768px) {
      margin-top: 1rem;
      font-size: 24px;
    }
  }
`;

export const PlanetFactsLinks = styled.div`
  width: 100%;
`;

export const DetailsWrapper = styled.div`
  @media screen and (min-width: 1150px) {
    display: flex;
    justify-content: center;
  }
`;
