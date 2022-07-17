import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  //get all countries
  const getCountries = async () => {
    let response = await fetch("https://restcountries.com/v2/all");
    let data = await response.json();
    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  //get countries by search
  const searchCountry = async (term) => {
    if (term) {
      const res = await fetch(`https://restcountries.com/v2/name/${term}`);
      const data = await res.json();
      setCountries(data);
    } else {
      getCountries();
    }
  };

  //get by filter region
  const filterByRegion = async (region) => {
    if (region === "") {
      getCountries();
    } else {
      const res = await fetch(`https://restcountries.com/v2/region/${region}`);
      const data = await res.json();
      setCountries(data);
    }
  };
  return (
    <>
      {loading ? (
        <div
          role="status"
          className="flex justify-center items-center h-screen"
        >
          <svg
            className="inline mr-2 w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        <>
          {/* search box */}
          <div className="flex container mx-auto mt-10 px-3">
            <input
              type="text"
              placeholder="Search for a country "
              className="pl-5 shadow  font-semibold dark:bg-gray-700  dark:text-white input"
              onChange={(term) => searchCountry(term.target.value)}
            />
            <select
              className="ml-auto  shadow  font-semibold dark:bg-gray-700  dark:text-white"
              onChange={(region) => filterByRegion(region.target.value)}
            >
              <option value="">Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="americas">Americas</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          {/* search box end*/}
          <section className="grid md:grid-cols-4 gap-5 p-7 ">
            {countries.map(({ name, capital, region, population, flags }) => (
              <Link to={`/${capital}`} key={name}>
                <article
                  key={name}
                  className="bg-white  dark:bg-gray-800   rounded shadow p-2"
                >
                  <img
                    className="h-44 w-full  mb-2"
                    src={flags.png}
                    alt="country flag"
                  />
                  <h1 className="font-bold text-gray-900 text-2xl mb-3 dark:text-white ">
                    {name}
                  </h1>
                  <p className="font-semibold text-gray-700 dark:text-white">
                    Population:{" "}
                    <span className="text-gray-900 dark:text-gray-300">
                      {population}.
                    </span>
                  </p>
                  <p className="font-semibold text-gray-700 dark:text-white">
                    Region:{" "}
                    <span className="text-gray-900 dark:text-gray-300">
                      {region}.
                    </span>
                  </p>
                  <p className="font-semibold text-gray-700 dark:text-white">
                    Capital City:{" "}
                    <span className="text-gray-900 dark:text-gray-300">
                      {capital}.
                    </span>
                  </p>
                </article>
              </Link>
            ))}
          </section>
        </>
      )}
    </>
  );
}
