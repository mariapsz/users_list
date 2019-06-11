import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  border: #F6FAFF solid 1px;
  padding: 3%;
`;

export const ListRow = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 1%;
    border-bottom: #F6FAFF solid 1px;
`;

export const ListHeader = styled(ListRow)`
    background: #F6FAFF;
`;

export const ListCell = styled.div`
    text-align: left;
    width: 100%;
`;