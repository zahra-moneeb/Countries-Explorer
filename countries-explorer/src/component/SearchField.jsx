import { Search, Globe } from "lucide-react";

export default function SearchField({ searchCountries, setSearchCountries }) {
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
            </div>

            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">
                    <Globe color="#565050" />
                </label>

                <select className="form-select text-muted" id="inputGroupSelect01">
                    <option value="">Select region</option>
                    <option value="1">All</option>
                    <option value="2">Americas</option>
                    <option value="3">Africa</option>
                    <option value="4">Asia</option>
                    <option value="5">Europe</option>
                    <option value="6">Oceania</option>
                </select>
            </div>
        </div>
    );
}