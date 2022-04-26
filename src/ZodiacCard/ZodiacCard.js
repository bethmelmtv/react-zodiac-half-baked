import './ZodiacCard.css';

export default function ZodiacCard({ zodiac }) {
  return (
    <div className= 'zodiac-card'> 
      <h3>Name:{zodiac.name} </h3>
      <p>Date:{zodiac.dates}</p>
      <img src={`/images/${zodiac.name}.png`}/>
      {/* in this component,  use the `name` and `` props to render the name and dates of 
      the sign, as well as load the correct image  from the public directory */}
    </div>
  );
}
