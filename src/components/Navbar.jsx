import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <>
                <div>
      <nav style ={{background:"#421917",display:"flex",justifyContent:"space-between ", padding: "0.1% calc((100vw - 1000px) / 2)", zIndex: "1"}} className="navbar navbar-expand-lg ">
        <div style ={{display:"flex",justifyContent:"space-between "}}className="container">
          <h3 style={{color:"white",textDecoration: 'none',fontSize:"120%"}}>
            {" "}
             User Managment System{" "}
          </h3>
          </div>
          </nav>
          </div>         
        </>
    )
}
