import React from "react";
import { useSelector } from "react-redux";

const ReadngHistory = () => {
  const { history } = useSelector((state) => state.filterAndHistoryReducer);

  return (
    <>
      {history.length ? (
        <div className="min-h-[80vh] my-10 max-w-screen-xl mx-auto w-[90%]">
          {history
            ?.sort((b, a) => a.position - b.position)
            ?.map((h) => (
              <div key={h._id} className="hero mt-6 hover:shadow-lg">
                <div className="hero-content flex-col lg:flex-row">
                  <img src={h.img} alt="" className=" md:max-w-md rounded-lg" />
                  <div className="text-gray-700">
                    <h1 className="text-3xl font-semibold">{h.title}</h1>
                    <p className="py-2">{h.description}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <div className="h-[80vh] grid place-content-center text-center">
          <p className="text-5xl text-gray-800">No reading history </p>
          <p className="text-4xl text-rose-600 font-semibold">available.....</p>
        </div>
      )}
    </>
  );
};

export default ReadngHistory;
