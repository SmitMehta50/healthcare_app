import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import LinearProgress from '@mui/material/LinearProgress'


export default function BasicModal(props) {
  const {status, prob, open, setOpen} = props;

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        // onClose={handleClose}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box className='absolute rounded-lg top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] bg-white ' >
          <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
            <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
              <button onClick={()=> setOpen(false)} className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white'>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </button>
              <div className='p-6 text-center'>
              
                {/* <svg className="mx-auto mb-4 w-14 h-14 text-black dark:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round"  strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
                <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-4 w-14 h-14 text-black dark:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <h3 className="mb-5 text-xl font-extrabold text-black dark:text-black">{status ? status : null}</h3>
                <h3 className="mb-5 text-3xl font-normal text-gray-500 dark:text-gray-400">{prob ? <LinearProgress  className='w-full' variant="determinate" value={prob} /> : null}</h3>
                <button onClick={()=> setOpen(false)} className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'>
                  Close
                </button>
              </div>

            </div>

          </div>

          {/* *************************************************************************** */}
          {/* <button onClick={()=> setOpen(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
          </button> */}
          {/* <div className=''>
            {status ? status : null}
            {prob ? <LinearProgress className='w-full' variant="determinate" value={prob} /> : null} 
            {prob}
            </div> */}
        </Box>
      </Modal>
    </div>
  );
}
