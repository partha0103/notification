import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';

const DropDown = ({menuitems}) => (
        <div>
            {
                menuitems.map(item => (
                    <MenuItem value={item.name || item}>
                        {item.name || item}
                    </MenuItem>
                ))
            }
        </div>
)

export default DropDown;