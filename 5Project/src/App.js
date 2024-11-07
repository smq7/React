import { useState, useContext } from 'react';
import { places } from './data.js';
import { getImageUrl } from './utils.js';
import { ImageSizeContext } from './Context.js';

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  // const imageSize = isLarge ? 150 : 100;
  // можна двома способами


  // в чом крч вес прекол в тому шо ми в одному файлі якомусь parents файлі маємо імопртувати Context і задати значення за допомогую "ourContext".Provider value = {"ourValue"}
  // а в тому де нам тре використити це то нам над імпортувати useContext і Context
  // ше він передається на любу відстань 

  return (
    // тут задаємо значення
    <ImageSizeContext.Provider value={isLarge ? 150 :100}
    >
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  )
}

function List() {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place place={place} />
    </li>
  );
  return <ul>{listItems}</ul>;
}

function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {': ' + place.description}
      </p>
    </>
  );
}

function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  // тут використовуємо
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
