import React from 'react';
import { Link } from "react-router-dom";

const Workspace = () => {
    return (
        <div className="Workspace">
        <form className="row justify-content-center">
           <Link to='/concepts'><button>Conceptes</button></Link> 
           <Link to='/characters'><button>Personnages</button></Link> 
           <Link to='/historic'><button>Histoire</button></Link>  
           <Link to='/geography'><button>Cartographie</button></Link>  
           <Link to='/scenario'><button>Scénario</button></Link>  
        </form>
        </div>
    )
}
export default Workspace