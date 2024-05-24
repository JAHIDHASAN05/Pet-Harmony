import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { MdHealthAndSafety } from "react-icons/md";

interface IPetCardProps {
  isEditable?: boolean;
}

const PetCard = ({ isEditable = false }) => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg p-1 mx-auto rounded-2xl">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="w-full"
          src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg"
          alt="Saint Martin's Island"
        />
        <span className=" flex items-center xl:gap-1 absolute top-2 right-1 bg-red-500 rounded-full xl:px-3 lg:p-1 py-1 text-sm font-semibold text-white">
          <FaLocationDot /><span>Narsingdi</span>
        </span>
        <span className=" flex items-center gap-0 md:gap-0 lg:gap-1 absolute top-2 left-1 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
        <MdHealthAndSafety /><span>Bad condition</span>
        </span>
      </div>
      <div className="px-3 py-4">
        <div className="font-bold text-xl mb-2 rancho-regular">
          Tommy the dog
          <div className="badge text-red-500  badge-outline ml-2">$100</div>
        </div>
        <p className="text-gray-700 text-base">
          Where azure waters meet powder-white sands, offering a sanctuary for
          soulful wanderers seeking serenity amidst nature&apos;s ...
        </p>
      </div>
      <div className="flex justify-between gap-10 px-3">
        <div className="font-bold rancho-regular">
          breed :
          <div className="badge text-red-500  badge-outline ml-2">Siamese</div>
        </div>
        <div className="font-bold rancho-regular">
          age :
          <div className="badge text-red-500  badge-outline ml-2">5yr</div>
        </div>
      </div>
      <div className={` md:p-1 p-3  xl:px-6 mb-3 mt-5 pt-4 pb-2 flex items-center ${isEditable? 'justify-between':'justify-center'}`}>
        <button className={ ` ${isEditable? '':'hidden hover:bg-red-700'} bg-red-500  text-white font-bold py-2 px-2 rounded `}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded">
          View Details
        </button>
        <button className={  ` ${isEditable? '':'hidden '}bg-red-500  text-white font-bold py-2 px-2 rounded`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PetCard;
