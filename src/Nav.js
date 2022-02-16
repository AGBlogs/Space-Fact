import './Nav.css'
import Blog from './Blg1.js'
import Blog2 from './Blg2.js'
import Logo from './Logo1.png'

function Nav() {
    return (
        <div>
            <header id="nav-wrapper">
            <nav id="nav">
              <div className="Logo">
                <div className="AG"><img src={Logo} alt="" width="50px" height="50px" /></div>
                <div className="read"></div>
              </div>
              <div className="right" id="right">
                <ul className="ani">
                <li>Home</li>
                <li>Blogs</li>
                <li>About</li>
                <li>Mode</li>
                </ul>
              </div>
              <div className="nav-short" id="nav-short" onClick={navshort}>
                Menu O
              </div>
              
            </nav>
          </header>
          <Blog />

        </div>
    )

}

var menu = true;
function navshort() {
                const navElement = document.getElementById("right");
                if (menu) {
                navElement.style.display = "block";
                }
                else {
                  navElement.style.display = "none";
                }
                menu = !menu;
              }
export default Nav;