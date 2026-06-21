<script lang="ts">
	import logo from '../../images/cnotes-logo.png';
	import cnotesScreenshot from '../../images/modern-note-taking-app-interface-with-organized-no.png';
	import Icon from '@iconify/svelte';
	import './styles.css';
</script>

<div class="flex min-h-screen flex-col">
	<header
		class="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
	>
		<div class="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
			<div class="flex items-center gap-2 text-xl font-bold">
				<img src={logo} alt="logo" class="h-6 w-6" />
				<span class="text-primary">cnotes</span>
			</div>
			<div class="flex flex-1 items-center justify-end space-x-4">
				<nav class="flex items-center space-x-1">
					<a
						href="#features"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						<Icon icon="material-symbols:auto-awesome" class="h-4 w-4" />
						Features
					</a>
					<a
						href="#testimonials"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						<Icon icon="material-symbols:rate-review" class="h-4 w-4" />
						Reviews
					</a>
					<a
						href="#pricing"
						class="flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors hover:text-primary"
					>
						<Icon icon="material-symbols:payments" class="h-4 w-4" />
						Pricing
					</a>
				</nav>
			</div>
		</div>
	</header>

	<main class="flex-1">
		<section
			class="w-full bg-gradient-to-b from-card to-background py-12 md:py-24 lg:py-32 xl:py-48"
		>
			<div class="container px-8 md:px-12">
				<div class="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
					<div class="flex flex-col justify-center space-y-6">
						<div class="space-y-4">
							<div
								class="mb-2 inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
							>
								<Icon icon="material-symbols:smart-toy" class="h-4 w-4" />
								Smart Note-Taking Platform
							</div>
							<h1
								class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
							>
								Organize Your Notes.
								<span class="text-accent">Amplify Your Productivity.</span>
							</h1>
							<p class="max-w-[600px] text-balance text-muted md:text-xl">
								Transform the way you organize, share and collaborate on notes. cnotes helps
								students, turn scattered notes into structured knowledge.
							</p>
						</div>
						<div class="flex flex-col gap-3 min-[400px]:flex-row">
							<a href="https://cnotes.pages.dev">
								<button
									class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-primary/90"
								>
									Start Taking Notes
									<Icon icon="material-symbols:arrow-forward" class="h-4 w-4" />
								</button>
							</a>
							<a href="#features">
								<button
									class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md border border-accent bg-transparent px-8 text-accent hover:bg-accent/10 hover:text-accent-foreground"
								>
									See Features
									<Icon icon="material-symbols:keyboard-arrow-down" class="h-4 w-4" />
								</button>
							</a>
						</div>
					</div>
					<div class="relative">
						<img
							src={cnotesScreenshot}
							width={550}
							height={550}
							alt="cnotes app interface showing organized notes and collaboration features"
							class="mx-auto aspect-video overflow-hidden rounded-xl object-cover shadow-lg sm:w-full lg:order-last"
						/>
					</div>
				</div>
			</div>
		</section>

		<section id="features" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div
							class="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
						>
							<Icon icon="material-symbols:star" class="h-4 w-4" />
							Core Features
						</div>
						<h2 class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
							Everything You Need to Stay Organized
						</h2>
						<p
							class="max-w-[900px] text-balance text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Powerful features designed to enhance your note-taking experience and boost
							productivity.
						</p>
					</div>
				</div>

				<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-3">
									<Icon icon="material-symbols:note-alt" class="h-6 w-6 text-accent" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Smart Organization</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Automatic categorization</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Intelligent tagging and folder systems that automatically organize your notes based
								on content, making it easy to find what you need when you need it.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<Icon icon="material-symbols:search" class="h-6 w-6 text-primary" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Powerful Search</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Find anything instantly</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Advanced search capabilities that scan through all your notes, to help you locate
								information in seconds.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<Icon icon="material-symbols:bookmark" class="h-6 w-6 text-primary" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Save Shared Notes</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Save notes shared with you</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Build your own library from notes shared by classmates, friends, or collaborators by
								saving them to your account.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-3">
									<Icon icon="material-symbols:share" class="h-6 w-6 text-accent" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Easy Sharing</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Share notes with anyone</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Share your notes with classmates, study groups, or anyone who might benefit from
								your knowledge. Generate shareable links instantly.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-3">
									<Icon icon="material-symbols:cloud" class="h-6 w-6 text-primary" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Cloud Sync</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Access from anywhere</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Your notes are automatically synced across all your devices. Never lose a note again
								with our reliable cloud backup system.
							</p>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4">
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-3">
									<Icon icon="material-symbols:lock" class="h-6 w-6 text-accent" />
								</div>
								<div class="flex flex-col space-y-1.5">
									<cardTitle class="text-xl font-semibold leading-none tracking-tight"
										>Secure and Private</cardTitle
									>
									<cardDescription class="text-sm text-muted"
										>Your data is protected</cardDescription
									>
								</div>
							</div>
						</cardHeader>
						<cardContent class="space-y-4 pt-0">
							<p class="p-6 text-muted">
								Your notes are encrypted and protected. Control who sees your content with granular
								privacy settings.
							</p>
						</cardContent>
					</card>
				</div>
			</div>
		</section>

		<section id="testimonials" class="w-full py-16 md:py-24 lg:py-32 bg-card">
			<div class="container px-8 md:px-12">
				<div class="flex flex-col items-center justify-center space-y-4 text-center mb-12">
					<div class="space-y-2">
						<div
							class="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-sm text-accent font-medium"
						>
							<Icon icon="material-symbols:format-quote" class="h-4 w-4" />
							User Reviews
						</div>
						<h2 class="text-3xl font-bold tracking-tighter sm:text-5xl text-balance">
							Loved by Students and Professionals
						</h2>
						<p class="max-w-[900px] text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-balance">
							See how cnotes is transforming the way people organize their thoughts and collaborate.
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl gap-8 py-8 md:grid-cols-2 lg:grid-cols-3">
					<card class="border-0 shadow-lg bg-background">
						<cardHeader>
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-2">
									<Icon icon="material-symbols:star" class="h-5 w-5 text-accent" />
								</div>
								<div>
									<cardTitle class="text-lg">Sarah Chen</cardTitle>
									<cardDescription>Computer Science Student</cardDescription>
								</div>
							</div>
						</cardHeader>
						<cardContent>
							<p class="text-muted">
								"cnotes completely changed how I study. The search feature is incredible - I can find any concept
								from my lectures in seconds. My grades have improved significantly!"
							</p>
						</cardContent>
					</card>

					<card class="border-0 shadow-lg bg-background">
						<cardHeader>
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-primary/10 p-2">
									<Icon icon="material-symbols:star" class="h-5 w-5 text-primary" />
								</div>
								<div>
									<cardTitle class="text-lg">Marcus Rodriguez</cardTitle>
									<cardDescription>Product Manager</cardDescription>
								</div>
							</div>
						</cardHeader>
						<cardContent>
							<p class="text-muted">
								"Our team uses cnotes for all our brainstorming sessions. The collaboration features are seamless,
								and we can track the evolution of our ideas effortlessly."
							</p>
						</cardContent>
					</card>

					<card class="border-0 shadow-lg bg-background">
						<cardHeader>
							<div class="flex items-center gap-4">
								<div class="rounded-full bg-accent/10 p-2">
									<Icon icon="material-symbols:star" class="h-5 w-5 text-accent" />
								</div>
								<div>
									<cardTitle class="text-lg">Dr. Emily Watson</cardTitle>
									<cardDescription>Research Professor</cardDescription>
								</div>
							</div>
						</cardHeader>
						<cardContent>
							<p class="text-muted">
								"As a researcher, I need to organize vast amounts of information. cnotes' smart categorization has
								made my research process so much more efficient."
							</p>
						</cardContent>
					</card>
				</div>
			</div>
		</section>

		<section id="pricing" class="w-full py-16 md:py-24 lg:py-32">
			<div class="container px-8 md:px-12">
				<div class="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<div
							class="inline-flex items-center gap-2 rounded-lg bg-accent/10 px-3 py-1 text-sm font-medium text-accent"
						>
							<Icon icon="material-symbols:payments" class="h-4 w-4" />
							Pricing
						</div>
						<h2 class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
							Simple, Transparent Pricing
						</h2>
						<p
							class="max-w-[900px] text-balance text-muted md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Choose the plan that fits your needs. Start free, upgrade when you're ready.
						</p>
					</div>
				</div>

				<div class="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4 text-center">
							<cardTitle class="text-xl font-semibold">Free</cardTitle>
							<cardDescription>Perfect for getting started</cardDescription>
						</cardHeader>
						<cardContent class="space-y-4 p-6 pt-0">
							<div class="text-3xl font-bold">$0<span class="text-sm font-normal text-muted">/month</span></div>
							<ul class="space-y-2 text-sm text-muted">
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Unlimited personal notes
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Basic search
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Cloud sync on 2 devices
								</li>
								<li class="flex items-center gap-2 text-muted/50">
									<Icon icon="material-symbols:close" class="h-4 w-4" />
									Advanced collaboration
								</li>
							</ul>
							<button class="w-full h-10 rounded-md border border-accent bg-transparent text-accent hover:bg-accent/10">
								Get Started
							</button>
						</cardContent>
					</card>

					<card class="rounded-lg border-2 border-primary bg-card text-card-foreground shadow-lg relative">
						<div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
							Popular
						</div>
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4 text-center">
							<cardTitle class="text-xl font-semibold">Pro</cardTitle>
							<cardDescription>For serious students</cardDescription>
						</cardHeader>
						<cardContent class="space-y-4 p-6 pt-0">
							<div class="text-3xl font-bold">$5<span class="text-sm font-normal text-muted">/month</span></div>
							<ul class="space-y-2 text-sm text-muted">
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Everything in Free
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Unlimited devices
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Advanced search and filters
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Priority support
								</li>
							</ul>
							<button class="w-full h-10 rounded-md bg-primary text-white hover:bg-primary/90">
								Upgrade Now
							</button>
						</cardContent>
					</card>

					<card class="rounded-lg border-0 bg-card text-card-foreground shadow-lg">
						<cardHeader class="flex flex-col space-y-1.5 p-6 pb-4 text-center">
							<cardTitle class="text-xl font-semibold">Team</cardTitle>
							<cardDescription>For study groups and clubs</cardDescription>
						</cardHeader>
						<cardContent class="space-y-4 p-6 pt-0">
							<div class="text-3xl font-bold">$12<span class="text-sm font-normal text-muted">/month</span></div>
							<ul class="space-y-2 text-sm text-muted">
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Everything in Pro
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Up to 10 team members
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Shared folders and workspaces
								</li>
								<li class="flex items-center gap-2">
									<Icon icon="material-symbols:check" class="h-4 w-4 text-green-500" />
									Admin controls
								</li>
							</ul>
							<button class="w-full h-10 rounded-md border border-accent bg-transparent text-accent hover:bg-accent/10">
								Contact Sales
							</button>
						</cardContent>
					</card>
				</div>
			</div>
		</section>

		<section class="w-full py-16 md:py-24 lg:py-32 bg-card">
			<div class="container px-8 md:px-12">
				<div class="mx-auto max-w-3xl text-center space-y-6">
					<h2 class="text-balance text-3xl font-bold tracking-tighter sm:text-5xl">
						Ready to Transform Your Note-Taking?
					</h2>
					<p class="text-muted md:text-xl">
						Join thousands of students who are already organizing their knowledge with cnotes.
					</p>
					<div class="flex flex-col gap-3 min-[400px]:flex-row justify-center">
						<a href="https://cnotes.pages.dev">
							<button class="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-8 text-sm font-medium text-white ring-offset-background transition-colors hover:bg-primary/90">
								Get Started Free
								<Icon icon="material-symbols:arrow-forward" class="h-4 w-4" />
							</button>
						</a>
					</div>
				</div>
			</div>
		</section>
	</main>

	<footer class="w-full border-t bg-background">
		<div class="container flex flex-col gap-8 px-8 py-12 md:flex-row md:py-16">
			<div class="flex flex-col gap-3 md:w-1/3">
				<div class="flex items-center gap-2 text-xl font-bold">
					<img src={logo} alt="logo" class="h-6 w-6" />
					<span class="text-primary">cnotes</span>
				</div>
				<p class="text-muted">
					The smart note-taking platform designed for modern productivity. Organize, search, and
					collaborate like never before.
				</p>
			</div>
			<div class="grid grid-cols-2 gap-12 sm:grid-cols-3 md:flex-1">
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Product</h3>
					<nav class="flex flex-col gap-2">
						<a href="#features" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:auto-awesome" class="h-4 w-4" />
							Features
						</a>
						<a href="#pricing" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:payments" class="h-4 w-4" />
							Pricing
						</a>
						<a href="#" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:shield" class="h-4 w-4" />
							Security
						</a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Resources</h3>
					<nav class="flex flex-col gap-2">
						<a href="#" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:menu-book" class="h-4 w-4" />
							Documentation
						</a>
						<a href="#" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:help" class="h-4 w-4" />
							Help Center
						</a>
						<a href="/blog" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:newspaper" class="h-4 w-4" />
							Blog
						</a>
					</nav>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="text-base font-medium">Company</h3>
					<nav class="flex flex-col gap-2">
						<a href="#about" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:info" class="h-4 w-4" />
							About
						</a>
						<a href="#" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:contact-mail" class="h-4 w-4" />
							Contact
						</a>
						<a href="#" class="text-muted hover:text-primary flex items-center gap-2">
							<Icon icon="material-symbols:privacy-tip" class="h-4 w-4" />
							Privacy
						</a>
					</nav>
				</div>
			</div>
		</div>
		<div
			class="container flex flex-col gap-4 border-t px-8 py-6 md:flex-row md:items-center md:justify-between"
		>
			<p class="text-gray text-sm">
				&copy; {new Date().getFullYear()} cnotes. All rights reserved.
			</p>
			<div class="flex gap-6">
				<a href="#" class="text-gray hover:text-primary">
					<span class="sr-only">GitHub</span>
					<Icon icon="material-symbols:code" class="h-5 w-5" />
				</a>
			</div>
		</div>
	</footer>
</div>