import {Carousel} from "react-responsive-carousel";
import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Banner(){
    return(
        <div className="relative">
            <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
            <Carousel  autoPlay infiniteLoop showStatus={false} showIndicators={false} showThumbs={false} interval={5000}>
                <div>
                <Image src="https://links.papareact.com/gi1" loading="lazy" alt="" width={1000} height={400} />
                </div>
                <div><Image src="https://links.papareact.com/6ff" loading="lazy" alt="" width={1000} height={400} /></div>
                <div><Image src="https://links.papareact.com/7ma" loading="lazy" alt="" width={1000} height={400} /></div>
            </Carousel>
        </div>
    );
}

export default Banner