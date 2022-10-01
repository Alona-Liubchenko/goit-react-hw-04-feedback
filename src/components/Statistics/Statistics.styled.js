import styled from 'styled-components';

export const StatList = styled.ul`
  display: flex;
  gap: 20px;

  justify-content: center;
`;
export const StatItem = styled.li`
  width: 100px;
  height: 30px;
  padding: 5px;
  /* border: 1px solid #f3d8d8; */
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: wheat;
  background: #1413134d;
`;
export const StatData = styled.p`
  font-size: 28px;
  font-weight: 600;
  /* width: 100px;
  height: 30px; */
  padding: 5px;
  /* border: 1px solid #f3d8d8; */
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 55%) 10px 10px 5px 0px;
  align-items: center;
  text-align: center;
  background: #1413134d;
`;
