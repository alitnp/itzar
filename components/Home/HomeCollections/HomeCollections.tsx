import Image from "next/image";
import React, { FC } from "react";

interface IHomeCollections {}

const fakeData = [
	"گوشواره",
	"آویز",
	"انگشتر",
	"دستبند",
	"گردنبند",
	"پابند",
];
const imageUrl = "/image/icon/StarIcon.jpeg";
const HomeCollections: FC<IHomeCollections> = () => {
	return (
		<div className="border border-transparent t-container">
			<div className="py-4 my-6 md:py-6 md:my-16">
				<h4 className="mb-4 text-base font-medium text-center md:mb-12 md:text-xl md:font-bold">
					کالکشن محصولات
				</h4>
				<div className="flex flex-wrap justify-center gap-4">
					{fakeData.map((item) => (
						<div
							key={item}
							className="flex flex-col items-center justify-center border rounded-full cursor-pointer w-28 h-28 md:w-44 md:h-44 hover:bg-t-bg-gray border-t-bg-layer"
						>
							<img
								src={imageUrl}
								className="w-8 h-8 mb-2 md:w-14 md:h-14 md:mb-4"
							/>
							<p className="m-0 mb-1 text-sm font-bold md:text-base md:font-medium">
								{item}
							</p>
							<p className="m-0 text-xs font-normal md:text-sm md:font-light ">
								۱۳۲۰ آیتم
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default HomeCollections;
