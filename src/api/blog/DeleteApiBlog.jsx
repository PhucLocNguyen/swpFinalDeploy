import api from '../instance'
import axiosConfigHeader from '../AxiosConfigHeader'
import { toast } from 'react-toastify'

const DeleteApiBlog = async (id) => {

   try {
      const respone = await api.delete('/Blog', {
         axiosConfigHeader,
         params: {
            id: id
         }
      })
      console.log('>>>Delete success', respone)
      if (respone?.status == 200) {
         toast.success('Deleted successfully');
      }
   } catch (error) {
      console.log('>>>Api delete Blog: ', error?.response?.data)
      if (error?.response?.data == 'Cannot delete this item because it is referenced by another entity') {
         toast.error('Data in use cannot be deleted');
      }
   }

}

export default DeleteApiBlog;