import { useState } from "react";
import Axios from "axios";
import { GiChefToque } from "react-icons/gi";
import "./index.css";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showBtnPage, setShowBtnPage] = useState(false);
  const [notFound, setNotFound] = useState(false)


  const getRecipe = (int) => {
    setPage(int)
    Axios.get("https://recipe-puppy.p.rapidapi.com/", {
      params: { p: int, q: search },
      headers: {
        "x-rapidapi-key": "0d2e021592msh16cb129f85a578fp19a4e6jsnf7bb97a141b6",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      },
    })
      .then((res) => {
        console.log(res.data)
        if(res.data.results.length === 0){
         setNotFound(true)
          return
        }
          setNotFound(false)
          setRecipe(res.data.results);
          setShowBtnPage(true);
        
      })
      .catch((err) => alert(err));
  };

  const renderRecipe = () => {
    if (recipe.length > 0) {
      return recipe.map((i) => {
        console.log(i.thumbnail);
        return (
          <div className="card">
            <a href={i.href}>
              <div className="card-content">
                <div>
                  <h2>{i.title}</h2>
                  <p>{i.ingredients}</p>
                </div>
                <div>
                  <img
                    className="recipe-img"
                    src={i.thumbnail}
                    alt={i.title + " image"}
                  />
                </div>
              </div>
            </a>
          </div>
        );
      });
    }
  };

 
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          <GiChefToque className="icon" /> Recipe App
        </h1>
        <div className="search-cont">
          <input
            className="input-form"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search recipe or ingredients"
          />

          <button className="btn" onClick={() => getRecipe(1)}>
            Search
          </button>
        </div>
        {notFound?
           <h2>Recipe not found!</h2> :
           renderRecipe()
        }
       
        
        {showBtnPage ? (
          <div className="btn-page-cont">
            <button
              className="btn"
              hidden={page === 1}
              onClick={() => getRecipe(page - 1)}
            >
              {"<"}
            </button>
            <h5>{page}</h5>
            <button className="btn" onClick={() => getRecipe(page + 1)}>
              {">"}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
