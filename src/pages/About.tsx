import { Helmet } from 'react-helmet-async';

const About = () => (
  <>
    <Helmet>
      <title>About | Weather App</title>
      <meta name="description" content="This is a simple React weather app using Open-Meteo API." />
    </Helmet>
    <div className="page-container">
      <h1>About This App</h1>
      <p>This app uses Open-Meteo API to show a 3-day forecast for Berlin.</p>
    </div>
  </>
);
export default About;