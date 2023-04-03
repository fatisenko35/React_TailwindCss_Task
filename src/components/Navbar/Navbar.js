import React, { useState } from "react";
import HomeIcon from "../../Utils/Icons/HomeIcon";
import HamburgerMenuIcon from "../../Utils/Icons/HamburgerMenuIcon";
import ExitIcon from "../../Utils/Icons/ExitIcon";

const Navbar = () => {
	const [isExpanded, setIsExpanded] = useState(false);
	const menuDatas = [
		"Kiracılar İçin",
		"Ev Sahipleri İçin",
		"Kira Güvende Sigortası",
		"Yardım",
	];
	return (
		<header className="w-full h-20 shadow">
			<div className="shadow-xl bg-white h-full outline-none w-full">
				<div className="md:px-30 space-x-30 max-w-9xl mx-auto w-full h-full flex items-center justify-between px-5 ">
					<div className=" flex items-center w-fit h-full">
						<div className="block lg:hidden">
							{/* Mobile Menu */}
							<section className=" flex lg:hidden">
								<div
									className=" space-y-2 cursor-pointer"
									onClick={() => setIsExpanded((prev) => !prev)} // toggle isNavOpen state on click
								>
									<HamburgerMenuIcon />
								</div>
								<div
									className={
										isExpanded ? "showMenuNav lg:hidden" : "hideMenuNav"
									}
								>
									{" "}
									<div
										className=" absolute top-0 right-0 px-8 py-8"
										onClick={() => setIsExpanded(false)} // change isNavOpen state to false to close the menu
									>
										<ExitIcon />
									</div>
									<ul className=" flex flex-col items-center justify-between min-h-[250px]">
										{menuDatas.map((item, index) => (
											<li
												key={index}
												className="overflow-ellipsis text-[#484848] font-medium overflow-hidden 2xl:text-lg whitespace-nowrap text-sm md:text-base "
											>
												{item}
											</li>
										))}
									</ul>
								</div>
							</section>
						</div>
						<div className="flex justify-between items-center space-x-2.5">
							<div className="hidden lg:block">
								<HomeIcon fill="#484848" />
							</div>
						</div>
					</div>
					<div className="block w-fit h-full flex items-center justify-between space-x-5 md:space-x-30">
						<div className="hidden lg:flex items-center space-x-5 xx:space-x-[40px] ">
							{menuDatas.map((item, index) => (
								<p
									key={index}
									className="  overflow-ellipsis text-[#484848] font-medium overflow-hidden 2xl:text-lg whitespace-nowrap text-sm md:text-base "
								>
									{item}
								</p>
							))}
						</div>
						<div>
							<div className="flex w-fit h-50 p-4 items-center space-x-2.5 rounded-full shadow shadow-gray/50 text-center">
								<HamburgerMenuIcon />
								<img src="/images/user.png" alt="user" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
		</header>
	);
};

export default Navbar;
