import { Outlet, Link, NavLink } from "react-router-dom"

function Category() {
   return (
      <>
         <div className="text-center px-[6.25rem] max-w-[100%] pb-[3rem] pt-[2.5rem]">
            <h1 className="mb-[1.875rem] text-[5.125rem] leading-[1.3em] font-normal">Design</h1>
            <div className="text-center">
               <div className="flex items-center justify-center flex-wrap gap-x-[1.25rem] gap-y-[1.25rem] text-[1rem] leading-[1.3em]">

                  <div>
                     <NavLink to='/design' end className={({ isActive }) => `min-w-[2rem] max-w-[100%] inline-block py-[0.625rem] px-[0.94rem] border-[1px] border-solid border-[#000] rounded-[10px] ${isActive ? 'text-[#fff] bg-[#000]' : ''}`}>
                        <div className="min-w-[4rem]">All</div>
                     </NavLink>
                  </div>

                  <div>
                     <NavLink to='earring' className={({ isActive }) => `min-w-[2rem] max-w-[100%] inline-block py-[0.625rem] px-[0.94rem] border-[1px] border-solid border-[#000] rounded-[10px] ${isActive ? 'text-[#fff] bg-[#000]' : ''}`} >
                        <div className="min-w-[4rem]">Earring</div>
                     </NavLink>
                  </div>

                  <div>
                     <NavLink to='bracelet' className={({ isActive }) => `min-w-[2rem] max-w-[100%] inline-block py-[0.625rem] px-[0.94rem] border-[1px] border-solid border-[#000] rounded-[10px] ${isActive ? 'text-[#fff] bg-[#000]' : ''}`}>
                        <div className="min-w-[4rem]">Bracelet</div>
                     </NavLink>
                  </div>

                  <div>
                     <NavLink to='chain' className={({ isActive }) => `min-w-[2rem] max-w-[100%] inline-block py-[0.625rem] px-[0.94rem] border-[1px] border-solid border-[#000] rounded-[10px] ${isActive ? 'text-[#fff] bg-[#000]' : ''}`}>
                        <div className="min-w-[4rem]">Chain</div>
                     </NavLink>
                  </div>

                  <div>
                     <NavLink to='ring' className={({ isActive }) => `min-w-[2rem] max-w-[100%] inline-block py-[0.625rem] px-[0.94rem] border-[1px] border-solid border-[#000] rounded-[10px] ${isActive ? 'text-[#fff] bg-[#000]' : ''}`}>
                        <div className="min-w-[4rem]">Ring</div>
                     </NavLink>
                  </div>

               </div>
            </div>
         </div>
         <Outlet></Outlet>
      </>
   )
}

export default Category