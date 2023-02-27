import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs' 
import {CiLocationOn} from 'react-icons/ci'
const Search  = () =>{
    return (
        <div className ='searchDiv grid gp-10 bg-[#f1f4f8] rounded-[10px] p-[2rem]'> 
            <form action="">
                <div className ='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
                    <div className='flex gap-2 items-center'>
                        <AiOutlineSearch className='text-[25px] icon'/>
                
                        <input type="text" className ='bg-transparant text-blue-500 focus:outline-none w-[100%]' placeholder='Search Job Here' />
                        <AiOutlineCloseCircle className = 'text-[30px] text-[#a5a6a6] hover:text-textColor icon'   />
                    </div>



                    <div className='flex gap-2 items-center'>
                        <BsHouseDoor className='text-[25px] icon'/>

                        <input type="text" className ='bg-transparant text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Company' />
                        <AiOutlineCloseCircle className = 'text-[30px] text-[#a5a6a6] hover:text-textColor icon'   />
                    </div>


                    <div className='flex gap-2 items-center'>
                        <CiLocationOn className='text-[25px] icon'/>

                        <input type="text" className ='bg-transparant text-blue-500 focus:outline-none w-[100%]' placeholder='Search By Location' />
                        <AiOutlineCloseCircle className = 'text-[30px] text-[#a5a6a6] hover:text-textColor icon'   />
                    </div>

                    <button className='bg-[#2a68ff] h-full p-2 px-10 rounded-[10px] text-black cursor-pointer hover:bg-blue-300'> Search</button>
                </div>
            </form>

            <div className = "secDiv flex items-center gap-10 justify-center">

            <div class="p-8"> </div>
            <div classname="singleSearch flex items-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] font-semibold">
                        Sort By:
                    </label>

                    <select name="" id ="relevance" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value=""> Relevance </option>
                        <option value=""> Inclusive </option>
                        <option value=""> Start with </option>
                        <option value=""> Contains </option>
                    </select>
                </div>


                <div classname="singleSearch flex items-center gap-2">
                    <label htmlFor="type" className="text-[#808080] font-semibold">
                        Sort By:
                    </label>

                    <select name="" id ="type" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value=""> Full-time </option>
                        <option value=""> Remote </option>
                        <option value=""> Contract </option>
                        <option value=""> Part-time </option>
                    </select>
                </div>

                <div classname="singleSearch flex items-center gap-2">
                    <label htmlFor="level" className="text-[#808080] font-semibold">
                        Sort By:
                    </label>

                    <select name="" id ="level" className='bg-white rounded-[3px] px-4 py-1'>
                        <option value=""> Senior </option>
                        <option value=""> Intermediate </option>
                        <option value=""> Junior </option>
                        <option value=""> Advocate </option>
                    </select>
                </div>

               <span className ="text-[#a1a1a1]"> Clear All</span>
            </div>

            
        </div>

    )
}

export default Search