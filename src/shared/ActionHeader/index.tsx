import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from '../../utils/Debounce';
import { useCallback, useEffect, useState } from 'react';
import { AnyAction } from '@reduxjs/toolkit';
import { searchActionMapper } from './constants';
import { AppState } from '../../store/reducers/combineReducers';

type SxBox = {
  display: string;
  justifyContent: string;
  height: string;
  marginTop: string;
};

type ActionHeader = {
  searchFunc?: (text: string) => AnyAction;
};

const sxBoxStyles: SxBox = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '72px',
  height: '64px',
};

const ActionHeader: React.FC = () => {
  const dispatch = useDispatch();
  const { searchText, currentLocation } = useSelector(
    (state: AppState) => state.app
  );
  const [searchAction, setSearchAction] = useState<string>(
    searchActionMapper[currentLocation]
  );

  useEffect(() => {
    setSearchAction(searchActionMapper[currentLocation]);
  }, [currentLocation]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      if (searchText === event.target.value) return;
      dispatch({
        type: `${searchActionMapper[currentLocation]}/pendingSearch`,
        payload: event.target.value,
      });
    }, 500),
    [searchText, currentLocation]
  );

  return (
    <Box sx={sxBoxStyles}>
      {searchAction && (
        <TextField
          id="search"
          label="Search"
          variant="standard"
          autoComplete="off"
          onKeyUp={handleSearch}
        />
      )}
    </Box>
  );
};

export default ActionHeader;
