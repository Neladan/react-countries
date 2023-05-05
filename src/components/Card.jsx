/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Card = ({ country }) => {
    return (
        <li className="card">
            <img src={country.flags.svg} 
            alt={"Drapeau " + country.translations.fra.common} />
            <div className="infos">
                <h2>{country.translations.fra.common}</h2>
                <h4>{country.capital}</h4>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </li>
    ); 
};

export default Card;