
import { IPetData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";
import EditPetFormModal from "./EditPetFormModal";
import PetCardDeleteButton from "./PetCardDeleteButton";

interface IPetCardProps {
  isEditable?: boolean;
  pet: IPetData;
}
const data = {
  id: "5d80beab-fb1b-4821-813a-1c1b26f9f8a0",
  name: "Simba",
  species: "cat",
  bannerPhoto: "",
  multiplePhotos: [],
  breed: "Maine Coon",
  age: 2,
  specialNeeds: "",
  size: "medium",
  gender: "male",
  location: "Purrfect Haven",
  healthStatus: "",
  description:
    "Simba is a majestic and independent Maine Coon. He enjoys lounging in sunny spots and being brushed.",
  temperament: "Majestic, independent",
  medicalHistory: "Neutered, vaccinated.",
  adoptionRequirements:
    "Simba needs a home where he can have space to explore and a cat tree to climb.",
  createdAt: "2024-03-29T13:46:52.085Z",
  updatedAt: "2024-03-29T13:46:52.085Z",
};

  // const handleDelete = async (id:string) => {

  //     var Delete=async()=>{
  //         const request = await fetch(
  //             `${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${PetId}`,
  //             {
  //               method: "DELETE",
  //               headers: {
  //                 authorization: localStorage.getItem(AuthKey),
  //               },
  //             }
  //           );
  //           const response = await request.json();
  //           return response
  //     }
  //   };
  //     console.log(id);
  //     const result = await Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     });

  //     if (result.isConfirmed) {
  //         console.log(id);

  //         console.log(`${process.env.NEXT_PUBLIC_BECKEN_URL}/pets/${PetId}`,);
  //        const response = Delete()

  //       console.log(response);
  //       if (response.success) {
  //         Swal.fire({
  //           title: "Deleted!",
  //           text: "Pet has been deleted.",
  //           icon: "success",
  //         });
  //       } else {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: "Something went wrong!",
  //         });
  //       }
  //     }

const PetCard = ({ pet, isEditable = false ,isPetDelete, setIsPetDelete}: IPetCardProps) => {
  const {
    name,
    id,
    location,
    description,
    age,
    breed,
    healthStatus,
    bannerPhoto,
  } = pet;

  return (
    <>
      <div className="  max-w-sm overflow-hidden w-full shadow-lg p-1 mx-auto rounded-2xl">
        <div className="relative min-h-64 ">
          <Image
            fill
            quality={100}
            className="object-contain min-h-64 " 
            src={
              bannerPhoto ||
              "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
            }
            alt="Saint Martin's Island"
          />
          <span className="flex items-center xl:gap-1 absolute top-2 right-1 bg-red-500 rounded-full xl:px-3 lg:p-1 py-1 text-sm font-semibold text-white">
            <FaLocationDot />
            <span>Narsingdi</span>
          </span>
          <span className="flex items-center gap-0 md:gap-0 lg:gap-1 absolute top-2 left-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
            <MdHealthAndSafety />
            <span>Bad condition</span>
          </span>
        </div>
        <div className=" ">
          <div className="px-3 py-4">
            <div className="font-bold text-xl mb-2 rancho-regular">
              {name}
              <div className="badge text-red-500  badge-outline ml-2">$100</div>
            </div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="flex justify-between gap-10 px-3">
            <div className="font-bold rancho-regular">
              breed :
              <div className="badge text-red-500  badge-outline ml-2">
                {breed}
              </div>
            </div>
            <div className="font-bold rancho-regular">
              age :
              <div className="badge text-red-500  badge-outline ml-2">
                {age}yr
              </div>
            </div>
          </div>
          <div
            className={`md:p-1 p-3 xl:px-6 mb-3 mt-5 pt-4 pb-2 flex items-center ${
              isEditable ? "justify-between" : "justify-center"
            }`}
          >
           <EditPetFormModal pet={pet} id ={id} isEditable={isEditable}/>
            <Link href={`/pet/${pet.id}`}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
                View Details
              </button>
            </Link>
            <PetCardDeleteButton key={id} id={id} isEditable={isEditable} isPetDelete={isPetDelete} setIsPetDelete={setIsPetDelete}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default PetCard;
