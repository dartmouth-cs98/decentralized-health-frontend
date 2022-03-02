import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import { useGetFileInfoQuery } from './fileContractApi';
import FileModal from '../common/FileModal';
import Error from '../common/Error';

const File = ({
  fileHash, sortTag, query, fileView, patientOwner,
}) => {
  const { data, error } = useGetFileInfoQuery({ fileHash });
  const [open, setOpen] = useState(false);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => {
    setOpen(false);
  };

  const search = (searchTerm, record) => {
    if (searchTerm) {
      const normalizeQuery = searchTerm.toLowerCase();
      return (
        (searchTerm === '')
        || (record.file_name.toLowerCase().includes(normalizeQuery))
        || record.uploader_name.toLowerCase().includes(normalizeQuery)
      );
    }
    return true;
  };

  return (
    <>
      {
          (data && (data.record_type === sortTag || sortTag === '') && search(query, data) && (
            <>
              <TableRow
                hover
                onClick={handleOpen}
                sx={{ border: 0, bgcolor: '#f0f8ff' }}
              >
                <TableCell sx={{
                  border: 'none',
                  display: 'flex',
                }}
                >
                  <FolderOpenIcon sx={{ mr: 2 }} />
                  {data.file_name}
                </TableCell>
                <TableCell sx={{
                  border: 'none',
                }}
                >
                  {data.record_type}
                </TableCell>
                <TableCell sx={{
                  border: 'none',
                }}
                >{data.uploader_name}
                </TableCell>
                <TableCell sx={{
                  border: 'none',
                }}
                >{data.date_uploaded ?? ''}
                </TableCell>
                {fileView === 'admin' && patientOwner
                && (
                <TableCell sx={{
                  border: 'none',
                }}
                >{patientOwner ?? ''}
                </TableCell>
                )}
              </TableRow>
              <FileModal handleOpen={handleOpen} handleClose={handleClose} open={open} data={data} />
            </>
          ))
          || (error && <TableRow><TableCell><Error message={error} /></TableCell></TableRow>)
        }
    </>
  );
};

export default File;
