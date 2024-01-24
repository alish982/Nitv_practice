"use client"
import Link from 'next/link'
import { useState, useEffect } from "react"
import { access_token } from "../localStorage";
import axios from 'axios';
import Pagination from '../pagination/page'

function UserDetails({}){

  // const handleClick = async () => {
  //   await axios.get(`https://nitvcrmapi.truestreamz.com/api/v1/user/${post.id}`, {
  //      method: "DELETE",
  //    headers: {
  //      'Authorization': `Bearer ${access_token}`,
  //    }})  
  //  }

    const [plan, setPlan] = useState([{'plan' : 'h'}])

    const test_it = async () => {
        const response = await axios.get('https://nitvcrmapi.truestreamz.com/api/v1/user', {
            method: "GET",
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }})
        setPlan(response.data.data.items)    
        }
        useEffect(() => {
            setPlan([{'plan':'s'}])
            console.log(plan)
              test_it ()
            
        },[])

         
    return(
      <div className="flex flex-col px-20 py-20 ">
       <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
          
            <label className="text-2xl  text-gray-700  bg-slate-300 rounded uppercase font-mono px-6">
              User Details
            </label>
            <table className=" border-solid min-w-full divide-y divide-gray-200 dark:divide-gray-700"></table>
            <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    user type
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    company
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Update
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              { plan.map((post) =>
                <tr key={post.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  {post.user_type}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  {post.name} 
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {post.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                    {post.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  <Link
                    className = "bg-red-300 inline-block text-l border-1 p-1 mb-1 rounded-md justify-end " href= {`user/${post.id}`}>
                    Update Users
                   </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  <button
                    onClick = { async () => {
                      await axios.get(`https://nitvcrmapi.truestreamz.com/api/v1/user/${post.id}`, {
                       method: "DELETE",
                       headers: {
                      'Authorization': `Bearer ${access_token}`,
                      }})  
                    }}
                    className = "bg-red-300 inline-block text-l border-1 p-1 mb-1 rounded-md justify-end " >
                    Delete Users
                   </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium"></td>
                </tr>    
                )}
              </tbody>
             </div><br></br>
             <Pagination />
             <Link
              className = "bg-slate-300 inline-block text-l border-2 p-2 mb-2 rounded-md justify-end " href = '/'>
                Back to Register
            </Link> 
           
           </div>
        </div>
        
    </div>
    
    )
}

export default UserDetails