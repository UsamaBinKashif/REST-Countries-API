import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Country() {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(true);
  const { capital } = useParams();
  const singleCountry = async () => {
    let response = await fetch(
      `https://restcountries.com/v2/capital/${(capital) }`
    );
    let data = await response.json();
    setCountry(data);
    setLoading(false);
  };

  useEffect(() => {
    singleCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [capital]);
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
        <section className="">
          {country.map(
            ({
              name,
              capital,
              region,
              population,
              flags,
              subregion,
              currencies,
              topLevelDomain,
              nativeName,
              languages,
              borders,
            }) => (
              <div className="bg-gray-300 dark:bg-gray-900 dark:text-white h-screen ">
                <div className="country__section container flex mx-auto py-16 items-center justify-center  ">
                  <img src={flags.png} className="w-2/4 p-8" alt={name} />
                  <div className="data__section">
                    <h2 className="font-bold text-2xl mb-8 ">
                      {name}
                      ,
                        <span className="dark:text-gray-400 text-gray-700 text-sm ml-2">
                          {capital}
                        </span>
        
                    </h2>
                    <div className="grid grid-cols-2 gap-1 font-bold">
                      <p>
                        Native Name:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm ">
                          {nativeName}
                        </span>
                      </p>
                      <p>
                        Population:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {population}
                        </span>
                      </p>
                      <p>
                        Region:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {region}
                        </span>
                      </p>
                      <p>
                        Sub Region:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {subregion}
                        </span>
                      </p>

                      <p>
                        Top Level Domain:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {topLevelDomain[0]}
                        </span>
                      </p>
                      <p>
                        Currencies:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {currencies.map((cur) => cur.name)}
                        </span>
                      </p>
                      <p>
                        Languages:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {languages.map((lang) => lang.name + ", ")}
                        </span>
                      </p>
                    </div>
                    <div className="">
                      <p className="font-bold">
                        Border Countries:{" "}
                        <span className="dark:text-gray-400 text-gray-700 text-sm">
                          {borders
                            ? borders.map((bdr) => bdr + ", ")
                            : `${name} has no borders`}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/"}
                  className="backBTN px-6 py-2 ml-10 bg-white text-gray-600 shadow-md dark:bg-gray-700 dark:text-white border-2 border-gray-400 font-semibold"
                >
                  Back
                </Link>
              </div>
            )
          )}
        </section>
      )}
    </>
  );
}
