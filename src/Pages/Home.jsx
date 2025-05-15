import LatestVisas from '../Components/LatestVisas';
import ExtraSection1 from '../Components/ExtraSection1';
import Banner from '../Components/Banner';
import HowWeWork from '../Components/HowWeWork';
import FAQ from '../Components/FAQ';
import VisaNews from '../Components/VisaNews';
import PopularDestinations from '../Components/PopularDestinations';

const Home = () => {

  return (
    <div>
      <Banner />
      <LatestVisas />
      <ExtraSection1 />
      <PopularDestinations></PopularDestinations>
      <HowWeWork></HowWeWork>
      <VisaNews></VisaNews>
      <FAQ></FAQ>
    </div>
  );
};

export default Home;
