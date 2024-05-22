import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";

const PetCard = () => {
  return (
    <div className="max-w-sm  overflow-hidden shadow-lg p-4 mx-auto rounded-2xl">
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="w-full"
          src="https://cdn.pixabay.com/photo/2024/03/14/08/52/pug-8632718_1280.jpg"
          alt="Saint Martin's Island"
        />
        <span className=" flex items-center gap-1 absolute top-2 right-2 bg-red-500 rounded-full px-3 py-1 text-sm font-semibold text-white">
         <FaLocationDot/> <span>Narsingdi</span> 
        </span>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 rancho-regular">
          Tommy the dog
          <div className="badge badge-secondary ml-2">$100</div>
        </div>
        <p className="text-gray-700 text-base">
          Where azure waters meet powder-white sands, offering a sanctuary for
          soulful wanderers seeking serenity amidst nature&apos;s ...
        </p>
      </div>
      <div className="flex justify-center gap-10">
        <div className="font-bold rancho-regular">
          breed :<div className="badge badge-secondary ml-2">Siamese</div>
        </div>
        <div className="font-bold rancho-regular">
          age :<div className="badge badge-secondary ml-2">5 year</div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 flex items-center justify-center">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PetCard;
