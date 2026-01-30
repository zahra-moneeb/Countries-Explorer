import "../App.css";

export default function CountrieCard({ countries }) {
    const country = Array.isArray(countries) ? countries[0] : countries;
    if (!country) return null;
    return (
        <div className="country-card card h-150 p-2 shadow-sm mb-5 rounded">
            <img src={country?.flags?.png} className="card-img-top" alt={country?.name?.common ?? "flag"} />
            <div className="card-body">
                <h3 className="card-title">{country?.name?.common ?? "Unknown"}</h3>
                <h6 className="card-text">Region: {country?.region ?? "-"}</h6>
                <h6 className="card-text">Population: <span>{country?.population ?? "-"}</span></h6>
            </div>
         </div>
    )

}