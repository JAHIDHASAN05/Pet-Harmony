'use client'

import React from 'react';
import AddPetForm from './AddpetForm';

const PetMangementPage = () => {
  return (
    <div>
       <div className='flex justify-between items-center'>
       <input
            type="text"
            name="name"
            value={''}
            
            placeholder="searcg pet's "
            className="mt-1  block p-2 border border-gray-300 rounded-md"
         
            required
          />
        {/* <button
          type="submit"
          className="px-8 pt-2  bg-blue-600 text-white p-2 rounded-md hover:bg-blue-900 transition duration-200"
        >
          Add Pet
        </button> */}

        <AddPetForm/>

     
       </div>
    </div>
  );
};

export default PetMangementPage;