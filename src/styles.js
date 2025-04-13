import styled from "styled-components";
import {
  FaRegTrashCan,
  FaRocket,
  FaRegFaceGrinBeamSweat,
} from "react-icons/fa6";

export const Container = styled.div`
  width: 60%;
  text-align: center;
  border-radius: 50px;
  opacity: 0.9;
  background-color: #b8aa95;
  margin: 15px 0px 0px 250px;
  padding: 8px 5px;
`;

export const Button = styled.button`
  background-color: #f2f2f2;
  width: 150px;
  height: 42px;
  border-radius: 10px;
  font-size: 17px;
  margin: 10px 0px 0px 20px;
  line-height: 2px;
  font-weight: bold;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #8fe93c;
    transform: scale(1.2);
    font-weight: bold;
    border: 1px solid #001012;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Header = styled.h1`
  color: #fff;
  font-size: 40px;
`;

export const Input = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 20px;
  outline: none;
`;

export const ListaDeTarefa = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 170px;
  justify-content: center;

  ul {
    padding: 0;
    text-align: center;
    color: #fff;
    font-style: italic;
  }
`;

export const ListaItens = styled.div`
  background: ${(props) => (props.estaFinalizada ? "#9aedb5" : "#dbd1b3")};

  width: 500px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;

  li {
    list-style: none;
    font-size: 20px;
    font-weight: 600;
    font-style: italic;
    color: #000;
  }
`;

export const Lixeira = styled(FaRegTrashCan)`
  cursor: pointer;
  font-size: 25px;
  color: #bf0a0d;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Foguete = styled(FaRocket)`
  cursor: pointer;
  font-size: 25px;
  color: #336666;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Emoj = styled(FaRegFaceGrinBeamSweat)`
  cursor: pointer;
  font-size: 30px;
  color: #000;
`;
