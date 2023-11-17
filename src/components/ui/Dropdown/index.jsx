import { useState } from 'react';
import {
  DropdownButton,
  DropdownContainer,
  DropdownItem,
  DropdownLabel,
  DropdownList,
} from './styles';

// const COUNTRIES = [
//   {
//     id: 1,
//     name: 'Россия',
//   },
//   {
//     id: 2,
//     name: 'ОАЭ',
//   },
//   {
//     id: 3,
//     name: 'Монголия',
//   },
// ];

export function Dropdown({ label = 'label', items = [] }) {
  const [isOpen, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  function open() {
    setOpen(true);
  }

  function close() {
    setOpen(false);
  }

  function onChange(item) {
    setSelected(item);
    close();
  }

  return (
    <DropdownContainer>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownButton onClick={open}>
        {selected.text || 'Nothing selected..'}
      </DropdownButton>
      <DropdownList open={isOpen}>
        {items.map((joke) => (
          <DropdownItem
            onClick={() => {
              onChange(joke);
            }}
            active={selected.id === joke.id}
            key={joke.id}
          >
            {joke.text}
          </DropdownItem>
        ))}
      </DropdownList>
    </DropdownContainer>
  );
}
