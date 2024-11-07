import { Fragment } from "react";

// children 
function Card({children, title}){
    return (
        <div className="card">
            <div className="card-content">
                <h1>{title}</h1>
                {children}
            </div> 
        </div>
    );
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// conditions
function Item({ name, importance, some}) {
    return (
    <>
    
      <li className="item">
        {name} {importance > 0 && <i> "importance" {importance} </i>}
      </li>
      <li className="item">
            {some ? 
                <div> 
                    <div> 
                        <h2>
                            div into div into h2 if true
                        </h2>
                    </div> 
                </div> : "false"}
      </li>
      </>  
    );
  }
  
function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item 
            importance={9} 
            name="Space suit"
            some = {true}
          />
          <Item 
            importance={0} 
            name="Helmet with a golden leaf"
            some = {true} 
          />
          <Item 
            importance={6} 
            name="Photo of Tam"
            some = {false} 
          />
        </ul>
      </section>
    );
  }
 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
 const drinks = {
  tea: {
    part: 'leaf',
    caffeine: '15–70 mg/cup',
    age: '4,000+ years'
  },
  coffee: {
    part: 'bean',
    caffeine: '80–185 mg/cup',
    age: '1,000+ years'
  }
};

function Drink({ name }) {
  const info = drinks[name];
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{info.part}</dd>
        <dt>Caffeine content</dt>
        <dd>{info.caffeine}</dd>
        <dt>Age</dt>
        <dd>{info.age}</dd>
      </dl>
    </section>
  );
}
  
  function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//lists
function getImageUrl(person) {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      's.jpg'
    );
  }
const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  
  let chemists = [];
  let everyoneElse = [];
  people.forEach(person => {
    if (person.profession === 'chemist') {
      chemists.push(person);
    } else {
      everyoneElse.push(person);
    }
  });
  
  function ListSection({ title, people }) {
    return (
      <>
        <h2>{title}</h2>
        <ul>
          {people.map(person =>
            <li key={person.id}>
              <img
                src={getImageUrl(person)}
                alt={person.name}
              />
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
              </p>
            </li>
          )}
        </ul>
      </>
    );
  }
  
 function List() {
    return (
      <article>
        <h1>Scientists</h1>
        <ListSection
          title="Chemists"
          people={chemists}
        />
        <ListSection
          title="Everyone Else"
          people={everyoneElse}
        />
      </article>
    );
  }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const recipes = [{
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['tomatoes', 'cucumber', 'onion', 'olives', 'feta']
  }, {
    id: 'hawaiian-pizza',
    name: 'Hawaiian Pizza',
    ingredients: ['pizza crust', 'pizza sauce', 'mozzarella', 'ham', 'pineapple']
  }, {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['chickpeas', 'olive oil', 'garlic cloves', 'lemon', 'tahini']
  }];
  
function Recipe({id, name, ingredients}){
    return <>
        <h2>{name}</h2>
        <ul>
            {ingredients.map(ing => <li key={ing}>{ing}</li>)}
        </ul>
    </>
}

function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(rec => 
        <Recipe {...rec} key ={rec.id}></Recipe>
        )}
    </div>
  );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const poem = {
    lines: [
      'I write, erase, rewrite',
      'Erase again, and then',
      'A poppy blooms.'
    ]
  };
  
function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
        <Fragment key = {index}>
        
            <p key={index}>
            {line}
          </p>
          {index+1 !== poem.lines.length && <hr/>}
          </Fragment>
          )
        }
      </article>
    );
  }
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default function ALL() {
    return (
    <div>
        <Card title ="photo">
            <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
            /> 
        </Card>
        <Card title="description">
            <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p> 
        </Card>
        <PackingList/>
        <DrinkList/>
        <List/>
        <RecipeList />
        <Poem/>
    </div>
    );
  }
  