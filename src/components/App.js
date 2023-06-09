// create your App component here
import react, { useState, useEffect } from "react";

function App() {
    const [temp, setTemp] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

   

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then(data => {
                setTemp(data.message)
                setIsLoaded(true)
            })
    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return (
        <div>
            <img src={temp} alt="A Random Dog"/>
        </div>
    )

}


export default App
