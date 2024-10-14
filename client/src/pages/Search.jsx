import React from "react";

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* leftside---------------- */}
      <div className="p-7 border-b-2 md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-6">
          <div className=" flex items-center gap-3">
            <label className="whitespace-nowrap font-semibold">
              Search Term
            </label>
            <input
              className="p-3 border rounded-lg w-full"
              placeholder="Search..."
            />
          </div>
          {/* checkboxessssssssssssssss------------------- */}
          <div className="flex gap-2 flex-wrap">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="all" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="sale" />
              <span>Sale</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="offer" />
              <span>offer</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="parking" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input className="w-5" type="checkbox" id="furnished" />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label className="font-semibold">Sort By:</label>
            <select id="sort_order" className="p-3 border rounded-lg">
              <option>Price High to Low</option>
              <option>Price Low to High</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
          <button className="bg-slate-700 text-white rounded-lg p-3 hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      {/* rightside------------------------------ */}
      <div>
        <h1 className="text-3xl font-semibold p-3 border-b-2 mt-4">
          Available Listings:
        </h1>
      </div>
    </div>
  );
};

export default Search;
