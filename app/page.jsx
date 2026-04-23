"use client";

import { useState } from "react";
import Image from "next/image";

export default function App() {

    // Controls the pop-up expanded card
    const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);

    return (
        <div className="bg-white text-gray-900 relative">

            {/* Floating Oval Navbar — Glaze Style */}
            <header
                className="
                    fixed top-4 left-1/2 -translate-x-1/2 z-50
                "
            >
                <nav
                    className="
                        px-8 py-3 bg-white/80 backdrop-blur-md border shadow-sm rounded-full
                        flex gap-6 text-sm
                        overflow-x-auto whitespace-nowrap
                        max-w-[90vw]
                    "
                >
                    <a href="#overview" className="hover:text-black">Overview</a>
                    <a href="#process" className="hover:text-black">Process</a>
                    <a href="#about" className="hover:text-black">About</a>
                </nav>
            </header>



            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_70%)]"></div>



            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-40 pb-32 text-center">

                <p className="text-sm text-gray-500 mb-4">
                    <span className="text-orange-500 font-bold">SeekSeatSit</span> by <span className="text-black font-semibold">Group 13</span>
                </p>

                <h2
                    className="
                        font-semibold tracking-tight text-balance leading-tight
                        text-4xl sm:text-5xl md:text-6xl
                        mx-auto max-w-3xl
                    "
                >
                    Find seats anywhere, made easy for everyone.
                </h2>

                <p
                    className="
                        mt-6 text-gray-600 text-balance leading-relaxed
                        text-lg sm:text-xl
                        mx-auto max-w-2xl
                    "
                >
                    We proposed and prototyped a Mobile App specialized in multi‑mode (2D/3D/AR) navigation.
                </p>

            </section>



            {/* Feature Cards */}
			<section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10" id="overview">

				{/* Card 1 — triggers pop-up */}
				<div
					onClick={() => setExpanded1(true)}
					className="
						bg-gray-100 rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
						border border-gray-200 cursor-pointer transition-all duration-300
					"
				>
					<h3 className="text-xl font-semibold">The Problem</h3>

					<p className="text-gray-700 mt-3">
						Public and mall infrastructures make it difficult to find a seat when exhausted.
					</p>

					<div className="mt-6 w-full h-44 rounded-xl overflow-hidden bg-gray-200">
						<video
							src="video/street-maze.mp4"
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full object-cover"
						/>
					</div>
				</div>



				{/* Card 2 */}
				<div
					onClick={() => setExpanded2(true)}
					className="
						bg-gray-100 rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
						border border-gray-200 cursor-pointer transition-all duration-300
					"
				>
					<h3 className="text-xl font-semibold">User Power</h3>

					<p className="text-gray-700 mt-3">
						Leading edge technology, without the gatekeeping complexity.
					</p>

					<div className="mt-6 w-full h-44 rounded-xl overflow-hidden bg-gray-200">
						<video
							src="video/ar-navigation.mp4"
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full object-cover"
						/>
					</div>
				</div>



				{/* Card 3 */}
				<div
					onClick={() => setExpanded3(true)}
					className="
						bg-gray-100 rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.06)]
						border border-gray-200 cursor-pointer transition-all duration-300
					"
				>
					<h3 className="text-xl font-semibold">Community Support</h3>

					<p className="text-gray-700 mt-3">
						Community submitted spots and reviews make the platform scalable.
					</p>

					<div className="mt-6 w-full h-44 rounded-xl overflow-hidden bg-gray-200">
						<video
							src="video/upload-rating.mp4"
							autoPlay
							muted
							loop
							playsInline
							className="w-full h-full object-cover"
						/>
					</div>
				</div>

			</section>



            {/* POP-UP EXPANDED CARD 1 */}
            {expanded1 && (
                <div
                    onClick={() => setExpanded1(false)}
                    className="
                        fixed inset-0 z-50 flex items-center justify-center
                        bg-black/20 backdrop-blur-sm
                    "
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                            bg-gray-50 rounded-2xl border border-gray-200
                            shadow-[0_2px_20px_rgba(0,0,0,0.15)]
                            p-8 w-[90%] md:w-[80%] h-[90vh]
                            overflow-y-auto
                        "
                    >

                        {/* Title */}
                        <h2 className="text-3xl font-semibold mb-6">
                            The Problem
                        </h2>

                        {/* BRIEF */}
                        <p className="text-gray-700 mb-10">
                            Public and mall infrastructures make it difficult to find a seat when exhausted.
                        </p>


                        {/* PROBLEM STATEMENT */}
                        <div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">

                            {/* TEXT */}
                            <div className="md:w-1/2">
                                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                    Problem Statement
                                </h4>

                                <p className="text-sm leading-relaxed text-gray-700">
									When people walk outside for a long time, the desire to find a place to sit and rest becomes 
									<span className="text-black font-semibold"> inevitable</span>.
									This is a <span className="text-black font-semibold">fundamental</span> need for rest when going out.<br /><br />

									Nevertheless, Hong Kong is a city with 
									<span className="text-black font-semibold"> crowded</span> streets and 
									<span className="text-black font-semibold"> highly dense</span> buildings.
									With the severe limitation of available urban space, there is barely any extra space on the streets to set up seats.
									Malls in the city provide <span className="text-black font-semibold">just enough</span> seats to comply regulations, to keep non-consuming visitors away.<br /><br />

									What&apos;s worse is that both indoor and outdoor infrastructure <span className="text-black font-semibold">lack</span> clear, accessible information about available seating.
									Users often <span className="text-black font-semibold">waste time</span> wandering, especially when tired or carrying items.
								</p>
                            </div>

                            {/* VIDEO */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <video
                                        src="video/street-maze.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                        </div>



                        {/* KEY PAIN POINTS */}
                        <div className="md:flex md:gap-10 mb-10 md:items-center bg-gray-100 p-6 rounded-xl">

                            {/* TEXT */}
                            <div className="md:w-1/2">
                                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                    Key Pain Points
                                </h4><br />

                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Difficulty navigating complex street intersections and indoor layouts</li><br />
                                    <li>Unclear seat availability in malls and public areas</li><br />
                                    <li>No real‑time updates for crowded or busy zones</li><br />
                                    <li>Weather or environment factors may make location unpleasant</li>
                                </ul>
                            </div>

                            {/* IMAGE */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full rounded-xl overflow-hidden bg-gray-200">
                                    <Image
										src="/image/problem-slide.jpg"
										alt="Pain points illustration"
										width={1200}
										height={800}
										className="w-full h-full object-cover"
									/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            )}

			{/* POP-UP EXPANDED CARD 2 */}
			{expanded2 && (
				<div
					onClick={() => setExpanded2(false)}
					className="
						fixed inset-0 z-50 flex items-center justify-center
						bg-black/20 backdrop-blur-sm
					"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="
							bg-gray-50 rounded-2xl border border-gray-200
							shadow-[0_2px_20px_rgba(0,0,0,0.15)]
							p-8 w-[90%] md:w-[80%] h-[90vh]
							overflow-y-auto
						"
					>

						{/* Title */}
						<h2 className="text-3xl font-semibold mb-6">
							User Power
						</h2>

						{/* BRIEF */}
						<p className="text-gray-700 mb-10">
							Leading edge technology, without the gatekeeping complexity.
						</p>


						{/* ================================
							SECTION 1 (TEXT + VIDEO)
							================================ */}
						<div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Proposed Solution
								</h4><br />

								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
									<li>GPS Outdoor + 3D Indoor</li><br />
									<li>AR Navigation Assist</li><br />
									<li>Community Spots</li><br />
									<li>Ratings and Reviews</li>
								</ul>
							</div>

							{/* VIDEO */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <video
                                        src="video/ar-navigation.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

						</div>



						{/* ================================
							SECTION 2 (TEXT + IMAGE)
							================================ */}
						<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Design Philosophy
								</h4>

								{/* Paragraph 1 */}
								<p className="text-sm leading-relaxed text-gray-700 mb-4">
									In order to make our solution great, it has to be useful for 
									<span className="text-black font-semibold"> everyone</span>.
								</p>

								{/* List 1 */}
								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700 mb-6">
									<li>
										If features are <span className="text-black font-semibold">overcatered</span> for power users, 
										the learning curve would be too steep for beginners.
									</li>
									<li>
										If features are <span className="text-black font-semibold">simplified</span> for beginners, 
										power users&apos; expectations would not be met.
									</li>
								</ul>

								{/* Paragraph 2 */}
								<p className="text-sm leading-relaxed text-gray-700 mb-4">
									Instead of organizing menus in a hierarchical way based on feature difficulty,
									we aim to make every feature visible to all users within 
									<span className="text-black font-semibold"> shallow</span> layers.
									This allows the app to guide beginners into becoming power users.
								</p>

								{/* List 2 */}
								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
									<li>
										For example, if some users have no experience with AR navigation,
										putting the AR button aside with the default 2D navigation exposes them to this new technology,
										guiding them to <span className="text-black font-semibold">explore</span> more about the usefulness.
									</li>
									<li>
										If we hide the button in <span className="text-black font-semibold">deep</span> layers of setting menus instead,
										it strips off their opportunity to realize what they don&apos;t know,
										which is just another way of <span className="text-black font-semibold">punishing</span> users with little knowledge.
									</li>
								</ul>
							</div>

							{/* IMAGE */}
							<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
								<div className="w-full rounded-xl overflow-hidden bg-gray-200">
									<Image
										src="/image/philosophy-slide.jpg"
										alt="Design philosophy powerpoint"
										width={1200}
										height={800}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* CAPTION */}
								<p className="text-xs text-gray-600 mt-3">
									Inspired by XKCD webcomic #1053 — 
									<a
										href="https://xkcd.com/1053/"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-gray-700 hover:text-black ml-1"
									>
										EN
									</a>
									<span className="mx-1">/</span>
									<a
										href="https://xkcd.tw/1053"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-gray-700 hover:text-black"
									>
										ZH
									</a>
								</p>
							</div>

						</div>

					</div>
				</div>
			)}
			
			{/* POP-UP EXPANDED CARD 3 */}
			{expanded3 && (
				<div
					onClick={() => setExpanded3(false)}
					className="
						fixed inset-0 z-50 flex items-center justify-center
						bg-black/20 backdrop-blur-sm
					"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="
							bg-gray-50 rounded-2xl border border-gray-200
							shadow-[0_2px_20px_rgba(0,0,0,0.15)]
							p-8 w-[90%] md:w-[80%] h-[90vh]
							overflow-y-auto
						"
					>

						{/* Title */}
						<h2 className="text-3xl font-semibold mb-6">
							Community Support
						</h2>

						{/* BRIEF */}
						<p className="text-gray-700 mb-10">
							Community submitted spots and reviews make the platform scalable.
						</p>


						{/* ================================
							SECTION 1 (TEXT + VIDEO)
							================================ */}
						<div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Scalability and Creditability
								</h4>

								<p className="text-sm leading-relaxed text-gray-700">
									Building a navigation platform traditionally requires collecting street photos by hiring&nbsp;
									<a
										href="https://www.hk01.com/%E7%86%B1%E7%88%86%E8%A9%B1%E9%A1%8C/60244933/%E6%8F%B9google-maps-%E8%A1%97%E6%99%AF%E8%83%8C%E5%8C%85-%E8%A1%8C%E8%A1%97%E5%B0%B1%E6%9C%89%E9%8C%A2%E6%8B%BF%E5%A5%BD%E7%AD%8D-%E5%85%A7%E8%A1%8C%E4%BA%BA%E6%8F%AD%E7%A7%98%E8%BE%9B%E6%9C%88%E5%85%A5"
										target="_blank"
										rel="noopener noreferrer"
										className="underline text-gray-700 hover:text-black"
									>
										trekker
									</a>
									&nbsp;vehicles/personnels, which is <span className="text-black font-semibold">costly</span>.
									Allowing the community to <span className="text-black font-semibold">contribute</span> their own data makes the platform more scalable without scraping data from the internet.<br /><br />
									Ratings and reviews are good <span className="text-black font-semibold">references</span> to help users compare and choose the best seats around.
									In the actual implementation, we may add geolocation check or require users to take a photo,
									as to <span className="text-black font-semibold">verify</span> that they actually visited the place, ensuring credible reviews.
								</p>
							</div>

							{/* VIDEO */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200">
                                    <video
                                        src="video/upload-rating.mp4"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

						</div>



						{/* ================================
							SECTION 2 (TEXT + IMAGE)
							================================ */}
						<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Composition
								</h4>
								
								<p className="text-sm leading-relaxed text-gray-700">
									We need to identify the possible composition of our community before conducting user studies,
									in order to <span className="text-black font-semibold">narrow down</span> and reduce the time cost in doing contextual inquiry.
								</p><br />

								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
									<li>Social media pages (e.g. @grabaseatHK on&nbsp;
										<a
											href="https://www.instagram.com/grabaseat.hk/"
											target="_blank"
											rel="noopener noreferrer"
											className="underline text-gray-700 hover:text-black"
										>
											Instagram
										</a>,&nbsp;
										<a
											href="https://www.threads.com/@grabaseat.hk"
											target="_blank"
											rel="noopener noreferrer"
											className="underline text-gray-700 hover:text-black"
										>
											Threads
										</a>): The major participants are <span className="text-black font-semibold">young adults and students</span>.
									</li><br />
									<li>Search engine statistics (e.g.&nbsp;
										<a
											href="https://trends.google.com/explore?q=%25E9%2599%2584%25E8%25BF%2591%2520%2C%25E5%25BA%25A7%25E4%25BD%258D%2C%25E9%2599%2584%25E8%25BF%2591%2520%25E5%25BA%25A7%25E4%25BD%258D&date=today%201-y&geo=HK"
											target="_blank"
											rel="noopener noreferrer"
											className="underline text-gray-700 hover:text-black"
										>	
											Google Trend
										</a>
										): &quot;Nearby Seat&quot; keyword has no popularity. People usually search for &quot;Nearby Hotel&quot;, &quot;Nearby Restaurant&quot;.
									</li><br />
									<li>
										Observation: Most users of outdoor seats are <span className="text-black font-semibold">elderly people</span>.
										On weekdays, most users of indoor seats are elderly people as well.
										On weekends, indoor seats users have diverse age groups.
									</li>
								</ul>
							</div>

							{/* IMAGE */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full rounded-xl overflow-hidden bg-gray-200">
									<Image
										src="/image/userstudy-slide.jpg"
										alt="Features powerpoint"
										width={1200}
										height={800}
										className="w-full h-full object-cover"
									/>
                                </div>
                            </div>

						</div>

					</div>
				</div>
			)}
			

            {/* Footer */}
            <footer className="border-t py-8 text-center text-sm text-gray-500">

				{/* Desktop: one line with hyphen */}
				<p className="hidden md:block">
					© 2026 SeekSeatSit Portfolio — Mobile Friendly Page Built by Group 13
				</p>

				{/* Mobile: two lines, no hyphen */}
				<p className="block md:hidden">
					© 2026 SeekSeatSit Portfolio<br />
					Mobile Friendly Page Built by Group 13
				</p>

			</footer>

        </div>
    );
}
