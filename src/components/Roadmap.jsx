import React from "react";
import { motion } from "framer-motion";
import Phase from "../templates/Phase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";

const Roadmap = () => {

	const [ref, inView] = useInView({triggerOnce: true, threshold: 0.8})

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	return (
		<section className="w-full h-auto relative bg-gradient-to-b from-myblack to-[#523531]">
			<div className="absolute w-full h-full bg-topog bg-[length:400px_400px] shadow-road"></div>

			<div className="w-full h-auto mx-auto max-w-[1700px] md:px-10 px-5 text-main pt-24 z-10 relative pb-28">
				<h1 className="font-aot lg:text-6xl text-5xl text-center">
					Our Roadmap
				</h1>

				<div className="mt-10 flex flex-col pt-20 r md:w-full md:max-w-full mx-auto max-w-[20rem]">
					<motion.img initial={{ scale: 0.5, opacity: 0 }} animate={ inView ? { scale: 1, opacity: 100 } : {}} transition={{duration: 0.4}} src="/roadmap.webp" alt="Roadmap" className="object-fit w-full hidden md:block" ref={ref}></motion.img>
					<Slider {...settings} className="md:hidden block">
						<Phase text="Phase 1" />
						<Phase text="Phase 2" />
						<Phase text="Phase 3" />
						<Phase text="Phase 4" />
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default Roadmap;
