import { useState, useEffect } from "react"
import axios from 'axios'
import { access_token } from '../localStorage'
import currentPage from '../user/page'

function Pagination ({ setUser }){
     let [perpage, setPerPage] = useState(5)
     let [page, setPage] = useState(1)


     const test_it = async () => {
        const response = await axios.get(`https://nitvcrmapi.truestreamz.com/api/v1/user?page=`+page+"&per_page="+perpage, {
            method: "GET",
          headers: {
            'Authorization': `Bearer ${access_token}`,
          }})
          setUser(response.data.data.items)
            
    }

  useEffect(() => {
    test_it()
 },[page])

     function next(){
       setPage(++page)
       console.log("hehe")
       console.log(page)
     }

     console.log(currentPage)

     function prev(){
        page > 1 && setPage(--page)
        console.log("hehe 2")
        console.log(page)
     }
    return(
        <div className = "flex justify-center bg-white rounded-lg font-sans p-6">
            <button onClick = {prev} className = " h-10 border-2 border-grey-400 px-4 rounded-r-lg hover: bg-gray-300 hover:text-white mr-2">
                <h3 className = " text-sm font-medium">Prev</h3>
            </button>

            <button onClick = {next} className = "h-10 border-2 border-grey-400 px-4 rounded-r-lg hover: bg-gray-300 hover:text-white mr-2">
                <h3 className = "text-sm font-medium">next</h3>
            </button>
        </div>
    )
}
export default Pagination