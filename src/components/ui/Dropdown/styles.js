import styled from 'styled-components';

export const DropdownContainer = styled.div`
  padding: 12px 16px;
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const DropdownButton = styled.button`
  padding: 12px 16px;
  border: 1px solid #e3e8ec;
  background-color: transparent;
  color: black;
  text-align: left;
`;

export const DropdownList = styled.ul`
  display: ${(props) => {
    return props.open ? 'block' : 'none';
  }};
  position: absolute;
  left: 0;
  top: 100%;
  width: 100%;
  background-color: white;
  border: 1px solid #e3e8ec;
  border-radius: 0 0 8px 8px;
  z-index: 1;
`;

export const DropdownItem = styled.li`
  padding: 16px 16px;
  border-bottom: 1px solid #e3e8ec;
  font-size: 16px;
  background-color: ${(props) => (props.active ? '#30D7BA' : 'transparent')};

  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
`;

export const DropdownLabel = styled.label`
  font-size: 24px;
  text-align: left;
  color: #868b95;
`;
