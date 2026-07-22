import "./Lobby.css";
import { useState, useEffect } from "react";
import { FaTelegramPlane, FaInstagram, FaGithub } from "react-icons/fa";

const rooms = [
  {
    id: 1,
    name: "SIK-K",
    image: "/images/doors/closed.png",
  },
  {
    id: 2,
    name: "HAON",
    image: "/images/doors/closed.png",
  },
  {
    id: 3,
    name: "JMIN",
    image: "/images/doors/closed.png",
  },
  {
    id: 4,
    name: "NOWIMYOUNG",
    image: "/images/doors/closed.png",
  },
  {
    id: 5,
    name: "KC",
    image: "/images/doors/closed.png",
  },
];

function Lobby() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
 
    useEffect(() => {

     const handleScroll = () => {

       if (window.scrollY > 50) {
          setScrolled(true);
      } else {
          setScrolled(false);
      } 
   };
     window.addEventListener("scroll", handleScroll);


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    }, []);
  return (
    <main className="lobby">

      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>

        <div className="logo">
          kc gang
        </div>

        <button 
            className="menuButton"
            onClick={() => setMenuOpen(!menuOpen)}
        >
             ☰
        </button>

      </header>
        {menuOpen && (

        <nav className="dropdownMenu">

            <a href="#">Home</a>

            <a href="#">Artists</a>

            <a href="#">About</a>

            <a href="#">Links</a>

        </nav>

    )}

      <section className="hero">

        <h1>KC ARCHIVES</h1>

        <p>Choose your room</p>


        <section className="doors">

          {rooms.map((room) => (

            <article
              className="doorCard"
              key={room.id}
            >

              <img
                src={room.image}
                alt={room.name}
                className="door"
              />

              <h3>{room.name}</h3>

            </article>

          ))}

          

        </section>

      </section>



    <footer className="footer">

      <div className="archiveLogos">

          <img 
            src="/src/assets/images/logo1.png"
            alt="KC logo"
          />

          <img 
            src="/src/assets/images/logo2.png"
            alt="Creator logo"
          />

      </div>

      <h2>About KC Archives</h2>

      <p className="footerDescription">
        Fan-made archive • Not affiliated with KC
      </p>

      <div  className="footerLinks">
          <a
            href="https://t.me/gangkcgang"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegramPlane />
          </a>

          <a
             href="https://www.instagram.com/kc_gang_ru?igsh=MXV4MHBuZXR1azZ6Mg=="
            target="_blank"
             rel="noreferrer"
           >
              <FaInstagram />
          </a>
          <a
             href="https://t.me/is_you_seoki"
             target="_blank"
              rel="noreferrer"
          >
            <FaTelegramPlane />
         </a>

          <a
              href="https://www.instagram.com/is_you_seoki?igsh=MTBtOWYyemJuc3JnbA%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
           >
            <FaInstagram />
          </a>
       </div>
    



        <p className="copyright">
         © 2026 KC Archives
          <br />
         Made with ♡︎ by kc gang / seoki
          <br />
          This is an unofficial fan project
        </p>

      </footer>
    </main>
  );
}

export default Lobby;