//services
import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/apiServices"
import { Link } from "react-router-dom"
function StarshipList() {

  
  
  const[starshipList, setStarshipList] = useState([])

  useEffect(() =>{
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarshipList(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  if(!starshipList.length) return <h1>Loading...</h1>

  return (
    <>
      <div className='main-body'>
        <h1>STAR WARS STARSHIPS</h1>
        <div className='starship-list'>
          {starshipList.map((starship, idx) =>
            <div className="starship" key={idx}>
              <Link to={`/starships/${starship.name}`}>{starship.name}</Link>
            </div>)}
        </div>
      </div>
    </>
  )
}

export default StarshipList