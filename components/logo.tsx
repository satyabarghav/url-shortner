import logo from '@/public/main.png'
import Image from 'next/image'
const Main = () =>{
    return(
        <Image
            src={logo}
            alt='KL University Logo'
            width={100}
            />

    );
};

export default Main