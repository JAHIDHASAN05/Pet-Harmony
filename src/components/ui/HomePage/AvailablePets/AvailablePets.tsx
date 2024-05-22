import Image from "next/image";
import PetCard from "../petCards/page";

const AvailablePets = () => {
  return (
    <section>
      <h1 className="rancho-regular text-center uppercase text-4xl font-bold my-6">
        Avialable pet for you
      </h1>
      <div className="grid grid-cols-1 px-2  md:grid-cols-2 lg:grid-cols-3 gap-4 my-5">
        {
          [1,2,3,4,5,6,].map((pet, index)=><PetCard key={index} />)
        }
       
      </div>
    </section>
  );
};

export default AvailablePets;
