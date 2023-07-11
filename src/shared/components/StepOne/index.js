import React, { useState } from 'react';
import { Container, Input, Label } from './CheckBox.styled';
import './styled.css'
import { GrCheckbox, GrCheckboxSelected } from 'react-icons/gr';

const CheckboxList = () => {

const [isChecked, setIsFirstIcon] = useState(true);
const handleClick = () => {
    setIsFirstIcon(!isChecked);
}

  // const [checkedItems, setCheckedItems] = useState({});
  // const handleChange = (event) => {
  //   setCheckedItems({
  //     ...checkedItems,
  //     [event.target.name]: event.target.checked,
  //   });
  // };

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
        
        <Label onClick={handleClick}   key={item.id}>
        
        {isChecked? ( <GrCheckboxSelected key={item.id}  /> ) :  ( <GrCheckbox key={item.id} />) }
          {item.label}

        </Label>
      ))}
    </Container>
  );
};
  
export default CheckboxList;



// {/* <Input
//             type="checkbox"
//             name={item.id}
//             checked={checkedItems[item.id] || false}
//             onChange={handleChange}
//             className='checkbox'
//           /> */}