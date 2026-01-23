import { Search, Globe, X } from "lucide-react";
import "../App.css";
export default function SearchField({ searchCountries, setSearchCountries, region, setRegion }) {
    const hasText = searchCountries.trim().length > 0;
    return (
        <div className="search-field">
            <div className="input-group mb-3 flex-nowrap bg-transparent">
                <span className="input-group-text">
                    <Search color="#565050" />
                </span>

                <input
                    value={searchCountries}
                    onChange={(e) => setSearchCountries(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Search Countries... (e.g., Brazil, Russia, Australia)"
                />
                {hasText ? (
                    <button
                    className="btn btn-sm btn-soft"
                    type="button"
                    onClick={() => setSearchCountries("")}   
                    aria-label="Clear search"
                    title="Clear"
                >   
                    <X size={16} color="#e10f0f" />
                    </button>
                    ) : null}
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <Globe color="#565050" />
                </label>

                <select className="form-select text-muted" id="inputGroupSelect01"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                >
                    
                    <option value="All">All</option>
                    <option value="Americas">Americas</option>
                    <option value="Africa">Africa</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
}