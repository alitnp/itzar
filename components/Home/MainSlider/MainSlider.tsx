import TcButtonZar from "components/UI/Button/TcButtonZar";
import ArrowLeftIcon from "components/UI/Icons/ArrowLeftIcon";
import ArrowSmallDownIcon from "components/UI/Icons/ArrowSmallDownIcon";
import Image from "next/image";
import React from "react";

const MainSlider = () => {
	return (
		<div className="w-full h-[480px] relative">
			<Image
				src="/image/sliderImage.jpg"
				layout="fill"
				objectFit="contain"
				objectPosition="left"
			/>
			<div className="absolute flex w-full h-full">
				<div className="flex items-center justify-center w-8 h-full cursor-pointer bg-t-bg-gray">
					<ArrowSmallDownIcon className="-rotate-90" />
				</div>
				<div className="relative w-full h-full ">
					<div className="absolute bottom-0 right-0 flex flex-col p-8">
						<h4 className="text-2xl font-bold">
							زیبایی و مُد را در دستان خود داشته باشید!
						</h4>
						<span className="mt-4 text-sm font-medium">
							دستبند و انگشترهای زیبا از برند های لاکچری
						</span>
						<div className="mt-6">
							<TcButtonZar>
								<p className="flex items-center justify-center gap-x-2">
									مشاهده محصولات
									<ArrowLeftIcon />
								</p>
							</TcButtonZar>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center w-8 h-full cursor-pointer bg-t-bg-gray">
					<ArrowSmallDownIcon className="rotate-90" />
				</div>
			</div>
		</div>
	);
};

export default MainSlider;
