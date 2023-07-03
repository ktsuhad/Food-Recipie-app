import "../app/App.scss";

import React, { useState } from "react";
import { getRecipie } from "../Services/FoodApi";

const RecipePage = () => {
  const [query, setQuery] = useState<string>("");
  const [recipie, setRecipie] = useState([]);

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const Recipies = await getRecipie(query);
    setRecipie(Recipies);
  };

  return (
    <div>
      <div className="w-full h-[35rem] relative ">
        <img
          className="w-full h-full  object-cover"
          src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600"
        ></img>
        <div className="w-full h-full absolute bg-black/80 top-0 items-center flex justify-center">
          <form
            className="absolute top-96  flex flex-row sm:gap-4"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              placeholder="Search..."
              className="py-2 text-black w-80 ring-2 rounded-lg pl-4 to-black"
              onChange={(e) => setQuery(e.target.value)}
            ></input>
            <button
              className="bg-orange-400 text-white p-1 rounded-md text-lg font-semibold px-4"
              type="submit"
            >
              search
            </button>
          </form>

          <h1 className=" text-orange-400 text-6xl font-semibold">
            What would you like <br />
            to cook today ?
          </h1>
        </div>
      </div>
      {/* ///////////////maping/////// */}
      <div className="flex flex-wrap justify-center items-center gap-2 pt-5 justify-items-center ">
        {recipie?.map((items, index) => (
          <div key={index} className="wrapper">
            <div
              key={items["recipe"]["label"]}
              className="card  border rounded-md shadow-2xl cursor-pointer mx-2 my-4 text-center"
            >
              <div className="front  overflow-hidden rounded-t-md p-3  ">
                <img
                  src={items["recipe"]["image"]}
                  alt=""
                  className="w-full h-64 rounded-md object-cover"
                />
                <h1 className="text-base font-semibold p-2 whitespace-nowrap text-ellipsis">
                  {items["recipe"]["label"]}
                </h1>
                <p className="p-2 text-base font-extrabold">
                  Calories : {Math.round(items["recipe"]["calories"])}
                </p>
              </div>

              <div className="back overflow-hidden rounded-t-md p-3 overflow-y-auto">
                <ul className="list-disc p-2 text-start tracking-wide font-bold">
                  <li>{items["recipe"]["ingredientLines"]}</li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePage;
