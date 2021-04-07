import styled from 'styled-components';

export const HomeButton = styled.button`
  height: fit-content;
  width: fit-content;
  border-radius: 4px;
  margin: 15px 10px;
  color: white;
  padding: 8px 15px;
  font-size: 18px;
  display: block;
  background-color: #ff005d;
  border: none;
`;

export const Player = styled.iframe`
  height: 423px;
  width: 100%;
  border-radius: 10px;
  margin: 15px 0;
  padding: 5px;
  display: block;
  background-color: #00b1bf;
`;

export const PlayerGrid = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const VideoWrapper = styled.section`
  display: block;
  max-width: 60%;
`;

export const PlayerTitle = styled.h2`
  font-weight: normal;
  font-size: 24px;
  margin-bottom: 0;
  color: #0085b6;
`;

export const PlayerInfo = styled.span`
  font-weight: normal;
  font-size: 18px;
  margin: 0 5px;
  display: inline-flex;
`;

export const PlayerDesc = styled.p`
  font-weight: normal;
  font-size: 20px;
  margin: 5px 0;
  display: block;
  width: 100%;
  border-top: 2px solid #fedf03;
`;

export const RelatedVideoWrapper = styled.section`
  display: block;
  margin: 0 auto;
  width: 40%;
  margin-left: 20px;
  max-height: 630px;
  overflow-x: overlay;
`;
