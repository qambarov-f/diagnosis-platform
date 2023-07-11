import React, { useState } from 'react';
import { Container, Label } from './CheckBox.styled';
import './styled.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleChange = (itemId) => {
    if (checkedItems.includes(itemId)) {
      setCheckedItems(checkedItems.filter((item) => item !== itemId));
    } else {
      setCheckedItems([...checkedItems, itemId]);
    }
  };

  const checkboxData = [
    { id: 1, label: "Checkbox 1" },
    { id: 2, label: "Checkbox 2" },
    { id: 3, label: "Checkbox 3" },
    { id: 4, label: "Checkbox 4" },
    { id: 5, label: "Checkbox 5" },
    { id: 6, label: "Checkbox 6" },
    { id: 7, label: "Checkbox 7" },
    { id: 8, label: "Checkbox 8" },
    { id: 9, label: "Checkbox 9" },
  ];

  return (
    <Container>
      {checkboxData.map((item) => (
        <Label
          key={item.id}
          onClick={() => handleChange(item.id)}
        >
          {checkedItems.includes(item.id) ? (
            <GrCheckboxSelected />
          ) : (
            <GrCheckbox />
          )}
          {item.label}
        </Label>
      ))}
    </Container>
  );
};

export default CheckboxList;
