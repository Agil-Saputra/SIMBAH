import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


export default function Dropdown({placeholder, menuItems, ...props}) {
  return (
    <div>
        <Select
          displayEmpty
          input={<OutlinedInput />}
		  sx={{width: '100%',
		  borderRadius: '8px',
		  '& .MuiSelect-select': {
			padding: '.7rem',
			fontSize: '1rem',
			border : '1px solid black',
			borderRadius: '8px'
		  }}}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <span>{placeholder}</span>;
            }
            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ 'aria-label': 'Without label' }}
		  {...props}
        >
          {menuItems.map((items) => (
            <MenuItem
              key={items}
              value={items}
			  sx={{borderBottom: '1px solid rgba(0,0,0,0.6'}}
            >
              {items}
            </MenuItem>
          ))}
        </Select>
    </div>
  );
}