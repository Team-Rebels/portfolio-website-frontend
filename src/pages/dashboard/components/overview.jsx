import BImage from '../../../assets/images/Banner.png';
import Charles from '../../../assets/images/profile.jpg';

const Overview = () => {
  return (
    <div>
      <img className="w-full h-[30%] object-cover" src={BImage} alt="Banner image" />
      <img className="rounded-full w-30 h-[150px] ml-3 mt-3" src={Charles} alt="Charles Image" />


    </div>
  )
}

export default Overview