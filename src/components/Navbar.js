import React,{useState, useEffect} from 'react'


function Navbar() {

const [offset, setOffset] = useState();

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset > 100)
    }
  }, []);

  console.log(offset); 

    return (
        <div className={offset ? "nav_fade" : "nav"}>
            <img className="nav_logo" src="https://www.freepnglogos.com/uploads/netflix-logo-text-emblem-31.png" alt="Netflix Logo"/>
            <img className="nav_avatar" src="https://i.imgur.com/fXJosY6.jpeg" alt="Avatar"/>
        </div>
    )
}

export default Navbar
