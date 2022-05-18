import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import searchIcon from "assets/searchIcon.svg";

// components
import Layout from "componets/Layout";
import Form from "componets/Form";
import InputSearch from "componets/utils/InputSearch";
import Button from "componets/utils/Button";
import CardCountry from "componets/CardCountry";
import Caption from "componets/utils/Caption";

// querys
import { GET_COUNTRIES } from "../graphql/querys/countries";

const CountrySearchPage = () => {
  const [countries, setCountries] = useState([]);
  const [searching, setSearching] = useState("");
  const [resultsNotFound, setResultsNotFound] = useState(false);
  const [activeButton, setActiveButton] = useState("continent");

  const { error, data } = useQuery(GET_COUNTRIES);

  if (error) {
    toast.error(`something went wrong: ${error.message}`);
  }

  const handleInputSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearching(text);

    if (text.trim().length === 0) return;

    if (!data) return;

    const countriesFound = data.countries.filter((country) => {
      let countryName = country.name.toLowerCase();
      if (countryName.indexOf(text) !== -1) return country;
    });

    if (countriesFound.length === 0) {
      setCountries([]);
      return setResultsNotFound(true);
    }

    setResultsNotFound(false);
    setCountries(countriesFound);
  };

  const countriesGroupBy = (e) => {
    const { name } = e.target;
    if (name === "continent") {
      return setActiveButton(name);
    }
    if (name === "languaje") {
      setActiveButton(name);
    }
  };

  const isSearching = () =>
    searching.trim().length !== 0 && countries.length !== 0;

  return (
    <Layout>
      <Form handleSubmit={(e) => e.preventDefault()}>
        <InputSearch
          autoFocus={true}
          value={searching}
          text="Some random text"
          placeholder="Search..."
          handleChange={handleInputSearch}
        />
      </Form>
      {resultsNotFound && (
        <p className="text-gray-500 text-2xl pt-8">"results not found"</p>
      )}
      {searching.length === 0 && (
        <figure className="mx-auto w-1/3 md:w-1/6 pt-8">
          <img className="w-full opacity-10" src={searchIcon}></img>
        </figure>
      )}
      {isSearching() && (
        <section className="pt-10 pb-4 grid grid-flow-row gap-8 md:grid-cols-4 md:gap-0">
          <Caption text="Group By:" />
          <div className="grid gap-8 sm:grid-flow-col lg:gap-24">
            <Button
              name="continent"
              text="Continent"
              fn={countriesGroupBy}
              selected={activeButton === "continent" && true}
            />
            <Button
              name="languaje"
              text="Languaje"
              fn={countriesGroupBy}
              selected={activeButton === "languaje" && true}
            />
          </div>
        </section>
      )}
      {isSearching() &&
        countries.map((country) => {
          return (
            <CardCountry
              key={country.code}
              {...country}
              groupBy={
                activeButton === "continent"
                  ? country?.continent?.name
                  : country?.languages[0]?.name
              }
            />
          );
        })}
    </Layout>
  );
};

export default CountrySearchPage;
