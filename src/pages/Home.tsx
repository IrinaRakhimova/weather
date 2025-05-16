import { Helmet } from 'react-helmet-async';

const Home = () => (
  <>
    <Helmet>
      <title>Home | Weather App</title>
      <meta name="description" content="Check out the latest weather forecast in Berlin!" />
    </Helmet>
    <div className="page-container">
      <h1>Welcome to Weather App</h1>
      <p>Check the 3-day forecast and learn more about this app.</p>
    </div>
  </>
);
export default Home;