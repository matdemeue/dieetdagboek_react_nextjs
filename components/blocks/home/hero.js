import Link from "next/link";
import Typewriter from "typewriter-effect";

const Homehero = () => {
  return (
    <div className="jumbotron jumbotron-fluid hero mb-0">
      <div className="container">
        <h1 className="display-4 mb-2">Mijn dieet dagboek</h1>
        <hr className="my-4" />
        <Link href="/specifieke-dag">
          <a className="btn btn-primary btn-lg" role="button">
            Zoek een specifieke dag!
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Homehero;
