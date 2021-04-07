import styled from 'styled-components';

export const VideoCardWrapper = styled.div`
  height: fit-content;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: auto;
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
    rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  border-radius: 10px;
  margin-bottom: 30px;

  &:hover {
    box-shadow: rgba(254, 223, 3, 0.12) 0px 2px 4px 0px,
      rgba(254, 223, 3) 0px 2px 16px 0px;
  }
  @media screen and (max-width: 750px) {
    width: 95%;
    max-width: 340px;
    height: 365px;
  }
`;

export const VideoTitle = styled.p`
  font-size: 18px;
  margin: 10px 0 8px;
  font-weight: 500;
`;

export const VideoChannel = styled.p`
  font-size: 11px;
  font-weight: bold;
  display: inline-flex;
  display: flex;
  justify-content: flex-end;
  margin: 0;
`;

export const UploadDate = styled.span`
  font-size: 11px;
  font-weight: normal;
  margin-left: 5px;
`;

export const Thumbnail = styled.div`
  background: url(${(props) => props.img}) no-repeat;
  height: 150px;
  display: block;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
`;

export const VideoCardInfo = styled.div`
  margin: 10px;
`;

export const VideoDescription = styled.p`
  font-size: 14px;
  margin-top: 8px;
`;
