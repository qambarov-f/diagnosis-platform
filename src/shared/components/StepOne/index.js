import React, { useState } from 'react';
import { Container, Input, Label } from './CheckBox.styled';


const CheckboxList = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
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
    { id: 10, label: "Checkbox 10" },
    { id: 11, label: "Checkbox 11" },
    { id: 12, label: "Checkbox 12" },
    { id: 13, label: "Checkbox 13" },
    { id: 14, label: "Checkbox 14" },
    { id: 15, label: "Checkbox 15" },
  ];

  return (
    <Container>
      {checkboxData.map((item) => (
        <Label key={item.id}>
          <Input
            type="checkbox"
            name={item.id}
            checked={checkedItems[item.id] || false}
            onChange={handleChange}
          />
          {item.label}
        </Label>
      ))}
    </Container>
  );
};
  
export default CheckboxList;