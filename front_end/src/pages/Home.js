import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <Link to="/connection">
        <button>Créer Maintenant</button>
      </Link>
      <p>
        Bienvenu sur ...., L’outil qui vous aidera dans vos créations
        scénaristiqes.
      </p>
      <div>
        <section>
          <h2>A PROPOS DE</h2>
          <p>
            ... est un logiciel en ligne de création d’univers scénaristique, il
            vous permet de facilité vos création et vous guider.
          </p>
        </section>
        <section>
          En vous inscrivant, vos création pourrons être enregistrés sur votre
          compte.
        </section>
      </div>
    </div>
  );
};
export default Home;
