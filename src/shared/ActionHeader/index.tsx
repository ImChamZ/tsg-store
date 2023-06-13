import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { debounce } from '../../utils/Debounce';
import { useCallback } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

type SxBox = {
  display: string;
  justifyContent: string;
  padding: string;
  minWidth: string;
};

type ActionHeader = {
  searchFunc: (text: string) => AnyAction;
};

const sxBoxStyles: SxBox = {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 0 16px 0',
  minWidth: '300px',
};

const ActionHeader: React.FC<ActionHeader> = ({ searchFunc }) => {
  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(
      (e: React.ChangeEvent<HTMLInputElement>) =>
        dispatch(searchFunc(e.target.value)),
      500
    ),
    []
  );

  return (
    <Box component="form" sx={sxBoxStyles} noValidate autoComplete="off">
      <TextField
        id="standard-basic"
        label="Search"
        variant="standard"
        onChange={handleSearch}
      />
    </Box>
  );
};

export default ActionHeader;
