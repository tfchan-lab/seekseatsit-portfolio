"use client";

import { useState, useRef } from "react";
import Image from "next/image";

export default function App() {

    // Controls the pop-up expanded card
    const [expanded1, setExpanded1] = useState(false);
	const [expanded2, setExpanded2] = useState(false);
	const [expanded3, setExpanded3] = useState(false);
	const [expanded4, setExpanded4] = useState(false);
	const [expanded5, setExpanded5] = useState(false);
	const [expanded6, setExpanded6] = useState(false);
	
	// Controls carousel for desktop drag and page indicator
	const personaRef = useRef(null);
	const [personaIndex, setPersonaIndex] = useState(0);

	const personaDrag = useRef({
		isDown: false,
		startX: 0,
		startScrollLeft: 0,
	});
	
	const affinityRef = useRef(null);
	const [affinityIndex, setAffinityIndex] = useState(0);

	const affinityDrag = useRef({
		isDown: false,
		startX: 0,
		startScrollLeft: 0,
	});
	
	const storyboardRef = useRef(null);
	const [storyboardIndex, setstoryboardIndex] = useState(0);

	const storyboardDrag = useRef({
		isDown: false,
		startX: 0,
		startScrollLeft: 0,
	});
	
	const lowfiRef = useRef(null);
	const [lowfiIndex, setlowfiIndex] = useState(0);

	const lowfiDrag = useRef({
		isDown: false,
		startX: 0,
		startScrollLeft: 0,
	});
	
	const hifiRef = useRef(null);
	const [hifiIndex, sethifiIndex] = useState(0);

	const hifiDrag = useRef({
		isDown: false,
		startX: 0,
		startScrollLeft: 0,
	});

	// SHARED HANDLERS FOR ALL CAROUSELS
	const handleScroll = (e, setIndex) => {
		const el = e.currentTarget;
		const slideWidth = el.clientWidth;
		const rawIndex = slideWidth ? el.scrollLeft / slideWidth : 0;
		const newIndex = Math.round(rawIndex);
		setIndex(Math.max(0, Math.min(2, newIndex)));
	};

	const handlePointerDown = (e, ref, drag) => {
		const el = ref.current;
		if (!el) return;

		drag.current.isDown = true;
		drag.current.startX = e.clientX;
		drag.current.startScrollLeft = el.scrollLeft;

		el.setPointerCapture(e.pointerId);
	};

	const handlePointerMove = (e, ref, drag) => {
		const el = ref.current;
		if (!el || !drag.current.isDown) return;

		const dx = e.clientX - drag.current.startX;
		el.scrollLeft = drag.current.startScrollLeft - dx;
	};

	const handlePointerUp = (e, ref, drag) => {
		const el = ref.current;
		if (!el) return;

		drag.current.isDown = false;
		el.releasePointerCapture(e.pointerId);
	};
	
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
					<a href="#top" className="text-orange-500 font-bold">SeekSeatSit</a>
                    <a href="#overview" className="hover:text-black">Overview</a>
                    <a href="#process" className="hover:text-black">Process</a>
                    <a href="#about" className="hover:text-black">About</a>
                </nav>
            </header>



            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_70%)]"></div>



            {/* Hero */}
            <section className="max-w-6xl mx-auto px-6 pt-40 pb-32 text-center" id="top">

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



            {/* Overview Feature Cards */}
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

			<section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10" id="process">
				{/* WIDE CARD — USER STUDY */}
				<div
					onClick={() => setExpanded4(true)}
					className="
						md:col-span-3 relative rounded-2xl overflow-hidden
						h-[350px] md:h-[420px]
						bg-cover cursor-pointer transition-all duration-300
					"
					style={{
						backgroundImage: "url('/image/userstudy-map.png')",
						backgroundPosition: "left 20% top 4%",
					}}
				>
					{/* GRADIENT OVERLAY */}
					<div
						className="
							absolute inset-0
							/* Mobile: fade from bottom-left */
							bg-gradient-to-tr from-white/90 via-white/40 to-transparent
							/* Desktop: fade from top-left */
							md:bg-gradient-to-br md:from-white/90 md:via-white/40 md:to-transparent
						"
					/>

					{/* TEXT CONTENT */}
					<div
						className="
							absolute
							/* Mobile: bottom-left */
							bottom-0 left-0 p-8
							/* Desktop: top-left */
							md:top-0 md:left-0 md:bottom-auto
							max-w-md
						"
					>
						<h3 className="text-xl font-semibold text-gray-900">
							User Study
						</h3>

						<p className="text-gray-700 mt-3">
							Contextual Inquiries are conducted to capture the details in seat searching processes,
							to facilitate analysis using Affinity Diagram.
						</p>
					</div>
				</div>
				
				{/* WIDE CARD — PROTOTYPING */}
				<div
					onClick={() => setExpanded5(true)}
					className="
						md:col-span-3 relative rounded-2xl overflow-hidden
						h-[350px] md:h-[420px]
						bg-cover cursor-pointer transition-all duration-300
					"
					style={{
						backgroundImage: "url('image/figma.png')",
						backgroundPosition: "left 20% top 20%",
					}}
				>
					{/* GRADIENT OVERLAY */}
					<div
						className="
							absolute inset-0
							/* Mobile: fade from bottom-right */
							bg-gradient-to-tl from-white/90 via-white/40 to-transparent
							/* Desktop: fade from top-right */
							md:bg-gradient-to-bl md:from-white/90 md:via-white/40 md:to-transparent
						"
					/>

					{/* TEXT CONTENT */}
					<div
						className="
							absolute text-right
							/* Mobile: bottom-right */
							bottom-0 right-0 p-8
							/* Desktop: top-right */
							md:top-0 md:right-0 md:bottom-auto
							max-w-md
						"
					>
						<h3 className="text-xl font-semibold text-gray-900">
							Prototyping
						</h3>

						<p className="text-gray-700 mt-3">
							Following a hierarchical and iterative way structure, to advance from low fidelity to high fidelity.
						</p>
					</div>
				</div>
				
				{/* WIDE CARD — EVALUATION */}
				<div
					onClick={() => setExpanded6(true)}
					className="
						md:col-span-3 relative rounded-2xl overflow-hidden
						h-[350px] md:h-[420px]
						bg-cover cursor-pointer transition-all duration-300
					"
					style={{
						backgroundImage: "url('/image/evaluation-cover.png')",
						backgroundPosition: "left 15% top 0%",
					}}
				>
					{/* GRADIENT OVERLAY */}
					<div
						className="
							absolute inset-0
							/* Mobile: fade from bottom-left */
							bg-gradient-to-tr from-white/90 via-white/40 to-transparent
							/* Desktop: fade from top-left */
							md:bg-gradient-to-br md:from-white/90 md:via-white/40 md:to-transparent
						"
					/>

					{/* TEXT CONTENT */}
					<div
						className="
							absolute
							/* Mobile: bottom-left */
							bottom-0 left-0 p-8
							/* Desktop: top-left */
							md:top-0 md:left-0 md:bottom-auto
							max-w-md
						"
					>
						<h3 className="text-xl font-semibold text-gray-900">
							Evaluation
						</h3>

						<p className="text-gray-700 mt-3">
							Usability tests are performed on 3 key tasks, with both objective and subjective metrics to evaluate the UX.
						</p>
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
                            p-8 w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
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
                                    <li>Difficulty navigating <span className="text-black font-semibold">complex</span> street intersections and indoor layouts</li><br />
                                    <li><span className="text-black font-semibold">Unclear</span> seat availability in malls and public areas</li><br />
                                    <li>No <span className="text-black font-semibold">real‑time</span> updates for crowded or busy zones</li><br />
                                    <li>Weather or environment factors may make location <span className="text-black font-semibold">unpleasant</span></li>
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
							p-8 w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
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
										If the button in <span className="text-black font-semibold">deep</span> layers of setting menus is hidden instead,
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
							p-8 w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
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
									In the actual implementation, geolocation or phototaking check may be added,
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
									The composition of the community needs to be identified before conducting user studies,
									in order to <span className="text-black font-semibold">narrow down</span> and reduce the time cost.
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
			
			{/* POP-UP EXPANDED CARD 4 */}
			{expanded4 && (
				<div
					onClick={() => setExpanded4(false)}
					className="
						fixed inset-0 z-50 flex items-center justify-center
						bg-black/20 backdrop-blur-sm
					"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="
							bg-gray-50 relative rounded-2xl border border-gray-200
							shadow-[0_2px_20px_rgba(0,0,0,0.15)]
							w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
							overflow-y-auto
						"
					>

						{/* CONTENT (above gradient) */}
						<div className="relative z-10 p-8">

							{/* Title */}
							<h2 className="text-3xl font-semibold mb-6">
								User Study
							</h2>

							{/* BRIEF */}
							<p className="text-gray-700 mb-10">
								Contextual Inquiries are conducted to capture the details in seat searching processes,
								to facilitate analysis using Affinity Diagram.
							</p>

							{/* ===== SECTION 1 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Contextual Interview
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We invited ≥1 interviewee per identified <span className="text-black font-semibold">primary</span> user group,
										as well as extra interviewees for <span className="text-black font-semibold">some secondary</span> user groups.
									</p><br />
									
									<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
										<li>
											Primary user groups: Elderly, Student, Young adult employee.
										</li><br />
										<li>
											Interviewed locations: Market, Park, Street, Mall, Train station<br />
											(Took place in New Territories <span className="text-black font-semibold">residential</span> areas
											and Kowloon <span className="text-black font-semibold">commercial</span> areas)
										</li><br />
										<li>
											Reason of choosing interview as the inquiry method is that it is the <span className="text-black font-semibold">more natural</span>
											&nbsp;than other methods (e.g. Master-Apprentice, Shadowing, Observation).
										</li>
									</ul>
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<div
											ref={personaRef}
											onScroll={(e) => handleScroll(e, setPersonaIndex)}
											onPointerDown={(e) => handlePointerDown(e, personaRef, personaDrag)}
											onPointerMove={(e) => handlePointerMove(e, personaRef, personaDrag)}
											onPointerUp={(e) => handlePointerUp(e, personaRef, personaDrag)}
											onPointerLeave={(e) => handlePointerUp(e, personaRef, personaDrag)}
											className="
												flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
												cursor-grab active:cursor-grabbing
												scrollbar-none select-none no-scrollbar
											"
										>
											{/* Slide 1 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/persona-1.jpg"
													alt="Persona 1"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 2 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/persona-2.jpg"
													alt="Persona 2"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 3 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/persona-3.jpg"
													alt="Persona 3"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
										</div>
									</div>

									<p className="text-xs text-gray-600 mt-3 flex items-center gap-2">
										<span>&lt;- Swipe to see personas</span>
										<span className="text-gray-800">({personaIndex + 1}/3) -&gt;</span>
									</p>

								</div>
							</div>

							{/* ===== SECTION 2 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Data Analysis
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We created memos of six categories to form an Affinity Diagram,
										which would be <span className="text-black font-semibold">clustered</span> and translated into design <span className="text-black font-semibold">solutions</span>.
										<br /><span className="text-xs">(Key Observations (KO), User Statements (US), Breakdowns (BD), Insights (IS), Design Ideas (DI), Questions & Ambiguities (QA))</span>
									</p><br />
									
									<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
										<li>
											Cluster 1: Main factors are money and time <span className="text-black font-semibold">costs</span>
										</li><br />
										<li>
											Cluster 2: Social and psychological <span className="text-black font-semibold">barriers</span> exist
										</li><br />
										<li>
											Cluster 3: Existing infrastructure and apps <span className="text-black font-semibold">lack sufficient</span> information
										</li>
									</ul>
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<div
											ref={affinityRef}
											onScroll={(e) => handleScroll(e, setAffinityIndex)}
											onPointerDown={(e) => handlePointerDown(e, affinityRef, affinityDrag)}
											onPointerMove={(e) => handlePointerMove(e, affinityRef, affinityDrag)}
											onPointerUp={(e) => handlePointerUp(e, affinityRef, affinityDrag)}
											onPointerLeave={(e) => handlePointerUp(e, affinityRef, affinityDrag)}
											className="
												flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
												cursor-grab active:cursor-grabbing
												scrollbar-none select-none no-scrollbar
											"
										>
											{/* Slide 1 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/affinity-1.png"
													alt="Affinity Cluster 1"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 2 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/affinity-2.png"
													alt="Affinity Cluster 2"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 3 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/affinity-3.png"
													alt="Affinity Cluster 3"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
										</div>
									</div>

									<p className="text-xs text-gray-600 mt-3 flex items-center gap-2">
										<span>&lt;- Swipe to see affinity clusters</span>
										<span className="text-gray-800">({affinityIndex + 1}/3) -&gt;</span>
									</p>

								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Functional Requirements
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										Features we specified after the analysis of interview user data.
									</p><br />
									
									<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
										<li>
											Sort by cost/distance: to be implemented to the <span className="text-black font-semibold">nearby search</span>.
										</li><br />
										<li>
											Label slope/stairs: to be implemented to the <span className="text-black font-semibold">navigation</span>.
										</li><br />
										<li>
											Label number of seats: to be implemented to the <span className="text-black font-semibold">seat spots</span> on the map.
										</li><br />
										<li>
											Information card: to be implemented to seat spot <span className="text-black font-semibold">click event</span>.
										</li><br />
										<li>
											Live busyness trend: to be implemented to seat spot <span className="text-black font-semibold">icon</span> (possibly via <span className="text-black font-semibold">heatmap colors</span>)
										</li>
									</ul>
								</div>

								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
									<div className="w-full rounded-xl overflow-hidden bg-gray-200">
										<Image
											src="/image/requirement-slide.jpg"
											alt="Features powerpoint"
											width={1200}
											height={800}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Key Tasks
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										The most important features that would make the app useful. These key tasks would be useful in <span className="text-black font-semibold">evaluating</span> UI/UX effectiveness.
									</p><br />
									
									<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
										<li>
											Main task: Locate and view nearby seats through <span className="text-black font-semibold">real-time positioning</span>.
										</li><br />
										<li>
											Secondary task: <span className="text-black font-semibold">Read and compare</span> information of seat (e.g. real-time seat availability, environment).
										</li><br />
										<li>
											Community task: View or share <span className="text-black font-semibold">feedback</span> on seats by ratings/reviews, 
											which contribute to the ranking of seats in categories like popularity and cleanliness.
										</li>
									</ul>
								</div>

								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
									<div className="w-full rounded-xl overflow-hidden bg-gray-200">
										<Image
											src="/image/usertask.png"
											alt="Photo of user using phone"
											width={1200}
											height={800}
											className="w-full h-full object-cover"
										/>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			)}
			
			{/* POP-UP EXPANDED CARD 5 */}
			{expanded5 && (
				<div
					onClick={() => setExpanded5(false)}
					className="
						fixed inset-0 z-50 flex items-center justify-center
						bg-black/20 backdrop-blur-sm
					"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="
							bg-gray-50 relative rounded-2xl border border-gray-200
							shadow-[0_2px_20px_rgba(0,0,0,0.15)]
							w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
							overflow-y-auto
						"
					>

						{/* CONTENT (above gradient) */}
						<div className="relative z-10 p-8">

							{/* Title */}
							<h2 className="text-3xl font-semibold mb-6">
								Prototyping
							</h2>

							{/* BRIEF */}
							<p className="text-gray-700 mb-10">
								Following a hierarchical and iterative way structure, to advance from low fidelity to high fidelity.
							</p>

							{/* ===== SECTION 1 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Storyboard
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We used storyboard to <span className="text-black font-semibold">visualize</span> the interaction of personas with a navigation app,
										as well as <span className="text-black font-semibold">aligning</span> the team&apos;s vision.
									</p><br />
									
									
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<div
											ref={storyboardRef}
											onScroll={(e) => handleScroll(e, setstoryboardIndex)}
											onPointerDown={(e) => handlePointerDown(e, storyboardRef, storyboardDrag)}
											onPointerMove={(e) => handlePointerMove(e, storyboardRef, storyboardDrag)}
											onPointerUp={(e) => handlePointerUp(e, storyboardRef, storyboardDrag)}
											onPointerLeave={(e) => handlePointerUp(e, storyboardRef, storyboardDrag)}
											className="
												flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
												cursor-grab active:cursor-grabbing
												scrollbar-none select-none no-scrollbar
											"
										>
											{/* Slide 1 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/storyboard-1.png"
													alt="Storyboard for task 1"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 2 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/storyboard-2.png"
													alt="Storyboard for task 2"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 3 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/storyboard-3.png"
													alt="Storyboard for task 3"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
										</div>
									</div>

									<p className="text-xs text-gray-600 mt-3 flex items-center gap-2">
										<span>&lt;- Swipe to see storyboards</span>
										<span className="text-gray-800">({storyboardIndex + 1}/3) -&gt;</span>
									</p>

								</div>
							</div>

							{/* ===== SECTION 2 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Hand-drawn Sketch
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										From several rounds of Crazy 8s, we gathered a lot of <span className="text-black font-semibold">UI elements</span>,
										that would be later put into wireframe screens to form a <span className="text-black font-semibold">flow</span>.
									</p><br />
									
									<p className="text-sm leading-relaxed text-gray-700">
										An iterative approach is used which starts from <span className="text-black font-semibold">simple</span> (as little elements per screen as possible)
										to <span className="text-black font-semibold">complex</span> (more elements per screen, more relation between screens).
									</p><br />
								</div>
								
								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<Image
											src="/image/sketch-1.png"
											alt="Rough sketch mockup"
											width={1600}
											height={900}
											className="w-full h-full object-cover pointer-events-none"
										/>
									</div>
								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Low Fidelity Wireframe
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We transferred our paper drafts into Balsamiq wireframes, which cleaned up the rough sketches for more clarity and colors.
									</p><br />
									
									<p className="text-sm leading-relaxed text-gray-700">
										<span className="text-black font-semibold">Signature ideas</span>:
									</p><br />
									
									<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
										<li>
											Information card
										</li><br />
										<li>
											Preview bubble
										</li><br />
										<li>
											Nearby seat dock
										</li>
									</ul>
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<div
											ref={lowfiRef}
											onScroll={(e) => handleScroll(e, setlowfiIndex)}
											onPointerDown={(e) => handlePointerDown(e, lowfiRef, lowfiDrag)}
											onPointerMove={(e) => handlePointerMove(e, lowfiRef, lowfiDrag)}
											onPointerUp={(e) => handlePointerUp(e, lowfiRef, lowfiDrag)}
											onPointerLeave={(e) => handlePointerUp(e, lowfiRef, lowfiDrag)}
											className="
												flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
												cursor-grab active:cursor-grabbing
												scrollbar-none select-none no-scrollbar
											"
										>
											{/* Slide 1 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/lowfi-1.png"
													alt="Low Fidelity design 1"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 2 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/lowfi-2.png"
													alt="Low Fidelity design 2"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 3 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/lowfi-3.png"
													alt="Low Fidelity design 3"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
										</div>
									</div>

									<p className="text-xs text-gray-600 mt-3 flex items-center gap-2">
										<span>&lt;- Swipe to see low fidelity designs</span>
										<span className="text-gray-800">({lowfiIndex + 1}/3) -&gt;</span>
									</p>

								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										High Fidelity Prototype
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We move on to make interactive prototypes by refining and merging the layouts of our previous low fidelity ideas.
									</p><br />
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										<div
											ref={hifiRef}
											onScroll={(e) => handleScroll(e, sethifiIndex)}
											onPointerDown={(e) => handlePointerDown(e, hifiRef, hifiDrag)}
											onPointerMove={(e) => handlePointerMove(e, hifiRef, hifiDrag)}
											onPointerUp={(e) => handlePointerUp(e, hifiRef, hifiDrag)}
											onPointerLeave={(e) => handlePointerUp(e, hifiRef, hifiDrag)}
											className="
												flex overflow-x-scroll snap-x snap-mandatory scroll-smooth
												cursor-grab active:cursor-grabbing
												scrollbar-none select-none no-scrollbar
											"
										>
											{/* Slide 1 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/hifi-1.png"
													alt="High Fidelity design 1"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 2 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/hifi-2.png"
													alt="High Fidelity design 2"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>

											{/* Slide 3 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/hifi-3.png"
													alt="High Fidelity design 3"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
											
											{/* Slide 4 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/hifi-4.png"
													alt="High Fidelity design 4"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
											
											{/* Slide 5 */}
											<div className="snap-center shrink-0 w-full h-full">
												<Image
													src="/image/hifi-5.png"
													alt="High Fidelity design 5"
													width={1600}
													height={900}
													className="w-full h-full object-cover pointer-events-none"
												/>
											</div>
										</div>
									</div>

									<p className="text-xs text-gray-600 mt-3 flex items-center gap-2">
										<span>&lt;- Swipe to see high fidelity designs</span>
										<span className="text-gray-800">({hifiIndex + 1}/5) -&gt;</span>
									</p>

								</div>
							</div>

						</div>
					</div>
				</div>
			)}
			
			{/* POP-UP EXPANDED CARD 6 */}
			{expanded6 && (
				<div
					onClick={() => setExpanded6(false)}
					className="
						fixed inset-0 z-50 flex items-center justify-center
						bg-black/20 backdrop-blur-sm
					"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="
							bg-gray-50 relative rounded-2xl border border-gray-200
							shadow-[0_2px_20px_rgba(0,0,0,0.15)]
							w-[90%] md:w-[80%] h-[80vh] md:h-[90vh]
							overflow-y-auto
						"
					>

						{/* CONTENT (above gradient) */}
						<div className="relative z-10 p-8">

							{/* Title */}
							<h2 className="text-3xl font-semibold mb-6">
								Evaluation
							</h2>

							{/* BRIEF */}
							<p className="text-gray-700 mb-10">
								Usability tests are performed on 3 key tasks, with both objective and subjective metrics to evaluate the UX.
							</p>

							{/* ===== SECTION 1 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-16 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Testers
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										We invited 3 real users who are <span className="text-black font-semibold">not involved</span> in the whole development process to perform <span className="text-black font-semibold">user testing</span>,
										3 team members who are <span className="text-black font-semibold">less involved</span> in the final prototype design process to perform <span className="text-black font-semibold">expert testing</span>.
									</p><br />
									
									
								</div>

								{/* CAROUSEL (scroll-snap + JS index tracking) */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										...
									</div>
								</div>
							</div>

							{/* ===== SECTION 2 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Primary Task
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										...
									</p><br />
									
									
								</div>
								
								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										...
									</div>
								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Secondary Task
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										...
									</p><br />
								</div>

								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										...
									</div>
								</div>
							</div>
							
							{/* ===== SECTION 3 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Community Task
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										...
									</p><br />
								</div>

								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										...
									</div>
								</div>
							</div>
							
							{/* ===== SECTION 4 ===== */}
							<div className="md:flex md:gap-10 md:items-center mb-10 bg-gray-100 p-6 rounded-xl">
								{/* TEXT */}
								<div className="md:w-1/2">
									<h4 className="font-semibold text-gray-900 text-lg mb-2">
										Reflection and Planned Revision
									</h4>

									<p className="text-sm leading-relaxed text-gray-700">
										...
									</p><br />
								</div>

								{/* IMAGE */}
								<div className="md:w-1/2 mt-6 md:mt-0 flex flex-col items-center">
									<div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-200 relative">
										...
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			)}
			
			<section id="about" className="w-full bg-white py-16 px-6 md:px-12 rounded-xl">
				<div className="max-w-4xl mx-auto space-y-12">

					{/* Team & Roles */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-gray-900 text-center">Team & Roles</h2>
						<div className="bg-gray-100 p-6 rounded-xl space-y-3">
							<div className="flex justify-between">
								<span className="text-black font-semibold">Name</span>
								<span className="text-black font-semibold">Major Role</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-700">Lam Lok Yiu</span>
								<span className="text-gray-500">UX Research</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-700">Tsang Cheuk Lam</span>
								<span className="text-gray-500">UI Design</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-700">Cheng Chuk Yin</span>
								<span className="text-gray-500">Research Support</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-700">Cheung Hiu Ching</span>
								<span className="text-gray-500">Interaction Design</span>
							</div>
							<div className="flex justify-between">
								<span className="text-gray-700">Chan Ting Fung</span>
								<span className="text-gray-500">Visuals</span>
							</div>
						</div>
					</div>

					{/* Tools & Tech Stack */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-gray-900 text-center">Tools & Tech Stack</h2>
						<div className="bg-gray-100 p-6 rounded-xl space-y-2 text-center">
							<p className="text-gray-700"><strong>Prototype:</strong> Balsamiq · Figma</p>
							<p className="text-gray-700"><strong>Portfolio:</strong> Next.js · React · Tailwind CSS</p>
							<p className="text-gray-700"><strong>Design Assets:</strong> Irasutoya いらすとや</p>
						</div>
					</div>

					{/* Demo Links */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-gray-900 text-center">Prototype & Build</h2>
						<div className="bg-gray-100 p-6 rounded-xl space-y-3 text-center">
							<a href="#" className="text-blue-600 hover:underline">Figma Prototype</a><br />
							<a href="#" className="text-blue-600 hover:underline">GitHub Repository</a>
						</div>
					</div>

					{/* Acknowledgements */}
					<div className="space-y-4">
						<h2 className="text-2xl font-semibold text-gray-900 text-center">
							Acknowledgements
						</h2>

						{/* Card */}
						<div className="bg-gray-100 p-6 rounded-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">

							{/* MOBILE: Heart above text */}
							<div className="flex justify-center md:hidden">
								<Image
									src="/image/heart.png"
									alt="Heart icon"
									width={48}
									height={48}
									className="object-contain"
								/>
							</div>

							{/* Text */}
							<div className="space-y-2 text-center md:text-left">
								<p className="text-gray-700">
									We thank all interview participants for their time and insights.
								</p>
								<p className="text-gray-700">
									Special thanks to the teaching team for guidance throughout the project.
								</p>
							</div>

							{/* MOBILE: thank-1 + thank-2 below text */}
							<div className="flex justify-center gap-3 md:hidden">
								<Image
									src="/image/thank-2.png"
									alt="Thank you icon"
									width={48}
									height={48}
									className="object-contain"
								/>
								<Image
									src="/image/thank-1.png"
									alt="Thank you icon"
									width={48}
									height={48}
									className="object-contain"
								/>
							</div>

							{/* DESKTOP: all three icons on the right */}
							<div className="hidden md:flex items-center gap-3">
								<Image
									src="/image/heart.png"
									alt="Heart icon"
									width={48}
									height={48}
									className="object-contain"
								/>
								<Image
									src="/image/thank-2.png"
									alt="Thank you icon"
									width={48}
									height={48}
									className="object-contain"
								/>
								<Image
									src="/image/thank-1.png"
									alt="Thank you icon"
									width={48}
									height={48}
									className="object-contain"
								/>
							</div>

						</div>
					</div>

				</div>
			</section>

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
