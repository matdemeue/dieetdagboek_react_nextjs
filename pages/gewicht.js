import Head from "next/head";
import dynamic from "next/dynamic";

import Menu from "../components/layouts/menu";
import Footer from "../components/layouts/footer";
import { useAuth } from "../firebase/auth";

const NoSSRComponent = dynamic(() => import("../components/blocks/fields/plotly"), {
  ssr: false,
});

const GewichtPage = () => {
  const { user } = useAuth();

  return (
    <div>
      <Head>
        <title>Dieet Dagboek | by Mathieu DM</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Cookie&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Menu />

      {!user ?
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1>Je bent niet ingelogd!</h1>
          </div>
        </div>
      </div>
      :
      <NoSSRComponent />
      }     
      <Footer />

      <script
        src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
        integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
        crossOrigin="anonymous"
      ></script>
      <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
      <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
        integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
        crossOrigin="anonymous"
      ></script>
      <script src="/dev-assets/js/masonry.js"></script>
    </div>
  );
};

export default GewichtPage;
