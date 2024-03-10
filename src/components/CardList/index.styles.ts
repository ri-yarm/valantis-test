import styled from "styled-components";

const ContainerSC = styled.div`
  flex-grow: 1;
`;

const ListSC = styled.ul`
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  width: 100%;
  align-items: center;

  list-style-type: none;
`;

export const styles = { ContainerSC, ListSC };
