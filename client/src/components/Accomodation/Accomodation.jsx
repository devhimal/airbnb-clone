// import React from 'react'

import { Link, useParams } from "react-router-dom"

const Accomodation = () => {
  const { action } = useParams()

  const classes =
    "py-2 px-2 w-full border rounded-md hover:outline-none focus:outline-none focus:border-[#e44f5a]"
  return (
    <div>
      {action !== "new" && (
        <div>
          <Link
            className="px-6 py-2 rounded-full bg-[#e44f5a] text-white capitalize inline-flex"
            to="/account/places/new/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span> add places</span>
          </Link>
        </div>
      )}

      {action === "new" && (
        <div className="w-full">
          <form action="#" className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <p className="opacity-80">
                Enter title of your accomodation, it should be short and catchy.
              </p>
              <input type="text" placeholder="Title" className={classes} />
            </div>
            <div className="flex flex-col">
              <label htmlFor="title">Address</label>
              <p className="opacity-80">
                Enter permanent and temporary address of your place.
              </p>
              <input type="text" placeholder="Address" className={classes} />
            </div>
            <div>
              <p>Photos</p>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Paste the link of your image"
                    className={
                      "py-2 px-2 border rounded-md hover:outline-none focus:outline-none focus:border-[#e44f5a]"
                    }
                  />
                  <button className="border rounded-md py-2 px-6 bg-[#808080] hover:bg-[#e44f5a] text-white w-fit ">
                    Add place
                  </button>
                </div>

                <p className="ml-14 py-2">or</p>

                <button className="border flex justify-center items-center gap-2 rounded-md py-3 px-6 bg-[#808080] hover:bg-[#e44f5a] text-white w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>
                  <span>Upload</span>
                </button>
              </div>
            </div>

            <div>
              <label>Description</label>
              <p className="opacity-80">
                Enter a short and informative description of your places.
              </p>
              <textarea
                name="Description"
                id=""
                className={classes}
                rows="4"
                placeholder="Description"
              ></textarea>
            </div>

            <div>
              <label>Perks</label>
              <p className="opacity-80">select perks of your place.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                <label
                  htmlFor=""
                  className=" py-2 px-2 flex gap-2 items-center"
                >
                  <input type="checkbox" />
                  <span>Wifi</span>
                </label>
                <label
                  htmlFor=""
                  className=" py-2 px-2 flex gap-2  items-center"
                >
                  <input type="checkbox" />
                  <span>Free parking spot</span>
                </label>
                <label
                  htmlFor=""
                  className=" py-2 px-2 flex gap-2  items-center"
                >
                  <input type="checkbox" />
                  <span>Radio</span>
                </label>
                <label
                  htmlFor=""
                  className=" py-2 px-2 flex gap-2  items-center"
                >
                  <input type="checkbox" className=" py-2 px-2 flex gap-2" />
                  <span>Television</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="">Extra Infomation</label>
              <p className="opacity-80">rules and regulations of house, etc</p>
              <textarea name="" id="" className={classes} rows="4"></textarea>
            </div>

            <div className="">
              <label htmlFor="">Checkin & Checkout</label>
              <p>Please fill out the time detail carefully.</p>

              <div className="flex flex-wrap gap-4 mt-4">
                <label htmlFor="">
                  <p>Check-in</p>
                  <input
                    type="text"
                    placeholder="2pm, sun"
                    className="py-2 px-2 border rounded-md hover:outline-none focus:outline-none focus:border-[#e44f5a]"
                  />
                </label>
                <label htmlFor="">
                  <p>Check-out</p>
                  <input
                    type="text"
                    placeholder="2pm, tue"
                    className="py-2 px-2 border rounded-md hover:outline-none focus:outline-none focus:border-[#e44f5a]"
                  />
                </label>
                <label htmlFor="">
                  <p>Max people</p>
                  <input
                    type="text"
                    placeholder="2, 4, or 6"
                    className="py-2 px-2 border rounded-md hover:outline-none focus:outline-none focus:border-[#e44f5a]"
                  />
                </label>
              </div>
            </div>
            <button className="w-fit py-2 px-8 border rounded-md bg-[#e44f5a] text-white">
              Save
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Accomodation
