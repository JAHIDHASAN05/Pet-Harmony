"use client";

import React from "react";
import AddPetForm from "./AddpetForm";
import PetCard from "@/components/ui/HomePage/petCards/page";

const PetMangementPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center gap-2">
        <input
          type="text"
          name="name"
          value={""}
          placeholder="searcg pet's "
          className="mt-1  block p-2 border border-gray-300 rounded-md"
          required
        />

        <AddPetForm />
      </div>

      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        All pet&apos;s
      </h1>

      <div className="grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
        {[1, 2, 3, 4, 5, 6].map((pet, index) => (
          <PetCard key={index} isEditable={true} />  
            
       
        ))}

      </div>
    </div>
  );
};

export default PetMangementPage;
