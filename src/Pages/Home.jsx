import LeftRight from '../Components/Left-Right';
const Home = () => {
  const img1= "https://t4.ftcdn.net/jpg/06/81/35/49/360_F_681354997_LjEvGcOg8YeK58dsOfGn8wJV5IFvxI77.jpg";
  
    return (
      <div>
        <h1>This is home</h1>
        <div style={{ height: '100vh' }} />
  
      <div>
        <LeftRight img1={"https://t4.ftcdn.net/jpg/06/81/35/49/360_F_681354997_LjEvGcOg8YeK58dsOfGn8wJV5IFvxI77.jpg"}></LeftRight>
      </div>
  
        <div style={{ height: '100vh' }} />
        <div className='flex justify-between'>
          <div></div>
          <div><p>Tarek</p></div>
        </div>
      </div>
    );
  };
  export default Home;