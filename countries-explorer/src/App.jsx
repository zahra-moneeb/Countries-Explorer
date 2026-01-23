import { useState, useEffect} from 'react'
import SortedPopulation from './component/SortedPopulation';

import SearchField from './component/SearchField'
import './App.css'

function App() {
  const [searchCountries, setSearchCountries] = useState("");
  const [countrie, setCountrie] = useState([]);
  const [region, setRegion] = useState("All");
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(null);



const trimed = searchCountries.trim();




useEffect(() => {
  // ⛔ اگر سرچ هست ولی کمتر از 3 حرف → request نده
  if (trimed && trimed.length < 3) {
    setCountrie([]);
    setLoading(false);
    setError(null);
    return;
  }

  

  const controller = new AbortController();

  const timer = setTimeout(async () => {
    setLoading(true);
    setError(null);

    try {
    let url;

    if (trimed) {
      url = `https://restcountries.com/v3.1/name/${encodeURIComponent(trimed)}`;
    } else if (region && region !== "All") {
      url = `https://restcountries.com/v3.1/region/${region}`;
    } else {
      url = `https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital`;
    }

    const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      console.log(data);
      if (!res.ok) {
        setCountrie([]);
        throw new Error(data.message || "Request failed");
      }

      setCountrie(data);


    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message || "Failed to fetch countries");
        setCountrie([]);
      }
    } finally {
      setLoading(false);
    }
  }, 500);

  return () => {
    clearTimeout(timer);
    controller.abort();
  };
}, [trimed, region]);


  return (
    <div className="container py-4">
      <SearchField searchCountries={searchCountries}
                   setSearchCountries={setSearchCountries} 
                    region={region}
                    setRegion={setRegion}
     />
     {error ? 
        <div className="alert alert-danger mt-3" role="alert">
          {` ${error} ! Such This " ${trimed} " country does not exist.`}
        </div>
     : null}

        {!error && !loading && trimed && countrie.length === 0 ? (
          <div className=" rounded-4 p-4 mb-3">
              <div className="card h5 mb-1">
                 <div className="card-body muted">
                    No results<br></br>
                    Please write a complete country name to search.
                  </div>
               </div>
          </div>
        ) : null}
        
      
      <SortedPopulation countrie={countrie} loading={loading} />
    </div>
  )
}

export default App
