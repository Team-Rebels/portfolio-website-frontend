import BImage from '../../../assets/images/Banner.png';
import Charles from '../../../assets/images/profile.jpg';
import PagesLayout from '../layouts/pagesLayout';

const Overview = () => {
  return (
    <div className="p-4">
      <div className="relative w-full h-[200px]">
        <img className="w-full h-full object-cover" src={BImage} alt="Banner" />
        <img className="rounded-full w-30 h-[150px] ml-3 mt-3 absolute bottom-[-75px] left-3 border-4 border-white" src={Charles} alt="Charles" />
      </div>
      <div className="mt-[75px] p-4">
        <h1 className="text-2xl font-bold">Charles </h1>
        <p>I'm a Web Developer based in Accra, Ghana. I specialize in HTML, CSS, Javascript, React and much more.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">Experience</h2>
          <p>I specialize in web development, tourism, and javascript. I'm always striving to grow and learn something new and I don't take myself too seriously.</p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-2">About Me</h2>
          <p>I'm a passionate web developer always on the lookout for new challenges and opportunities to learn. I pride myself on not taking life too seriously and enjoy the creative process.</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-gray-200 p-2 rounded-md">React</span>
          <span className="bg-gray-200 p-2 rounded-md">Javascript</span>
          <span className="bg-gray-200 p-2 rounded-md">Problem Solving</span>
          <span className="bg-gray-200 p-2 rounded-md">Figma</span>
        </div>
      </div>
     
    </div>
  );
};

export default Overview;