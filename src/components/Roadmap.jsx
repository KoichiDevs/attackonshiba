import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Phase from "../templates/Phase";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useInView } from "react-intersection-observer";
import { MdOutlineClose } from 'react-icons/md'


const Roadmap = () => {

	const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.8 })

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	};

	const contentList = [
		{
			label: "Launch",
			desc:
				<>
					<p>⚔️ Create socials</p>
					<p>⚔️ Ama&#39;s in private groups</p>
					<p>⚔️ Private sale</p>
					<p>⚔️ Launch website</p>
					<p>◈ Influencer partnerships</p>
					<p>◈ Dapps live</p>
					<p>◈ AI bot live</p>
					<p>◈ Launch on Eth, BSC, Shilb, Arb</p>
					<p>◈ Buy with fiat, googlepay, applepay</p>
					<p>◈ 500+ holders &#40;per chain&#41;</p>
				</>

		},
		{
			label: "Attack",
			desc:
				<>
					<p>◈ CM/CG Listings</p>
					<p>◈ Discord launch</p>
					<p>◈ Aggressive marketing</p>
					<p>◈ Whitepaper</p>
					<p>◈ Website V2</p>
					<p>◈ NFT group partnerships</p>
					<p>◈ 1000+ holders</p>
					<p>◈ Reward booster NFT launch</p>
					<p>◈ CEX listings</p>
					<p>◈ 10M MC</p>
				</>
		},
		{
			label: "Defend",
			desc:
				<>
					<p>◈ Burn LP</p>
					<p>◈ Bridge tokens</p>
					<p>◈ Whitepaper V2</p>
					<p>◈ 10000+ Holders</p>
					<p>◈ Metaverse collaborations</p>
				</>
		}
	]

	const [buttonActive, setActive] = useState(false)

	const open = () => {
		setActive(true)
	}

	const close = () => {
		setActive(false)
	}

	const popup = (
		<motion.div initial={{ opacity: 0 }} animate={{ opacity: 100 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-screen fixed left-0 top-0 z-50 grid place-items-center" key="RoadmapKey">
			<div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 cursor-pointer" onClick={close}></div>
			<motion.div initial={{ scale: 0.5 }} animate={{ scale: 1 }} exit={{ scale: 0.5 }} transition={{ duration: 0.3 }} className="z-10 relative w-fit h-auto px-10 pb-14 pt-10 bg-[#24191e] text-white rounded-xl">

				<h1 className="text-center font-aot text-5xl">Disclaimer!</h1>

				<MdOutlineClose className='absolute top-4 right-4  text-2xl cursor-pointer' onClick={close} />
				<p className="font-poppins max-w-[45rem] mt-5 md:text-lg text-sm">Attack on Shiba refers to all components of the project, including but not limited to the overall project, token, website, and smart contracts. As discussed in this white paper, Attack on Shiba is not a licensed, unlicensed, or exempted financial or payment service of any kind, or in any jurisdiction. The information presented herein is intended only for reference and does not have any effective or legal meaning, irrespective of any implied meanings. Additionally, since Attack on Shiba operates as a decentralized community, it has no owners, shareholders, managers, directors, or any other entities exerting control over or upon it, directly or otherwise. Attack on Shiba makes no representations as to the value or utility of its token or other assets, and does not hold itself out to be a security or regulated financial instrument of any kind. The foregoing document is not intended as an invitation or solicitation to invest in Attack on Shiba or any other investment vehicle. Nor does Attack on Shiba make any representations whatsoever as to the future performance of its investments or underlying assets, nor those of any other entity connected to the same. All users bear complete responsibility to perform adequate due diligence, including seeking legal, financial, or regulatory counsel prior to interacting with Attack on Shiba, its website, tokens, and any other assets described herein.</p>

			</motion.div>
		</motion.div>
	)

	return (
		<section className="w-full h-auto relative bg-gradient-to-b from-myblack to-[#523531]">

			<div className="absolute w-full h-full bg-topog bg-[length:400px_400px] shadow-road"></div>

			<div className="w-full h-auto mx-auto max-w-[1700px] md:px-10 px-5 text-main pt-24 z-10 relative pb-28">
				<AnimatePresence>
					{buttonActive ? popup : null}
				</AnimatePresence>

				<h1 className="font-aot lg:text-6xl text-5xl text-center">
					Our Roadmap
				</h1>

				<div className="mt-10 flex flex-col pt-20 r md:w-full md:max-w-full mx-auto max-w-[20rem]">
					<motion.img initial={{ scale: 0.5, opacity: 0 }} animate={inView ? { scale: 1, opacity: 100 } : {}} transition={{ duration: 0.4 }} src="/roadmap.webp" alt="Roadmap" className="object-fit w-full hidden md:block" ref={ref}></motion.img>
					<Slider {...settings} className="md:hidden block">
						{contentList.map((items, index) => {
							return (
								<Phase text={`Phase ${index + 1} ${items.label}`} content={items.desc} key={index} />
							)
						})}
					</Slider>
				</div>
				<div className="mx-auto w-fit h-auto px-12 py-3 font-aot text-3xl mt-10 bg-[#4a2013] text-white rounded-lg cursor-pointer" onClick={open}>Disclaimer</div>
			</div>


		</section>
	);
};

export default Roadmap;
