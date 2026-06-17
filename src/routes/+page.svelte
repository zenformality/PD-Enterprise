<script lang="ts">
	// Imports
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import logo from './images/logo.png';
	import Icon from '@iconify/svelte';

	// Functions
	const isAdminRoute = derived(page, ($page) => {
		return $page.url.pathname.startsWith('/admin-dashboard');
	});
</script>

<div class="flex min-h-screen flex-col bg-gradient-to-b from-[#0b0b12] to-black text-gray-100">
	<header
		class="sticky top-0 z-40 w-full border-b border-white/10 bg-gradient-to-r from-gray-700/40 via-gray-800/30 to-gray-900/40 backdrop-blur"
		style:display={$isAdminRoute ? 'none' : 'block'}
	>
		<div class="container m-auto flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
			<div class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="logo" id="logo" class="filter" />
				<span class="text-white"> PD Enterprise </span>
			</div>
			<div class="flex flex-1 items-center justify-end space-x-4">
				<nav class="flex items-center space-x-1">
					<a
						href="#products"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-indigo-400"
					>
						<Icon icon="material-symbols:inventory-2-outline" class="h-4 w-4" />
						Products
					</a>
					<a
						href="#about"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-indigo-400"
					>
						<Icon icon="material-symbols:info-outline" class="h-4 w-4" />
						About
					</a>
					<a
						href="/blog"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:text-indigo-400"
					>
						<Icon icon="material-symbols:newspaper" class="h-4 w-4" />
						Blog
					</a>
				</nav>
			</div>
		</div>
	</header>

	<main class="m-auto flex-1">
		<section class="w-full py-24 md:py-36 lg:py-44 xl:py-52">
			<div class="container px-8 md:px-12">
				<div class="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
					<h1 class="text-3xl font-bold tracking-tight text-white sm:text-5xl xl:text-6xl/none">
						Empowering Students, Simplifying Learning.
					</h1>
					<p class="max-w-[600px] text-gray-400 md:text-lg">
						We create innovative student-focused software tools to help you learn smarter, not
						harder.
					</p>
					<div class="flex flex-col gap-3 min-[400px]:flex-row">
						<a href="/blog">
							<button
								class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#d0bcff] px-8 text-sm font-medium text-[#21005d] ring-offset-background transition-colors hover:bg-[#c3abf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								Check out our blog!
							</button>
						</a>
						<a href="#products">
							<button
								class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#d0bcff]/60 bg-transparent px-8 text-sm font-medium text-[#d0bcff] ring-offset-background transition-colors hover:bg-[#d0bcff]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
							>
								Explore Products
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id="products" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-indigo-500/15 px-3 py-1 text-sm text-indigo-300">
							Our Products
						</div>
						<h2 class="text-3xl font-bold tracking-tighter text-white sm:text-5xl">
							Tools Built for Student Success
						</h2>
						<p
							class="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Our suite of educational tools helps students excel in their academic journey.
						</p>
					</div>
				</div>

				<div class="grid gap-10 lg:grid-cols-2">
					<card
						class="relative overflow-hidden rounded-lg border border-white/10 bg-[#28262c] text-gray-100 shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-3">
									<Icon
										icon="material-symbols:psychology-outline"
										class="h-8 w-8 text-indigo-600"
									/>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-2xl font-semibold leading-none tracking-tight"
										>Grade AI</cardTitle
									>
									<cardDescription class="text-sm text-gray-400 text-muted-foreground"
										>AI-powered learning assistant</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 p-6">
							<p class="p-6 text-gray-300">
								A specially trained AI model designed not just to answer questions, but to teach
								students every concept thoroughly. Grade AI explains complex topics in simple terms,
								provides step-by-step solutions, and adapts to your learning style.
							</p>
							<div class="p-4">
								<a href="/products/grade-ai">
									<button
										class="btn inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border-none bg-[#d0bcff] px-4 py-2 text-sm font-medium text-[#21005d] ring-offset-background transition-colors hover:bg-[#c3abf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
									>
										Learn More
									</button>
								</a>
							</div>
						</cardContent>
					</card>

					<card
						class="relative overflow-hidden rounded-lg border border-white/10 bg-[#28262c] text-gray-100 shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-purple-100 p-3">
									<Icon icon="material-symbols:edit-note" class="h-8 w-8 text-purple-600" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-2xl font-semibold leading-none tracking-tight"
										>cnotes</cardTitle
									>
									<cardDescription class="text-sm text-gray-400 text-muted-foreground"
										>Collaborative note-taking platform</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 p-6">
							<p class="p-6 text-gray-300">
								A note-taking platform that makes organizing and sharing notes easier than ever.
								Create structured notes with rich formatting, collaborate with classmates in
								real-time, and access your study materials from any device.
							</p>
							<div class="p-4">
								<a href="/products/cnotes">
									<button
										class="btn inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-full border-none bg-[#d0bcff] px-4 py-2 text-sm font-medium text-[#21005d] ring-offset-background transition-colors hover:bg-[#c3abf7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
										>Learn More</button
									>
								</a>
							</div>
						</cardContent>
					</card>
				</div>

				<div class="mt-16 text-center">
					<div
						class="inline-block rounded-full border border-white/10 bg-gradient-to-r from-indigo-500/15 to-purple-500/15 px-6 py-3"
					>
						<p class="font-medium text-gray-200">More innovative apps launching soon!</p>
					</div>
				</div>
			</div>
		</section>

		<section id="about" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mx-auto max-w-4xl">
					<div class="flex flex-col items-center space-y-4 text-center">
						<h2 class="text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
							Created by Students Who Understand Your Challenges
						</h2>
						<p class="max-w-[700px] text-gray-400 md:text-lg">
							We understand the challenges students face because we've been there ourselves.
						</p>
					</div>
					<div class="mt-10 grid gap-6 md:grid-cols-2">
						<div class="rounded-xl bg-[#d0bcff] p-6 shadow-sm">
							<h3 class="mb-2 text-xl font-semibold text-[#21005d]">Our Mission</h3>
							<p class="text-[#1d192b]">
								We believe every student deserves access to resources that make learning engaging,
								efficient, and collaborative.
							</p>
						</div>
						<div class="rounded-xl bg-[#efb8c8] p-6 shadow-sm">
							<h3 class="mb-2 text-xl font-semibold text-[#492532]">Our Vision</h3>
							<p class="text-[#31111d]">
								To be the leading provider of student-focused software, transforming the way
								students learn and achieve academic success.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- <section id="testimonials" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div class="inline-block rounded-lg bg-indigo-500/15 px-3 py-1 text-sm text-indigo-300">
							Testimonials
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">What Students Say</h2>
						<p
							class="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Hear from students who have transformed their academic experience with our tools.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-2">
									<users class="h-5 w-5 text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>Alex Johnson</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Computer Science Major</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"Grade AI helped me understand complex algorithms that I was struggling with. It's
								like having a tutor available 24/7 who actually teaches me how to solve problems."
							</p>
						</cardContent>
					</card>
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-purple-100 p-2">
									<users class="h-5 w-5 text-purple-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>Mia Rodriguez</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Biology Student</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"cnotes transformed how I organize my study materials. Being able to collaborate
								with classmates and access my notes from anywhere has been a game-changer."
							</p>
						</cardContent>
					</card>
					<card
						class="bg-card text-card-foreground overflow-hidden rounded-lg border-0 bg-gradient-to-br from-indigo-50 to-white shadow-lg"
					>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-0">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-indigo-100 p-2">
									<users class="h-5 w-5 text-indigo-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="lucide lucide-users h-5 w-5 text-indigo-600"
											><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle
												cx="9"
												cy="7"
												r="4"
											></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path
												d="M16 3.13a4 4 0 0 1 0 7.75"
											></path></svg
										>
									</users>
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-lg font-semibold leading-none tracking-tight"
										>James Lee</cardTitle
									>
									<cardDescription class="text-muted-foreground text-sm text-gray-600"
										>Engineering Major</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="flex flex-col space-y-4 p-6 pt-6">
							<p class="text-gray-600">
								"The combination of Grade AI and cnotes has completely changed how I study. I'm
								understanding concepts better and my grades have improved significantly."
							</p>
						</cardContent>
					</card>
				</div>
			</div>
		</section> -->
	</main>

	<footer class="w-full border-t border-white/10">
		<div class="container m-auto flex flex-col gap-8 px-8 py-12 md:flex-row md:py-16">
			<div class="flex flex-col gap-3 md:w-1/3">
				<div class="flex items-center gap-2 text-xl font-bold">
					<img src={logo} alt="logo" id="logo" class="filter" />
					<span
						class="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
					>
						PD Enterprise
					</span>
				</div>
				<p class="text-gray-400">
					Built by students, for students. Educational software solutions designed to enhance
					learning experiences.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Products</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Grade AI </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> cnotes </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Coming Soon </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Resources</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Documentation </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Tutorials </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Blog </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Support </a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Company</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-gray-400 hover:text-indigo-400"> About </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Careers </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Contact </a>
						<a href="#" class="text-gray-400 hover:text-indigo-400"> Privacy Policy </a>
					</nav>
				</div>
			</div>
		</div>
		<div
			class="container m-auto flex flex-col gap-4 border-t border-white/10 px-8 py-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-sm text-gray-500">
				&copy; {new Date().getFullYear()} PD Enterprise. All rights reserved.
			</p>
			<div class="flex gap-6">
				<a href="#" class="text-gray-500 hover:text-indigo-400">
					<span class="sr-only">GitHub</span>
					<Icon icon="material-symbols:code" class="h-5 w-5" />
				</a>
			</div>
		</div>
	</footer>
</div>

<style>
	:root {
		--image-size: 70px;
	}
	#logo {
		width: var(--image-size);
		border-radius: 100px;
		cursor: pointer;
		margin-bottom: 10px;
	}
</style>
