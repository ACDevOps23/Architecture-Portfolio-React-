import React from 'react';
import Header from './Header';
import About from "./About";
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contacts from './Contacts';
import { ToastContainer } from 'react-toastify';

import Footer from './Footer';

const App = () => {
    return (
        <div className='w-full overflow-hidden'>
            <ToastContainer />
            <Header />
            <About />
            <Projects />
            <Testimonials />
            <Contacts />
            <Footer />
        </div>
    )
}

export default App