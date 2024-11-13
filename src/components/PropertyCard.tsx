import Link from "next/link";
import { Bath, Bed, Home } from "lucide-react";

const PropertyCard = ({ id, title, price, image, beds, baths, sqft }) => (
  <Link href={`/properties/${id}`} className="block">
    <div className="bg-white rounded-[25px] shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <img
          src={"/property1.png"}
          // src={image || '/property1.png'}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg font-medium p-4">{title}</h3>
      <div className="border-t">
        <div className="flex text-sm">
          <div className="flex items-center justify-center flex-1 border-r">
            <Bed size={16} className="mr-2" />{" "}
            <div className="py-4">{beds}</div>
          </div>
          <div className="flex items-center justify-center flex-1 border-r">
            <Bath size={16} className="mr-2" /> {baths}
          </div>
          <div className="flex items-center justify-center flex-1">
            <Home size={16} className="mr-2" /> {sqft}
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
