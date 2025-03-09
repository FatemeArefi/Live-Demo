import Banner from "./components/Banner";
import ContactForm from "./components/ContactForm";
import Customers from "./components/Customers";
import FAQ from "./components/FAQ";
import Services from "./components/Services";
import Team from "./components/Team";
import "./index.css";

import Layout from "./pages/Layout";

const App = () => {
  return (
    <div>
      <Layout>
        <Banner />
        <Services />
        <Customers />
        <Team />
        <FAQ />
        <ContactForm />
      </Layout>
    </div>
  );
};

export default App;
