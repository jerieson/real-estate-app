const SearchForm = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="bg-white grid grid-cols-1 md:grid-cols-4 gap-8 rounded-lg shadow md:divide-x-2">
      <div className="relative flex items-center md:p-6 px-4">
        <label className="block text-sm sr-only text-gray-600">
          Looking for
        </label>
        <select className="w-full p-2 rounded mt-1 outline-none border-0 font-bold">
          <option>Looking for</option>
          <option>House</option>
          <option>Apartment</option>
        </select>
      </div>
      <div className="relative flex items-center md:p-6 px-4">
        <label className="block text-sm sr-only text-gray-600">Location</label>
        <select className="w-full p-2 rounded mt-1 outline-none border-0 font-bold">
          <option>Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
        </select>
      </div>
      <div className="relative flex items-center md:p-6 px-4">
        <label className="block text-sm sr-only text-gray-600">
          Property Type
        </label>
        <select className="w-full p-2 rounded mt-1 outline-none border-0 font-bold">
          <option>Property type</option>
          <option>For Sale</option>
          <option>For Rent</option>
        </select>
      </div>
      <div className="relative flex items-center md:p-6 px-4 pb-4">
        <label className="block text-sm sr-only text-gray-600">Price</label>
        <select className="w-full p-2 rounded mt-1 outline-none border-0 font-bold">
          <option>Price</option>
          <option>$0 - $200,000</option>
          <option>$200,000 - $500,000</option>
          <option>$500,000+</option>
        </select>
      </div>
    </div>
  </div>
);

export default SearchForm;
