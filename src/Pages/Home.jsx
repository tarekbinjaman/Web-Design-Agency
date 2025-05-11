import LeftRight from '../Components/Left-Right';
import First from '../Layouts/Home/First';
import Fourth from '../Layouts/Home/Fourth';
import Second from '../Layouts/Home/Second';
import Third from '../Layouts/Home/Third';
const Home = () => {

  return (
    <div className=''>
      <First></First>
      <div className='lg:mt-32 mt-20 lg:mb-[690px] mb-[500px] relative'>
        <Second />
        <div className='absolute w-full md:mt-[-400px] mt-[-300px] z-20'>
          <Third />
        </div>
      </div>
      <div>
        <Fourth />
      </div>

  
      </div>
  );
};
export default Home;