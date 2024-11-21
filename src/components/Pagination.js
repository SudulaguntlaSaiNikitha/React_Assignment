
import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';

const Pagination = ({ total, currentPage, onChange }) => {
  const totalPages = Math.ceil(total / 10);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <MuiPagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onChange(page)}
        color="primary"
      />
    </Box>
  );
};

export default Pagination;

