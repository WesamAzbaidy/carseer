import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Container, Grid2, Typography, CircularProgress, Divider, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { GetAllMakes } from '../../Redux/CarManufacturers/CarManufacturersAction';
import { GetModelsForMakeIdYear } from '../../Redux/ModelsCar/ModelsCarAction';
import HomeTable from './tableData/CarsSelectionTable';

const CarsSelection = () => {
  const [year, setYear] = useState(dayjs());
  const makesList = useSelector((state) => state.CarManufacturers.data.Results);
  const [selectedMake, setSelectedMake] = useState('');
  const loading = false;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllMakes());
  }, [])
  const handleYearChange = (newValue) => {
    if (newValue && dayjs(newValue).isValid()) {
      setYear(dayjs(newValue));
    }
  };

  const handleMakeChange = (event) => {
    setSelectedMake(event.target.value);
  }
  const handleTab = () => {
    dispatch(GetModelsForMakeIdYear(selectedMake, year.year()));
    console.log("Selected Year:", year.year(), "Selected Make ID:", selectedMake);
  }
  const isMakesListLoaded = Array.isArray(makesList) && makesList.length > 0;
  return (
    <div>
      <>
        <Container>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 4, backgroundColor: '#EFEFEF' }}>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <Typography variant="h4">
                  Cars Selection
                </Typography>
                <Divider />
              </Grid2>

              <Grid2 size={6} sx={{ xs: 12, sm: 12, md: 'auto' }} >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    views={['year']}
                    label="Select Year"
                    value={year}
                    maxDate={dayjs()}
                    onChange={handleYearChange}
                    renderInput={(params) => <Button {...params} fullWidth />}
                  />
                </LocalizationProvider>
              </Grid2>

              <Grid2 size={6} sx={{ xs: 12, sm: 12, md: 'auto' }}>
                <FormControl fullWidth>
                  <InputLabel>Choose Make</InputLabel>
                  <Select
                    value={selectedMake}
                    onChange={handleMakeChange}
                    label="Choose Make"
                    fullWidth
                  >
                    {isMakesListLoaded ? (
                      makesList.map((make) => (
                        <MenuItem key={make.Make_ID} value={make.Make_ID}>
                          {make.Make_Name}
                        </MenuItem>
                      ))
                    ) : (
                      <MenuItem disabled>No makes available</MenuItem>
                    )}
                  </Select>
                </FormControl>
              </Grid2>


              <Grid2 size={12}>
                <Button
                  className="nxt-btn-12-grid"
                  variant="contained"
                  onClick={() => handleTab()}
                  endIcon={loading && <CircularProgress size={20} color="inherit" />}
                >
                  إحضار
                </Button>
              </Grid2>
            </Grid2>
          </Card>
        </Container>

        <HomeTable year={year.year()} />
      </>
    </div>
  );
};

export default CarsSelection;
