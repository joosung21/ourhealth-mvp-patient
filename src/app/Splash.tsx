import { useNavigate } from 'react-router-dom';
import { Center, Image } from '@mantine/core';
import Logo from '@/assets/logo-white.svg';

export default function SplashScreen() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/register-entry');
  }, 1600);

  return (
    <div className="container !p-0">
      <div className="absolute h-full w-full bg-[#266770]" />
      <div
        className="absolute h-full w-full opacity-20 grayscale blur-[15px] bg-center bg-cover"
        style={{
          backgroundImage: `url('/src/assets/splash-mask.png')`,
        }}
      />
      <Center className="absolute w-full h-full">
        <Image src={Logo} alt="Our Health Logo" className="mb-[100px]" />
      </Center>
    </div>
  );
}
