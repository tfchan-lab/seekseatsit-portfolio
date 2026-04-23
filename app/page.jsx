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
                    SeekSeatSit by Group 13
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
			<section className="max-w-6xl mx-auto px-6 pb-32 grid md:grid-cols-3 gap-10">

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
                        <div className="md:flex md:gap-10 mb-16 bg-gray-100 p-6 rounded-xl">

                            {/* TEXT */}
                            <div className="md:w-1/2">
                                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                    Problem Statement
                                </h4>

                                <p className="text-sm leading-relaxed text-gray-700">
                                    When people walk outside for a long time, the desire to find a place to sit and rest becomes inevitable.
                                    This is a fundamental need for rest when going out.<br /><br />

                                    Nevertheless, Hong Kong is a city with crowded streets and highly dense buildings.
                                    With the severe limitation of available urban space, there is barely any extra space on the streets to set up seats.
                                    Malls in the city provide just enough seats to comply regulations, to keep non-consuming visitors away.<br /><br />

                                    What&apos;s worse is that both indoor and outdoor infrastructure lack clear, accessible information about available seating.
                                    Users often waste time wandering, especially when tired or carrying items.
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
                        <div className="md:flex md:gap-10 mb-10 bg-gray-100 p-6 rounded-xl">

                            {/* TEXT */}
                            <div className="md:w-1/2">
                                <h4 className="font-semibold text-gray-900 text-lg mb-2">
                                    Key Pain Points
                                </h4>

                                <ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
                                    <li>Difficulty navigating complex street intersections and indoor layouts</li><br />
                                    <li>Unclear seat availability in malls and public areas</li><br />
                                    <li>No real‑time updates for crowded or busy zones</li><br />
                                    <li>Weather or environment factors may make location unpleasant to some</li>
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
						<div className="md:flex md:gap-10 mb-16 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Placeholder Section Title
								</h4>

								<p className="text-sm leading-relaxed text-gray-700">
									This is placeholder text for the first section of the User Power pop‑up.
									Replace this with your real content later.
								</p>
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
						<div className="md:flex md:gap-10 mb-10 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Placeholder Pain Points
								</h4>

								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
									<li>Placeholder bullet point 1</li><br />
									<li>Placeholder bullet point 2</li><br />
									<li>Placeholder bullet point 3</li><br />
									<li>Placeholder bullet point 4</li>
								</ul>
							</div>

							{/* IMAGE */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full rounded-xl overflow-hidden bg-gray-200">
									<Image
										src="/image/philosophy-slide.jpg"
										alt="Design philosophy powerpoint"
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
						<div className="md:flex md:gap-10 mb-16 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Placeholder Section Title
								</h4>

								<p className="text-sm leading-relaxed text-gray-700">
									This is placeholder text for the first section of the User Power pop‑up.
									Replace this with your real content later.
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
						<div className="md:flex md:gap-10 mb-10 bg-gray-100 p-6 rounded-xl">

							{/* TEXT */}
							<div className="md:w-1/2">
								<h4 className="font-semibold text-gray-900 text-lg mb-2">
									Placeholder Pain Points
								</h4>

								<ul className="text-sm list-disc pl-5 space-y-1 text-gray-700">
									<li>Placeholder bullet point 1</li><br />
									<li>Placeholder bullet point 2</li><br />
									<li>Placeholder bullet point 3</li><br />
									<li>Placeholder bullet point 4</li>
								</ul>
							</div>

							{/* IMAGE */}
                            <div className="md:w-1/2 mt-6 md:mt-0 flex items-start">
                                <div className="w-full rounded-xl overflow-hidden bg-gray-200">
									<Image
										src="/image/feature-slide.jpg"
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
                © 2026 SeekSeatSit Portfolio — Mobile Friendly Page Built by Group 13
            </footer>

        </div>
    );
}
