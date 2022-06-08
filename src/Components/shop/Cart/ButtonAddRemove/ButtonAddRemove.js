import React from 'react';
import Box from '@mui/material/Box';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const ButtonAddRemove = ( {quantity , handleAddItem ,handleRemoveItem }) => {
  return (
    <div className='btn-remove'>
        {quantity !==0 ?(
            <Box>
            <RemoveIcon aria-hidden='true' 
            onClick={handleRemoveItem}
            />
            <span>{quantity}</span>
            <AddIcon aria-hidden='true' 
            onClick={handleAddItem}
            />
            </Box>
            
        ) : (
          <Box onClick={handleAddItem}>
            <span>ADD</span>
            <AddIcon aria-hidden='true' 
            />
          </Box>

        )}
    </div>
  )
}
