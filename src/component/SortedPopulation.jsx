import { useState } from "react";
import CountrieList from "./CountrieList";
import "../App.css";
export default function SortedPopulation({countrie, loading}){
    const [sortOrder, setSortOrder] = useState("desc");

     const sortedCountries = [...countrie].sort((a, b) =>
         sortOrder === "desc" ? b.population - a.population : a.population - b.population)

    return(
        <div className="sort-container">
            <button className="btn btn-warning"
                onClick={() =>
                setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"))
                }
                
            >
                 {sortOrder === "desc" ? "Desc ↓ " : " Asc ↑ "}
            </button>

            <CountrieList countrie={sortedCountries} loading={loading} />
</div>

        

    )
}