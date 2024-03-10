import styled from "styled-components";

const IdSC = styled.p`
  font-size: 10px;
  display: none;
`;

const ContainerSC = styled.li`
  padding: 6px;

  border: 1px solid #000;

  min-width: 100px;
  min-height: 100px;

  &:hover {
    ${IdSC} {
      display: block;
    }
  }
`;

const TitleSC = styled.p`
  font-size: 20px;
`;

const SubtitleSC = styled.p`
  font-size: 10px;
`;

const PriceSC = styled.p`
  text-align: right;
  font-size: 18px;
  color: cadetblue;
`;

export const styles = { ContainerSC, TitleSC, SubtitleSC, PriceSC, IdSC };
