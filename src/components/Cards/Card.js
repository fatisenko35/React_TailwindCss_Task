import React from "react";
import LikeIcon from "../../Utils/Icons/LikeIcon";
import ConfirmIcon from "../../Utils/Icons/ConfirmIcon";

const Card = ({
	image,
	headerText,
	address,
	fee,
	detailText,
	bathroomNumber,
	roomNumber,
	loungeNumber,
	netArea,
}) => {
	return (
		<div className="rounded-lg shadow ">
			<div className=" h-[13.25rem] space-y-2.5 relative">
				<img
					className="w-full h-full object-cover object-center rounded-t-lg"
					src={image && image[0]}
					alt={headerText}
				/>
				<button
					type="button"
					className="text-[#484848] absolute top-0 right-3 cursor-pointer"
				>
					<LikeIcon />
				</button>
			</div>
			<div className="flex flex-col justify-center space-y-2.5 p-5 h-[13rem] bg-blue_light_extra">
				<div className="font-[Montserrat]">
					<div className="flex items-center space-x-2.5">
						<p className=" overflow-ellipsis overflow-hidden 2xl:text-lg whitespace-nowrap text-sm md:text-base">
							{fee} / Aylık
						</p>
						<ConfirmIcon />
					</div>
				</div>
				<div className="font-[Montserrat]">
					<p className=" overflow-ellipsis font-medium text-[#484848] capitalize overflow-hidden 2xl:text-base whitespace-nowrap text-xs md:text-sm">
						{address?.toLowerCase()}
					</p>
				</div>
				<div className="font-[Montserrat]">
					<p className=" overflow-ellipsis font-medium text-[#484848] overflow-hidden 2xl:text-base whitespace-nowrap text-xs md:text-sm">
						{detailText}
					</p>
				</div>
				<div className="flex flex-grow items-end justify-between space-x-2.5">
					<div className="font-[Montserrat]">
						<p className=" overflow-ellipsis text-[#484848] overflow-hidden 2xl:text-lg whitespace-nowrap text-sm md:text-base">
							{netArea}m² Net
						</p>
					</div>
					<div className="font-[Montserrat]">
						<p className=" overflow-ellipsis text-[#484848] font-medium overflow-hidden  2xl:text-lgwhitespace-nowrap text-sm md:text-base">
							{roomNumber}+{loungeNumber} | {bathroomNumber} Banyo
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
