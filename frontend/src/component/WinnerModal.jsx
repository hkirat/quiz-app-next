import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
const WinnerModal = ({ user, onClose }) => {
  return (
    <div>
        <Modal open={!!user} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius:'10px',
          p: 2,
        }}
      >
        <div className='flex justify-center items-center flex-col'>
        <h2>{user?.name}</h2>
        <p>Points: {user?.points}</p>
        <span role='img' aria-label='Winner Emoji'>
          🏆
        </span>
        </div>
       
      </Box>
    </Modal>
    </div>
  )
}

export default WinnerModal
