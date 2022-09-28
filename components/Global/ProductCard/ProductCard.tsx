import TcButton from "components/UI/Button/TcButton";
import ArrowCircleLeftIcon from "components/UI/Icons/ArrowCircleLeftIcon";
import Link from "next/link";
import React, { FC } from "react";

export interface IProductCard {
	imageUrl: string;
	name: string;
	weight: string;
	percent: number;
	id: string;
	prevPrice?: string;
	currentPrice: string;
}

const ProductCard: FC<IProductCard> = ({
	imageUrl,
	name,
	weight,
	percent,
	id,
	prevPrice,
	currentPrice,
}) => {
	return (
		<div className="p-4 rounded-lg bg-t-bg-color shrink-0">
			<div className="relative mb-4">
				<img
					src={imageUrl}
					className="w-[220px] rounded-sm h-[275px] md:w-[288px] md:h-[360px] object-cover"
				/>
				<p className="absolute flex items-center px-2 pt-[6px] pb-[4px] m-0 text-xs font-medium rounded-full top-4 right-3 bg-t-success-color text-t-bg-color">
					%{percent}
				</p>
			</div>
			<div className="flex justify-between mb-6">
				<span className="text-xs font-normal md:text-sm">
					{name}
				</span>
				<span className="text-[10px] font-normal ">
					{weight}
				</span>
			</div>
			<div className="flex flex-col-reverse items-end justify-between gap-2 md:flex-row ">
				<Link passHref href={"/" + id}>
					<a>
						<TcButton
							type="primary"
							className="flex items-center h-8 mb-1 text-xs font-medium"
						>
							جزئیات محصول
							<ArrowCircleLeftIcon
								fill="var(--bg-color)"
								className="inline mr-2"
							/>
						</TcButton>
					</a>
				</Link>
				<div className="">
					<p className="text-[10px] md:text-xs text-t-secondary-text-color font-bold text-left">
						{prevPrice}
					</p>
					<p className="m-0 text-xs font-bold md:text-lg">
						{currentPrice}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
