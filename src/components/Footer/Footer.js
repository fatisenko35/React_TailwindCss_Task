import React from "react";
import HomeIcon from "../../Utils/Icons/HomeIcon";
import InstagramIcon from "../../Utils/Icons/InstagramIcon";
import FacebookIcon from "../../Utils/Icons/FacebookIcon";
import TwitterIcon from "../../Utils/Icons/TwitterIcon";
import LinkedlnIcon from "../../Utils/Icons/LinkedlnIcon";

const Footer = () => {
	const footerDatas = [
		{
			title: "Hakkımızda",
			listDatas: [
				"Güvenlekirala nedir?",
				"Nasıl Kullanılır",
				"Avantajları Nelerdir",
			],
		},
		{
			title: "Kariyer",
			listDatas: [
				"Gayrimenkul Ortağı",
				"Fotoğrafçı Olmak",
				"Ödeme ve Hizmetler",
				"Süreçler ve Sözleşmeler",
				"Güvenli Kiracı Nedir?",
			],
		},
		{
			title: "Evinizi Kiralayın",
			listDatas: [
				"Evimi Nasıl Kiralarım?",
				"Ödemeler ve Vergilendirme",
				"Nasıl İyi Ev Sahibi Olunur?",
				"Kullanıcı Yorumları",
				"Bilgi Merkezi",
			],
		},
		{
			title: "Yardım ve Destek",
			listDatas: ["Sıkça Sorulan Sorular", "Bilgi Merkezi", "Destek Hattı"],
		},
	];
	return (
		<footer className="mt-60 md:mt-120 ">
			<div className="pt-50 md:pt-[90px] pb-5 md:pb-30 bg-[#181818]">
				<div className="p-5 mx-11 max-w-9xl lg:flex space-y-30 lg:space-y-0 lg:space-x-30 ">
					<div className="p-8 grid grid-cols-1 mx-auto sm:grid-cols-2 xl:w-fit   xl:grid-cols-4 xl:py-0 gap-20 max-w-[1260px] xl:border-r xl:pr-2.5">
						{footerDatas.map(({ title, listDatas }, index) => (
							<div key={index}>
								<div className="mb-5 text-white md:mb-30 space-y-[5px]">
									<p className="font-semibold  text-base md:text-lg 2xl:text-xl ">
										{title}
									</p>
									<img
										src="/images/dashed.png"
										alt="dashed"
										className="w-[125px]"
									/>
								</div>
								<ul className="text-white space-y-2.5">
									{listDatas.map((list, index) => (
										<li
											key={index}
											className="font-medium  text-sm md:text-base 2xl:text-lg"
										>
											{list}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
					<div className=" lg:px-12 ms-7 lg:pt-8 xl:pt-0 flex flex-col space-y-8 mx-auto align-center lg:items-end lg:text-right space-y-10 md:space-y-30">
						<div className="flex justify-start sm:justify-center">
							<HomeIcon />
						</div>
						<p className="text-white  md:font-medium sm:text-center text-sm md:text-base 2xl:text-lg whitespace-nowrap">
							Kiramkolay Bilişim Teknolojileri A.Ş.
						</p>
						<div className="flex space-x-4  sm:justify-center flex-wrap xl:justify-around md:space-x-8">
							<InstagramIcon />
							<FacebookIcon />
							<TwitterIcon />
							<LinkedlnIcon />
						</div>
					</div>
				</div>{" "}
				<div className=" flex xl:max-w-[1600px] ms-12 ps-10 px-5 sm:justify-center space-y-3 sm:space-y-0 sm:items-center  mt-4 sm:flex-row flex-col pt-4 xl:justify-end mx-auto sm:space-x-5  ">
					<img
						className="w-[140px]"
						src="/images/app-gallery.png"
						alt="all gallery"
					/>
					<img
						className="w-[140px]"
						src="/images/app-store.png"
						alt="app store"
					/>
					<img
						className="w-[140px]"
						src="/images/play-store.png"
						alt="play store"
					/>
				</div>
				<div>
					<div className="mx-auto w-full">
						<img
							className="md:block w-full border-b hidden border-white"
							src="/images/city.png"
							alt="city"
						/>
					</div>
					<div className="md:mx-auto flex ms-12 p-5 ps-10 mt-5 md:pt-0 md:pb-6 md:mt-0 md:px-5 flex-col justify-center md:gap-20 md:flex-row flex-wrap md:justify-between text-white">
						<ul className=" flex flex-col space-y-8 md:space-y-0 md:flex-row md:gap-20 flex-wrap">
							<li className="font-semibold underline text-sm">
								© 2023 Tüm Hakları Saklıdır.
							</li>
							<li className="font-semibold underline text-sm">
								Gizlilik ve Güvenlik Politikası
							</li>
							<li className="font-semibold underline text-sm">
								Kişisel Verilerin Korunması ve İşlenmesi Politikası
							</li>
							<li className="font-semibold underline text-sm">
								Veri Saklama ve İmha Politikası
							</li>
						</ul>
						<p className="font-semibold text-sm mt-11 md:mt-0">
							Versiyon: V 1.0.0.0
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
