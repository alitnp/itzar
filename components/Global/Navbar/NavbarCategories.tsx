import TcButtonZar from "components/UI/Button/TcButtonZar";
import ArrowLeftIcon from "components/UI/Icons/ArrowLeftIcon";
import React, { FC } from "react";

interface INavbarCategories {
	parentHovered: boolean;
}

const fakeDataChild = [
	{
		name: "دسبند",
		children: ["النگو", "تک پوش", "تمیمه(دستبند عربی)"],
	},
	{
		name: "انگشتر",
		children: ["حلقه ست", "حلقه نامزدی"],
	},
	{
		name: "ست ها",
		children: [
			"نیم ست",
			"ست مدال و انگشتر",
			"ست دستبند و انگشتر",
		],
	},
	{
		name: "گردنبند",
		children: ["زنجیر", "گردنی", "رولباسی"],
	},
	{
		name: "آویز",
		children: ["پلاک", "مدال", "حروف"],
	},
];

const fakeDataParent = [
	"گوشواره",
	"پابند",
	"ساعت",
	"سرویس",
	"سکه",
	"متفرقه",
];

const NavbarCategories: FC<INavbarCategories> = ({
	parentHovered,
}) => {
	return (
		<div
			className={`transition-all hidden duration-300 absolute hover:max-h-screen max-h-0  hover:opacity-100 top-full md:flex w-full   bg-t-bg-color z-50 shadow-lg overflow-hidden hover:p-6 ${
				parentHovered
					? "max-h-screen opacity-100 p-6 border-b"
					: "max-h-0 opacity-0 border-none"
			}`}
		>
			<div className="flex items-stretch justify-between w-full gap-x-6 t-container">
				<div className="w-full">
					<div className="flex justify-between w-full gap-x-6">
						{fakeDataChild.map((item, key) => (
							<div key={key} className="min-w-[72px]">
								<p className="pb-1 mb-1 text-sm font-bold border-b">
									{item.name}
								</p>
								<div className="flex flex-col gap-3">
									{item.children.map((element, index) => (
										<p
											key={index}
											className="m-0 text-[12px] font-light cursor-pointer hover:underline"
										>
											{element}
										</p>
									))}
								</div>
							</div>
						))}
					</div>
					<div className="flex flex-wrap justify-between w-full pt-6 mt-6 border-t gap-x-6">
						{fakeDataParent.map((item, index) => (
							<p
								key={index}
								className="min-w-[72px] text-sm font-bold cursor-pointer hover:underline"
							>
								{item}
							</p>
						))}
					</div>
				</div>
				<div className="w-1/2 h-full rounded-t-md ">
					<img src="" alt="" className="w-full h-36" />
					<div className="flex flex-col gap-2 p-4 overflow-hidden border border-t-0 border-t-border-color-16 rounded-b-md">
						<span className="text-xl font-bold">
							با ما عاشق خرید میشوید!
						</span>
						<span className="text-xs font-normal">
							محصولات شارژ شده پر طرفدار
						</span>
						<TcButtonZar classNames="w-full">
							<p className="flex items-center justify-center gap-x-2">
								مشاهده محصولات
								<ArrowLeftIcon />
							</p>
						</TcButtonZar>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavbarCategories;
