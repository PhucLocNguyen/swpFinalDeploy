import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';
import { useState } from 'react';
import FormHelperText from '@mui/material/FormHelperText';

import ApiCreateUser from '../../../api/admin/ApiCreateUser';

function StaffPopup({ setIsOpenPopup }) {

   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      role: ''
   });

   // Validation field
   const [errors, setErrors] = useState({
      username: '',
      email: '',
      password: '',
      passwordConfirm: '',
      role: ''
   });

   const handleBlur = (e) => {
      const { name, value } = e.target;
      validateField(name, value);
   };

   const validateField = (name, value) => {
      let error = ''
      switch (name) {
         case 'name':
            if (value.trim() === '') error = 'Name field cannot be blank'
            break
         case 'username':
            if (value.trim() === '') error = 'Username field cannot be blank'
            break
         case 'email':
            if (!value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")) error = 'Invalid email'
            break
         case 'password':
            if (value.trim() === '') {
               error = 'Password field cannot be blank'
            } else if (!/[A-Z]/.test(value)) {
               error = 'Password must contain at least one uppercase letter!'
            } else if (!/[a-z]/.test(value)) {
               error = 'Password must contain at least one lowercase letter!'
            } else if (!/\d/.test(value)) {
               error = 'Password must contain at least one number!'
            } else if (!/[!@#$%^&*()]/.test(value)) {
               error = 'Password must contain at least one special character!'
            } else if (value.length < 12) {
               error = 'Password must be at least 12 characters long!'
            }
            break
         case 'confirm':
            if (value.trim() === '') error = 'Confirm Password field cannot be blank'
            break
         case 'role':
            if (value === '') {
               error = 'Must choose a role'
            }
            break
         default:
            break
      }

      setErrors({
         ...errors,
         [name]: error
      })
   }

   const handleFormChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });

   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      let isValid = true;
      let newError = {}

      Object.keys(formData).forEach((key) => {

         if (formData[key] === '') {
            console.log(key)
            newError[key] = 'Field cannot be blank'
            isValid = false
         }

      });

      setErrors(newError);

      if (isValid) {
         // Call Api
         const CallApi = async () => {
            const respone = await ApiCreateUser({ formData })
         }
         await CallApi()
         console.log("Success")
         setIsOpenPopup(false);
      }

   }

   return (
      <>
         <div onClick={() => setIsOpenPopup(false)} className="fixed top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.6)] flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }} onClick={(e) => e.stopPropagation()} className="bg-[#fff] w-[40rem] rounded-[10px] min-h-[450px]">
               {/* Head */}
               <div className="relative text-center border-b-[1px] border-solid border-[#333] px-[1rem] py-[1rem] ">
                  <h1 className="font-bold leading-5 text-[1.5rem]">Add new staff</h1>
                  <div onClick={() => setIsOpenPopup(false)} className='absolute top-[10px] right-[10px] cursor-pointer'>
                     <CloseIcon />
                  </div>
               </div>
               {/* Body */}
               <div className='px-[1rem] py-[1rem]'>
                  {/* <h2 className='text-[1.1rem] font-medium pb-[3px]'>Name</h2>
                  <div>
                     <TextField name='name' value={formData.name} onChange={handleFormChange} onBlur={handleBlur} error={!!errors.name} helperText={errors.name} style={{ width: '100%' }} placeholder='NguyenDucHung' id="outlined-basic" variant="outlined" size='small' sx={{ minHeight: '4rem' }} />
                  </div> */}

                  {/* THem Email */}

                  <h2 className='text-[1.1rem] font-medium pb-[3px]'>Email</h2>
                  <div>
                     <TextField name='email' value={formData.name} onChange={handleFormChange} onBlur={handleBlur} error={!!errors.email} helperText={errors.email} style={{ width: '100%' }} placeholder='hung@gmail.com' id="outlined-basic" variant="outlined" size='small' sx={{ minHeight: '4rem' }} />
                  </div>

                  {/* Ket thuc */}

                  <h2 className='text-[1.1rem] font-medium pb-[3px]'>Username</h2>
                  <div>
                     <TextField name='username' onChange={handleFormChange} onBlur={handleBlur} error={!!errors.username} helperText={errors.username} style={{ width: '100%' }} placeholder='hungnd' id="outlined-basic" variant="outlined" size='small' sx={{ minHeight: '5.5rem' }} />
                  </div>

                  <div className='flex items-center justify-between'>
                     <div className='w-[47%]'>
                        <h2 className='text-[1.1rem] font-medium pb-[3px]'>Password</h2>
                        <div>
                           <TextField name='password' onChange={handleFormChange} onBlur={handleBlur} error={!!errors.password} helperText={errors.password} style={{ width: '100%' }} placeholder='hungnd' id="outlined-basic" variant="outlined" size='small' sx={{ minHeight: '5.5rem' }} />
                        </div>
                     </div>

                     <div className='w-[47%]'>
                        <h2 className='text-[1.1rem] font-medium pb-[3px]'>Confirm Password</h2>
                        <div>
                           <TextField name='passwordConfirm' onChange={handleFormChange} onBlur={handleBlur} error={!!errors.passwordConfirm} helperText={errors.passwordConfirm} style={{ width: '100%' }} id="outlined-basic" variant="outlined" size='small' sx={{ minHeight: '5.5rem' }} />
                        </div>
                     </div>

                  </div>
                  {/* Select Role */}
                  <div className='w-[100%]'>
                     <h2 className='text-[1.1rem] font-medium pb-[3px]'>Role</h2>
                     <FormControl sx={{ minWidth: 120, width: '100%', minHeight: '4rem' }} size='small' error={!!errors.role}>
                        <Select
                           value={formData.role}
                           name='role'
                           onChange={handleFormChange}
                           onBlur={handleBlur}
                           displayEmpty
                           inputProps={{ 'aria-label': 'Without label' }}
                        >
                           <MenuItem value=''>
                              <em>None</em>
                           </MenuItem>
                           <MenuItem value={2}>Manager</MenuItem>
                           <MenuItem value={5}>Sale Staff</MenuItem>
                           <MenuItem value={4}>Production Staff</MenuItem>
                           <MenuItem value={3}>Design Staff</MenuItem>
                        </Select>
                        {errors.role && <FormHelperText>{errors.role}</FormHelperText>}
                     </FormControl>
                  </div>
                  <div className='mt-[1rem]'>
                     <Button onClick={handleSubmit} variant="contained" sx={{ minWidth: '6rem' }}>
                        <AddIcon fontSize='small' sx={{ marginRight: '8px' }} />
                        Add
                     </Button>
                  </div>
               </div>
            </motion.div>
         </div>
      </>
   )
}

export default StaffPopup