"use client"
import Link from 'next/link'
import { useState, useEffect } from "react"
import { access_token } from "../localStorage";
import axios from 'axios';
import Pagination from '../pagination/page'

function UserDetails() {

  const [user, setUser] = useState([])
  let [page, setPage] = useState(1)
  let [perpage, setPerPage] = useState(5)
  const [showPopup, setShowPopup] = useState({
    status: false,
    message: "",
    messageDetails: "",
    statusCode: "",
    statusText: ""

  })

  const test_it = async () => {
    await axios.get(`https://nitvcrmapi.truestreamz.com/api/v1/user?page=` + page + "&per_page=" + perpage, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${access_token}`,
      }
    }).then((response) => {
      setUser(response.data.data.items)
      console.log(response.data.data)
      setPage(response.data.data.page)
      setShowPopup(response.status)
      console.log(response)
      response.status === 200 ? setShowPopup({
        status: true,
        message: "Success, Thankyou",
        messageDetails: "user created sucessfully",
        statusCode: 200
      }) : setShowPopup({
        status: true,
        message: "Failed, Sorry",
        messageDetails: "couldn't create user",
        statusCode: 400

      })
    })
  }
  useEffect(() => {
    test_it()
  }, [page])

 
    // <>
    //   <div className="flex flex-col px-2 py-2 ">
    //     <div className="-m-1.5 overflow-y-auto">
    //       <div className="p-1.5 min-w-full inline-block align-middle">
    //         <div className="overflow-hidden">

    //           <label className="px-2 py-2 pt-3 text-2xl text-gray-700 uppercase text-[#191D23] font-bold ">
    //             User Details
    //           </label>
    //           <table className="border-solid min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    //             <thead >
    //               <tr>

    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   name
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   email
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   user type
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   company
    //                 </th>

    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Phone
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Address
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Last Login IP
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Status
    //                 </th>
    //                 <th
    //                   scope="col"
    //                   className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
    //                 >
    //                   Update
    //                 </th>
    //               </tr>
    //             </thead>
    //             <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
    //               {user.map((post) =>
    //                 <tr key={post.id}>

    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.name}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.email}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
    //                     {post.user_type}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.company}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.phone}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.address}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     {post.last_login_ip}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm dark:text-gray-200">
    //                     {post.is_active ? <div className='py-1 px-2 text-green-900 bg-green-200 inline-block rounded'>active</div>
    //                       : <div className="py-1 px-2 text-red-900 bg-red-200 inline-block rounded">inactive</div>}
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
    //                     <Link
    //                       className="bg-slate-300 inline-block text-l border-1 px-2 py-1 mb-1 rounded-md justify-end " href={`user/${post.id}`}>
    //                       Update Users
    //                     </Link>
    //                   </td>
    //                   <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"></td>
    //                 </tr>
    //               )}
    //             </tbody>
    //           </table>
    //         </div><br></br>
           
    //         <Link
    //           className="bg-slate-300 inline-block text-l border-2 p-2 mb-2 rounded-md justify-end " href='/'>
    //           Back to Register
    //         </Link>
    //         {/* {showPopup.status && <Success showPopup = {showPopup} setShowPopup={setShowPopup}/>} */}

    //       </div>
    //     </div>
    //   </div>
    //   <Pagination setPage={setPage} page={page} />
    // </>
{/* <>
<div class="pt-5 shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
    <table class="w-full table-fixed">
        <thead>
            <tr class="bg-gray-100">
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Name</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Email</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Role</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Company</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">phone</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Address</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Login IP</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Status</th>
                <th class="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">Update</th>

          
            </tr>
        </thead>
        <tbody class="bg-white">
          {user.map((post) => 
            <tr key= {post.id}>
                <td class="py-4 px-6 border-b border-gray-200">{post.name}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.email}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.user_type}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.company}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.phone}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.address}</td>
                <td class="py-4 px-6 border-b border-gray-200 truncate">{post.last_login_ip}</td>
                <td class="py-4 px-6 border-b border-gray-200">{post.is_active}</td>
            </tr>
            )}
        </tbody>
    </table>
</div>


<Pagination setPage={setPage} page={page} />


</> */}
return(
<div >
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    name
                </th>
                <th scope="col" className="px-6 py-3">
                    email
                </th>
                <th scope="col" className="px-6 py-3">
                    role
                </th>
                <th scope="col" className="px-6 py-3">
                    comapany
                </th>
                <th scope="col" className="px-6 py-3">
                    phone
                </th>
                <th scope="col" className="px-6 py-3">
                    address
                </th>
                <th scope="col" className="px-6 py-3">
                    last login
                </th>
                <th scope="col" className="px-6 py-3">
                    status
                </th>
                <th scope="col" className="px-6 py-3">
                    update
                </th>
            </tr>
        </thead>
        <tbody>
          {user.map((post)=> 
            <tr key = {post.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td scope="row" className="px-6 py-4">
                    {post.name}
                </td>
                <td className="px-6 py-4">
                {post.email}
                </td>
                <td className="px-6 py-4">
                {post.user_type}
                </td>
                <td className="px-6 py-4">
                    {post.company}
                </td>
                <td className="px-6 py-4">
                    {post.phone}
                </td>
                <td className="px-6 py-4">
                    {post.address}
                </td>
                <td className="px-6 py-4">
                    {post.last_login_ip}
                </td>
                <td className="px-6 py-4">
                    {post.is_active ? <div className='py-1 px-2 text-green-900 bg-green-200 inline-block rounded'>active</div>
                          : <div className="py-1 px-2 text-red-900 bg-red-200 inline-block rounded">inactive</div>}
                </td>
                <td className="px-6 py-4">
                    
                <Link
                    className="bg-slate-300 inline-block text-l border-1 px-2 py-1 mb-1 rounded-md justify-end " href={`user/${post.id}`}>
                    Update 
                </Link>
                </td>
            </tr>
            )}
        </tbody>
    </table>
    
</div>
<Pagination setPage={setPage} page={page} />
<Link
      className=" m-3 bg-slate-300 inline-block text-l border-2 p-2 mb-2 rounded-md justify-end " href='/'>
     Back to Register
     </Link>
</div>
)}

export default UserDetails;

          

