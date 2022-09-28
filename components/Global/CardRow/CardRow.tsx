import ProductCard, {
	IProductCard,
} from "components/Global/ProductCard/ProductCard";
import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface ICardRow {
	name: string;
	icon?: ReactNode;
	allUrl?: string;
	products?: IProductCard[];
}

const CardRow: FC<ICardRow> = ({
	name,
	icon,
	allUrl,
	products,
}) => {
	return (
		<div className="py-4 mb-6 md:mb-16 md:py-12 bg-t-bg-gray">
			<div className="flex justify-between t-container">
				<div className="flex gap-2">
					<p className="m-0 text-sm font-medium md:font-bold md:text-2xl">
						{name}
					</p>
					{icon}
				</div>
				{allUrl && (
					<Link href={allUrl} passHref>
						<a className="text-sm font-bold underline text-t-primary-color">
							مشاهده همه
						</a>
					</Link>
				)}
			</div>
			<div className="t-container">
				<div className="flex gap-4 mt-6 overflow-x-auto">
					{products?.map((item) => (
						<ProductCard key={item.id} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CardRow;
