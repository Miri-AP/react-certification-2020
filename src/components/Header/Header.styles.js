import styled, { keyframes } from 'styled-components';

export const Header = styled.header`
  z-index: 500;
  width: 100vw;
  min-height: 60px;
  background: #0085b6;
  background: linear-gradient(90deg, #0085b6 0%, #00b1bf 80%);
  background: -webkit-linear-gradient(90deg, #0085b6 0%, #00b1bf 80%);
  background: -moz-linear-gradient(90deg, #0085b6 0%, #00b1bf 80%);
  padding: 15px 18px;
  color: #fff;
  display: flex;
  justify-content: space-between;
`;

export const HeaderWrapper = styled.section`
  display: flex;
`;

export const Menu = styled.button`
  background: url(${(props) => props.img}) no-repeat;
  width: 35px;
  height: 35px;
  display: block;
  background-size: 35px;
  margin-right: 15px;
  border: none;
  cursor: not-allowed;
`;

export const Search = styled.input`
  padding: 0.5em;
  margin: 0.2em 0;
  background: white;
  border: none;
  border-radius: 3px;
  height: 30px;
`;

export const HeaderToggleWrapper = styled.div`
  display: inline-flex;
  margin-right: 25px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

export const HeaderToggleLabel = styled.label`
  margin-left: 8px;
  font-size: 14px;
  line-height: 30px;
`;

export const LoginMenu = styled.button`
  background: url(${(props) => props.img}) no-repeat;
  width: 35px;
  height: 35px;
  display: block;
  background-size: 35px;
  border: none;
  cursor: not-allowed;
`;

const off = keyframes`
{
  0% {
    transform: translateX(80px);
    width: 26px;
  }

  50% {
    width: 45px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(0px);
    width: 26px;
  }
}
`;

const on = keyframes`
{
  0% {
    transform: translateX(0px);
    width: 26px;
  }

  50% {
    width: 45px;
    border-radius: 25px;
  }

  100% {
    transform: translateX(80px);
    width: 26px;
  }
}
`;

export const HeaderToggle = styled.input`
  margin-right: 1rem;
  position: relative;
  width: 80px;
  height: 30px;
  margin: 0px;
  appearance: none;
  -webkit-appearance: none;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 25px;
  box-shadow: inset 0px 0px 2px rgba(255, 255, 255, 0.7);
  transition: background-image 0.7s ease-in-out;
  outline: none;
  cursor: pointer;
  overflow: hidden;

  &:checked {
    background-size: cover;
    transition: background-image 1s ease-in-out;
  }

  &:after {
    content: '';
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background-color: #fedf03;
    position: absolute;
    left: 3px;
    top: 2px;
    transform: translateX(0px);
    animation: ${off} 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: inset 5px -5px 4px rgba(53, 53, 53, 0.3);
  }

  &:checked:after {
    background-color: #ff005d;
    animation: ${on} 0.7s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    box-shadow: inset -5px -5px 4px rgba(53, 53, 53, 0.3);
    left: -29px;
  }
`;
