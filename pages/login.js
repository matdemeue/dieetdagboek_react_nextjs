import Head from "next/head";
import { useState } from 'react';
import Menu from "../components/layouts/menu";
import Homehero from "../components/blocks/home/hero";
import Footer from "../components/layouts/footer";
import FoodList from "../components/blocks/fields/foodsList";
import { useAuth } from "../firebase/auth";
import { useRouter } from 'next/router';


const Login = () => {
    const { login, user } = useAuth();
    const router = useRouter();

    const [signInForm, setSignInForm] = useState({
        txtEmail: '',
        txtPassword: ''
    });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
    
        const result = await login(signInForm.txtEmail, signInForm.txtPassword);
        console.log(result);

        router.push('/');
    }

    const handleInputChange = async (ev) => {
        setSignInForm({
          ...signInForm,
          [ev.target.name]: ev.target.value
        })
    };

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
            <div className="container pt-5">
                <div className="row d-flex flex-column align-items-center">
                    <div className="col-12 col-lg-6 mb-3">
                        <h1>Log hier in...</h1>
                    </div>
                    <div className="col-12 col-lg-6">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="txtEmail">Email adres</label>
                                <input type="email" className="form-control" id="txtEmail" name="txtEmail"  aria-describedby="emailHelp" onChange={handleInputChange} value={signInForm.txtEmail} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="txtPassword">Wachtwoord</label>
                                <input type="password" className="form-control" id="txtPassword" name="txtPassword" onChange={handleInputChange} value={signInForm.txtPassword} />
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                        </form>
                    </div>
                </div>
            </div>

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

export default Login;
