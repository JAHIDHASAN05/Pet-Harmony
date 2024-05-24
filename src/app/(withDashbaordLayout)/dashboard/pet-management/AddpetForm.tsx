"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  description: string;
  age: string;
  breed: string;
  gender: string;
  healthStatus: string;
  location: string;
}

const AddPetForm: React.FC = () => {
  const [photos, setPhotos] = useState<File[]>([]);
  console.log(photos);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    age: "",
    breed: "",
    gender: "",
    healthStatus: "",
    location: "",
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedPhotos = Array.from(e.target.files);
      setPhotos([...photos, ...selectedPhotos]);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    closeModal();

    console.log(formData, photos);
  };

  const closeModal = () => {
    const myElement = document.getElementById("my_modal_5");
    if (myElement instanceof HTMLDialogElement) {
      myElement.close();
    }
  };

  const showModal = () => {
    //   document.getElementById("my_modal_5")?.showModal();
    const myElement = document.getElementById("my_modal_5");
    if (myElement instanceof HTMLDialogElement) {
      myElement.showModal();
    }
  };

  return (
    <>
      <button className="btn" onClick={showModal}>
        open modal
      </button>
      <dialog id="my_modal_5" className="modal  ">
        <div className="modal-box min-w-full min-h-screen rounded-none">
          <div className="relative mx-auto px-3  bg-white shadow-md  max-w-5xl ">
              <button className="text-end absolute top-0 right-0 btn" onClick={closeModal}>
                close
              </button>
            <h2 className="text-2xl   font-bold mb-3 text-center text-gray-800">
              Add New Pet
            </h2>

            <form onSubmit={handleSubmit} method="dialog">
              <div className="mb-4">
                <label className="block text-gray-700">Pet&apos;s Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="pet's name"
                  className="mt-1 w-full block p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Photos</label>
                <input
                  type="file"
                  multiple
                  onChange={handlePhotoChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  accept="image/*"
                  required
                />
                <div className="mt-2 flex flex-wrap gap-2">
                  {photos.map((photo, index) => (
                    <Image
                      width={1000}
                      height={1000}
                      key={index}
                      src={URL.createObjectURL(photo)}
                      alt={`Photo ${index + 1}`}
                      className="h-20 w-20 object-cover rounded-md"
                    />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Detailed Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="detailed description"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="mb-4">
                  <label className="block text-gray-700">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    placeholder="age"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Breed</label>
                  <input
                    type="text"
                    name="breed"
                    value={formData.breed}
                    onChange={handleInputChange}
                    placeholder="breed"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="" disabled>
                      Select Gender
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Health Status</label>
                  <input
                    type="text"
                    name="healthStatus"
                    value={formData.healthStatus}
                    onChange={handleInputChange}
                    placeholder="health status"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">
                    Current Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="current location"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full btn bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition duration-200"
              >
                Add Pet
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default AddPetForm;
