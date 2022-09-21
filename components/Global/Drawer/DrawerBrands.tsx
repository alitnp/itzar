import Accordion from "components/UI/Accordion/Accordion";
import BrandsIcon from "components/UI/Icons/BrandsIcon";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
const imageUrl = "/image/icon/StarIcon.jpeg";

const fakeData = [
	"انگشتر",
	"ست ها",
	"گردنبند",
	"آویز",
	"گوشواره",
	"پابند",
	"ساعت",
	"سرویس",
	"سکه",
	"متفرقه",
];

interface IDrawerBrands {}

const DrawerBrands: FC<IDrawerBrands> = () => {
	return (
		<Accordion
			title={
				<div className="flex gap-x-2">
					<BrandsIcon />
					برند ها
				</div>
			}
		>
			<div className="flex flex-wrap justify-center gap-2">
				{fakeData.map((item) => (
					<Link href="" passHref key={item}>
						<a
							className="flex flex-col items-center gap-2 font-medium border rounded-md border-t-border-color-24 text-t-secondary-text-color h-[80px] justify-center cursor-pointer hover:text-t-secondary-text-color "
							style={{ width: "calc(33.33% - 5.33px)" }}
						>
							<Image src={imageUrl} width="24px" height="24px" />
							<span>{item}</span>
						</a>
					</Link>
				))}
			</div>
		</Accordion>
	);
};

export default DrawerBrands;
