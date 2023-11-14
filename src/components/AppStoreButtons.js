import Image from 'next/image';
import { FaStar, FaRegStar } from 'react-icons/fa';

const AppStoreButtons = () => {
  const rating = 4.5; //replace this with your app's actual rating
  const fullStars = Math.floor(rating);
  const halfStars = rating % 1 !== 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-2 lg:space-x-4 mt-4">
      <button className="flex items-center bg-black text-white rounded-lg px-3 lg:px-4 pr-4 lg:pr-5 py-2 space-x-2 hover:opacity-80 transition ease-in-out duration-200">
        <div className="flex-shrink-0">
          <Image
            src="/images/apple.png"
            className="w-6 h-6 lg:w-10 lg:h-10"
            alt="App Store Icon"
            width={64}
            height={64}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs">Download on the</span>
          <span className="text-xl font-semibold">App Store</span>
        </div>
      </button>

      <div className="flex flex-col space-y-1 pl-2 lg:pl-0">
        <div className="flex items-center justify-between">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar
              key={i}
              className="text-yellow-400"
              data-aos="fade-left"
              data-aos-delay={300}
            />
          ))}
          {halfStars === 1 && (
            <FaStar
              className="text-yellow-400"
              style={{ clipPath: 'inset(0 50% 0 0)' }}
              data-aos="fade-left"
              data-aos-delay={400}
            />
          )}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar
              key={i}
              className="text-yellow-400"
              data-aos="fade-left"
              data-aos-delay={500}
            />
          ))}
        </div>
        <span
          data-aos="fade-up"
          data-aos-delay={500}
          className="text-xs lg:text-sm text-gray-500 font-semibold"
        >
          100+ App Store ratings
        </span>
      </div>
    </div>
  );
};

export default AppStoreButtons;
