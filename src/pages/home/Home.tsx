import "./home.scss";

import TextBox from "../../components/textBox/TextBox";

/*
homepage of the application
only the text box is rendered
menu is not visible for the homepage, it is only visible for pages with logged in users
static text is rendered in the text box (TODO: move it to data.ts)
*/

// define text variables
const pageTitle = "";
const pageSubtitle =
  "Unlocking Financial Potential: Mint Easy’s AI-Driven Insights";
const pageText = ` Welcome to Mint Easy, where financial empowerment meets simplicity. 
We're not just another platform; we're your ally in navigating the dynamic world of day trading and stock investments.
   At Mint Easy, we create advanced financial simulations, leveraging AI models and market analysis,
    to provide you with the best insights. 
    The best part? 
    We don't take a cut from your investments, ensuring our independence and commitment to delivering unbiased, top-notch information. 
    Join us on your journey to financial success – it's about time it became Mint Easy!`;

const Home = () => {
  return (
    <div className="home">
      <div className="box box2">
        <TextBox
          pageTitle={pageTitle}
          pageSubtitle={pageSubtitle}
          pageText={pageText}
        />{" "}
      </div>
    </div>
  );
};

export default Home;
