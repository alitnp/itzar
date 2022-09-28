import TcButtonZar from "components/UI/Button/TcButtonZar";
import ArrowLeftIcon from "components/UI/Icons/ArrowLeftIcon";
import ArrowSmallDownIcon from "components/UI/Icons/ArrowSmallDownIcon";
import Image from "next/image";
import React from "react";

const MainSlider = () => {
	return (
		<div className="w-full md:h-[481px] relative flex flex-col border-b border-t-text-color">
			<div className="relative flex justify-end sm:h-[480px] w-full md:absolute">
				<div className="absolute top-0 right-0 z-10 flex items-center justify-center w-8 h-full cursor-pointer bg-t-bg-gray opacity-60 ">
					<ArrowSmallDownIcon className="-rotate-90" />
				</div>
				<div className="absolute top-0 left-0 z-10 flex items-center justify-center w-8 h-full cursor-pointer bg-t-bg-gray opacity-60 ">
					<ArrowSmallDownIcon className="rotate-90" />
				</div>
				<Image
					src="/image/sliderImage.jpg"
					width="768"
					height="480"
					objectFit="contain"
					objectPosition="left"
				/>
			</div>
			<div className="flex w-full h-full md:absolute">
				<div className="relative w-full h-full ">
					<div className="bottom-0 flex flex-col p-8 right-4 xl:right-8 2xl:right-16 md:absolute">
						<h4 className="text-2xl font-bold">
							زیبایی و مُد را در دستان خود داشته باشید!
						</h4>
						<span className="mt-4 text-sm font-medium">
							دستبند و انگشترهای زیبا از برند های لاکچری
						</span>
						<div className="mt-6 w-fit">
							<TcButtonZar>
								<p className="flex items-center justify-center gap-x-2">
									مشاهده محصولات
									<ArrowLeftIcon />
								</p>
							</TcButtonZar>
							<div className="flex justify-center gap-2 mt-4">
								{Array.from(Array(4).keys()).map((item) => (
									<div
										key={item}
										className={`${
											item === 2
												? "w-4 bg-t-text-color"
												: "w-2 bg-t-secondary-text-color"
										} h-2 rounded-full transition-all duration-300 cursor-pointer`}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainSlider;
