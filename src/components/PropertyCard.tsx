import Link from "next/link";
import { Bath, Bed, Home } from "lucide-react";
import { Property } from "@/types";

const PropertyCard = ({
  id,
  title,
  bedrooms,
  bathrooms,
  area,
  images,
  price,
}: Property) => (
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
            <div className="py-4">{bedrooms}</div>
          </div>
          <div className="flex items-center justify-center flex-1 border-r">
            <Bath size={16} className="mr-2" /> {bathrooms}
          </div>
          <div className="flex items-center justify-center flex-1">
            <Home size={16} className="mr-2" /> {area}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-orange-500 font-bold">
            ${price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-500">
            ${(price / area).toFixed(2)}/sq.ft
          </span>
        </div>
      </div>
    </div>
  </Link>
);

export default PropertyCard;
