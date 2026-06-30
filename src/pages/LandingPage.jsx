import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
function LandingPage()
{
    return( <>
    <Navbar/>
    <Hero/>
    <Features/>
    <HowItWorks/>
    <Benefits/>
    <CTA/>
    <Footer/>
    <h1>Landing Page</h1>
    </>
    );
}

export default LandingPage;