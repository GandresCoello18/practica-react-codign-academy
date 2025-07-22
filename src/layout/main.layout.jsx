import { Helmet } from "react-helmet-async";
import { NavBar } from '../components/navBar';
import { Footer } from '../components/footer';
import { Fragment } from 'react';

export const MainLayout = ({ children }) => {
    return (
        <Fragment>
            <Helmet>
                <title>Hello World</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <NavBar />
                <main>
                    {children}
                </main>
            <Footer />
        </Fragment>
    )
}