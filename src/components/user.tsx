import { FC } from 'react';
import Link from "next/link";
import Nft from './nft'
import NftCards from './Cards'
export const User: FC = props => {
    return ( 
        <div className='User'>
        <div className='image flex items-center justify-center ' > 
        
       <p> <img src='https://picsum.photos/id/237/200/300' className="w-20 h-20 rounded-full flex justify-center items-center"/> 
                {} </p>
   </div>
    
   <div className="h-[30px] ml-[20vw] w-[60%] flex flex-row md:mb-4 mt-4 shadow-lg bg-neutral text-neutral-content flex justify-center items-center ">
         
        
        <div className='  '> 
        <ul className="flex  flex-col justify-center mt-4  md:flex-row md:space-x-10 md:mt-0 md:text-sm md:font-medium bg-white-50 bg-opacity-40 backdrop-blur-md rounded drop-shadow-lg">
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  text-[10px] flex space-x-6" aria-current="page">MY ITEMS</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  text-[10px] flex space-x-6" >LISTED ITEMS</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  text-[10px] flex space-x-6">AUCTIONS</a>
        </li>
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700  text-[10px] flex space-x-6">OFFERS MADE</a>
        </li>
        <li
        >
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent  text-[10px] flex space-x-6">OFFERS RECEIVED</a>
        </li >
        <li>
          <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-[10px]  text-[14px] flex space-x-6">ACTIVITIES</a>
        </li >
      </ul>
      </div>
      </div>
      
      
      <div className='card'>
          <Nft/>
      </div>
      
      </div>
      
      
      
    
        
        
        
        
        
        
    )
}