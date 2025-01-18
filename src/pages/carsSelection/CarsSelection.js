import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button,
  Card,
  Container,
  Grid2,
  Typography,
  CircularProgress,
  Divider,
  TextField,
  Autocomplete,
} from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { GetAllMakes } from '../../Redux/CarManufacturers/CarManufacturersAction';
import { GetModelsForMakeIdYear, resetModelsData } from '../../Redux/ModelsCar/ModelsCarAction';
import HomeTable from './tableData/CarsSelectionTable';
import { GetVehicleTypesForMake, resetVehicleTypes } from '../../Redux/VehicleTypes/VehicleTypesAction';

const CarsSelection = () => {
  const [year, setYear] = useState(dayjs());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedVehicleType, setSelectedVehicleType] = useState('');
  const makesList = useSelector((state) => state.CarManufacturers?.data?.data);
  const vehicleTypes = useSelector((state) => state.VehicleTypes?.vehicleTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllMakes());
  }, [dispatch]);

  const handleYearChange = (newValue) => {
    dispatch(resetModelsData());
    if (newValue && dayjs(newValue).isValid()) {
      setYear(dayjs(newValue));
    }
  };

  const handleMakeChange = (event, newValue) => {
    setSelectedVehicleType('');
    dispatch(resetModelsData());
    if (newValue === null) {
      dispatch(resetVehicleTypes());
      setSelectedMake(newValue ? newValue.makeID : '');
      return;
    } else {
      setSelectedMake(newValue ? newValue.makeID : '');
      dispatch(GetVehicleTypesForMake(newValue.makeID));
    }
  };

  const handleTab = () => {
    dispatch(GetModelsForMakeIdYear(selectedMake, year.year(), selectedVehicleType));
  };

  const handleSearchChange = (event, newInputValue) => {
    setSearchTerm(newInputValue);
    dispatch(GetAllMakes(10, newInputValue));
    dispatch(resetModelsData());
  };

  const isMakesListLoaded = Array.isArray(makesList) && makesList.length > 0;
  const filteredMakesList = isMakesListLoaded
    ? makesList.filter((make) =>
      make.makeName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : [];

  return (
    <div>
      <Container>
        <Card sx={{ display: 'flex', alignItems: 'center', p: 4, backgroundColor: '#EFEFEF' }}>
          <Grid2 container spacing={2}>
            <Grid2 size={12}>
              <Typography variant="h4">Cars Selection</Typography>
              <Divider />
            </Grid2>

            <Grid2 size={12} sx={{ xs: 12, sm: 12, md: 'auto' }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                  views={['year']}
                  label="Select Year"
                  value={year}
                  maxDate={dayjs()}
                  onChange={handleYearChange}
                  renderInput={(params) => <TextField {...params} fullWidth />}
                />
              </LocalizationProvider>
            </Grid2>

            <Grid2 size={6} sx={{ xs: 12, sm: 12, md: 'auto' }}>
              <Autocomplete
                options={filteredMakesList}
                getOptionLabel={(option) => option.makeName || ''}
                value={filteredMakesList.find((make) => make.makeID === selectedMake) || null}
                onChange={handleMakeChange}
                onInputChange={handleSearchChange}
                renderInput={(params) => (
                  <TextField {...params} label="Choose Make" fullWidth />
                )}
                noOptionsText="No makes available"
              />
            </Grid2>
            {Object.keys(vehicleTypes).length !== 0 && (
              <Grid2 size={6} sx={{ xs: 12, sm: 12, md: 'auto' }}>
                <Autocomplete
                  options={vehicleTypes}
                  getOptionLabel={(option) => option.vehicleTypeName || ''}
                  value={vehicleTypes.find((type) => type.vehicleTypeName === selectedVehicleType) || null}
                  onChange={(event, newValue) => {
                    setSelectedVehicleType(newValue ? newValue.vehicleTypeName : '');
                  }}
                  renderInput={(params) => (
                    <TextField {...params} label="Choose Vehicle Type" fullWidth />
                  )}
                  noOptionsText="No vehicle types available"
                />
              </Grid2>
            )}



            <Grid2 size={12}>
              <Button
                className="nxt-btn-12-grid"
                variant="contained"
                onClick={handleTab}
              >
                Search
              </Button>
            </Grid2>
          </Grid2>
        </Card>
      </Container>

      <HomeTable
        year={year.year()}
        onPageChange={(newPage, newPageSize) => {
          dispatch(GetModelsForMakeIdYear(selectedMake, year.year(), selectedVehicleType, newPage, newPageSize));
        }}
      />

    </div>
  );
};

export default CarsSelection;
