import { Link } from "react-router-dom"
import CategoryItem from "./CategoryItem"
import { useContext, useEffect, useState } from "react"
import { DesignContext } from "../../context/DesignContext"
import { fetchApiDesign } from "../../api/FetchApiDesign"
import { useLocation } from "react-router-dom"


function ListAll() {
   const [design, setDesign] = useState([])
   const location = useLocation()

   // Goi API de lay du lieu cua tat ca design
   useEffect(() => {
      const fetchAPI = async () => {
         const respone = await fetchApiDesign()
         // console.log(respone)
         setDesign(respone)
      }
      fetchAPI()

   }, [location.pathname])

   // Lay type cua san pham thong qua path
   const getTypeFromPath = (path) => {
      const values = path.split('/').filter(value => value !== '')
      return values[values.length - 1]
   }

   // Lay ra design thong qua type
   const filter = getTypeFromPath(location.pathname) === 'design' ? 'all' : getTypeFromPath(location.pathname)
   let filterDesign = filter === 'all' ? design : design.filter(item => item.typeOfJewellery.name.toLowerCase() === filter)

   if (filterDesign === undefined) filterDesign = []

   return (
      <div className="px-[6.25rem] pb-[3rem]">
         <div className="text-[1rem] leading-[1.3em] font-normal">
            <div className="grid gap-x-[2.5rem] gap-y-[2.5rem] grid-cols-4">

               {filterDesign.map((item, index) => {
                  return (
                     // <Link key={index} to={`/design/${item.designId}`}>
                        <CategoryItem key={index} design={item} />
                     // </Link>
                  )

               })}
            </div>
         </div>
      </div>
   )
}

export default ListAll