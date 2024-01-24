import { useState } from "react"

function Pagination (){
     let [number, setNumber] = useState(1)
     let [current,setCurrent] = useState(1)

     const pages = [
        {page : number },
        {page : number + 1},
        {page : number + 2},
        {page : number + 3}
     ]

     function next(){
        setNumber(++number)
     }

     function prev(){
        number > 1 && setNumber(--number)
     }
    return(
        <div className = "flex justify-center bg-white rounded-lg font-sans p-6">
            <button onClick = {prev} className = "h-10 border-2 border-grey-400 px-4 rounded-r-lg hover: bg-gray-300 hover:text-white mr-2">
                <h3 className = "text-sm font-medium">Prev</h3>
            </button>
            {pages.map( (pg, i) => (
                <button key = {i} onClick = {()=> setCurrent(pg.page)} className = {`text-lg rounded-full mr-2, h-10 border-2 border-r-0 border-gray-600 w-12 mr-2
                ${current === pg.page && 'bg-gray-600 text-white'}`}>{pg.page} </button>
            ))}
            <button onClick = {next} className = "h-10 border-2 border-grey-400 px-4 rounded-r-lg hover: bg-gray-300 hover:text-white mr-2">
                <h3 className = "text-sm font-medium">next</h3>
            </button>
        </div>
    )
}
export default Pagination