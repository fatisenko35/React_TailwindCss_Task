import React, { useEffect, useState } from "react";
import Card from "./Card";
// import axios from "axios";

const Cards = () => {
	const [items, setItems] = useState([]);
	// const fetchDatas = async () => {
	// 	let data = JSON.stringify({
	// 		page_number: 1,
	// 		number_of_advert: 20,
	// 		advert_order_menu_id: 3,
	// 		mapData: null,
	// 		cityRequest: null,
	// 		advertListDetailData: {},
	// 		property_type_ids: null,
	// 	});

	// 	let config = {
	// 		method: "post",
	// 		maxBodyLength: Infinity,
	// 		url: "https://dev.guvenlekirala.tech/api/v1/advertlist",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		data: data,
	// 	};

	// 	axios
	// 		.request(config)
	// 		.then((response) => {
	// 			console.log(JSON.stringify(response.data));
	// 		})
	// 		.catch((error) => {
	// 			console.log(error);
	// 		});
	// };
	useEffect(() => {
		// fetchDatas();
		fetch("http://localhost:3001/advertListDatas")
			.then((res) => res.json())
			.then((result) => setItems(result));
	}, []);
	return (
		<div className="xl:px-12 xl:mx-11 xl:py-12 md:px-6 md:mx-6 md:py-6 p-4 my-1">
			<div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-30 pb-30 px-2.5">
				{items?.map(
					(
						{
							photo_links,
							advert_header_text,
							public_address,
							monthly_rental_fee,
							detail_text,
							bathroom_number,
							room_number,
							lounge_number,
							net_area,
						},
						index
					) => (
						<Card
							key={index}
							image={photo_links}
							headerText={advert_header_text}
							address={public_address}
							detailText={detail_text}
							fee={monthly_rental_fee}
							bathroomNumber={bathroom_number}
							roomNumber={room_number}
							loungeNumber={lounge_number}
							netArea={net_area}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Cards;
