import LodingDesign from "./LoadingDesign"
import CountrieCard from "./CountrieCard"


export default function CountrieList({ countrie , loading }) {
    if (loading) return <LodingDesign />
    if (!countrie?.length) return null;

    return (
        <div className="row g-2 ml-6 mr-6">
           {countrie.map((cont, idx) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={cont.cca3 ?? idx}>
                <CountrieCard countries={cont} />
            </div>
           ))}
        </div>
    )
}