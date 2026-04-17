	import { useState } from "react";
	import React from "react";
	import "./App.css";

	const content = {
	pt: {
		nav: ["Sobre", "O que faço", "Projetos", "Contato"],
		hero: {
			title: "Backend Developer",
			subtitle: "(Java)",
			p1: "Desenvolvo sistemas web com foco em backend, utilizando Java para construir aplicações robustas com autenticação de usuários, APIs e integração com banco de dados.",
			p2: "Tenho interesse em criar soluções que funcionem de forma consistente em cenários reais, lidando com lógica de negócio, organização de dados e comunicação entre diferentes partes do sistema.",
			btn1: "Ver projetos",
			btn2: "GitHub",
		},
		about: {
			title: "Sobre mim",
			p1: "Sou um desenvolvedor backend com foco em Java, interessado em construir aplicações web funcionais e entender como sistemas reais operam na prática.",
			p2: "Tenho experiência no desenvolvimento de sistemas com autenticação, integração com banco de dados e comunicação entre backend e frontend, sempre buscando criar aplicações que não apenas funcionem, mas que também sejam consistentes e bem organizadas.",
			p3: "Ao longo dos meus projetos, venho explorando diferentes formas de estruturar e implementar soluções, com foco em evoluir continuamente minhas habilidades e desenvolver sistemas cada vez mais completos.",
		},
		skills: {
			title: "O que eu faço",
			desc: "Desenvolvo sistemas web com foco em backend utilizando Java, com ênfase em autenticação, APIs e integração com banco de dados.",
			techLabel: "Tecnologias",
			techs: ["Java (Spring, Servlets)", "MySQL", "ReactJS", "JavaScript", "HTML", "CSS", "Git", "Firebase"],
		},
		projects: {
			title: "Projetos",
			list: [
			{
				name: "TaskPilot",
				desc: "Sistema web de gerenciamento de tarefas com autenticação de usuários e integração com banco de dados.",
				github: "https://github.com/luiz-henrique112/taskpilot/tree/master",
				demo: "https://taskpilot-2atb.onrender.com/login",
				demoLabel: "Ver mais",
				techs: ["Java (Spring Boot)", "MySQL", "JSP", "CSS"],
			},
			{
				name: "Finance Manager",
				desc: "Aplicação web para controle financeiro pessoal, com funcionalidades de cadastro, edição e exclusão de transações",
				github: "https://github.com/luiz-henrique112/finance-manager.git",
				demo: "https://luiz-henrique112.github.io/finance-manager/",
				demoLabel: "Ver mais",
				techs: ["HTML", "CSS", "JavaScript", "Firebase"],
			}/* ,
			{
				name: "SupplyGate",
				desc: "Sistema web de logística terceirizada com API backend e autenticação baseada em JWT.",
				github: "#",
				demo: "#",
				demoLabel: "Ver mais",
			}, */
			],
		},
		contact: {
			title: "Contato",
			desc: "Se quiser entrar em contato ou ver mais do meu trabalho:",
			items: [
			{ label: "GitHub", value: "github.com/luiz-henrique112", href: "https://github.com/luiz-henrique112" },
			{ label: "Email", value: "luiz.code01@gmail.com", href: "mailto:luiz.code01@gmail.com" },
			/* { label: "LinkedIn", value: "linkedin.com/in/seuusuario", href: "https://linkedin.com/in/seuusuario" }, */
			],
		},
		footer: "© 2026 Luiz Henrique — Backend Developer",
		langToggle: "EN",
	},
	en: {
		nav: ["About", "What I do", "Projects", "Contact"],
		hero: {
			title: "Backend Developer",
			subtitle: "(Java)",
			p1: "I build web systems with a backend focus using Java, creating robust applications with user authentication, APIs, and database integration.",
			p2: "I am interested in developing solutions that work reliably in real-world scenarios, handling business logic, data organization, and communication between different parts of a system.",
			btn1: "View projects",
			btn2: "GitHub",
		},
		about: {
			title: "About me",
			p1: "I am a backend developer focused on Java, interested in building functional web applications and understanding how real systems operate in practice.",
			p2: "I have experience developing systems with authentication, database integration, and backend–frontend communication, always aiming to create applications that are not only functional but also consistent and well-structured.",
			p3: "Through my projects, I explore different ways to design and implement solutions, continuously improving my skills and working towards building more complete systems.",
		},
		skills: {
			title: "What I do",
			desc: "I build web systems with a backend focus using Java, with emphasis on authentication, APIs, and database integration.",
			techLabel: "Technologies",
			techs: ["Java (Spring, Servlets)", "MySQL", "ReactJS", "JavaScript", "HTML", "CSS", "Git", "Firebase"],
		},
		projects: {
			title: "Projects",
			list: [
			{
				name: "TaskPilot",
				desc: "Task management web system with user authentication and database integration.",
				github: "https://github.com/luiz-henrique112/taskpilot/tree/master",
				demo: "https://taskpilot-2atb.onrender.com/login",
				demoLabel: "View more",
				techs: ["Java (Spring Boot)", "MySQL", "JSP", "CSS"],
			},
			{
				name: "Finance Manager",
				desc: "Web application for personal financial management, with features for registering, editing, and deleting transactions.",
				github: "https://github.com/luiz-henrique112/finance-manager.git",
				demo: "https://luiz-henrique112.github.io/finance-manager/",
				demoLabel: "Ver mais",
				techs: ["HTML", "CSS", "JavaScript", "Firebase"],
			}
			/* ,
			{
				name: "SupplyGate",
				desc: "Backend API with JWT-based authentication and access control.",
				github: "#",
				demo: "#",
				demoLabel: "View more",
			}, */
			],
		},
		contact: {
			title: "Contact",
			desc: "If you'd like to get in touch or see more of my work:",
			items: [
			{ label: "GitHub", value: "github.com/luiz-henrique112", href: "https://github.com/luiz-henrique112" },
			{ label: "Email", value: "luiz.code01@gmail.com", href: "mailto:luiz.code01@gmail.com" },
			/* { label: "LinkedIn", value: "linkedin.com/in/youruser", href: "" }, */
			],
		},
		footer: "© 2026 Luiz Henrique — Backend Developer",
		langToggle: "PT",
	},
	};

	export default function Portfolio() {
	const [lang, setLang] = useState("pt");
	const t = content[lang];

	const scrollTo = (id) => {
		document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
	};

	const sectionIds = ["about", "skills", "projects", "contact"];

	return (
		<div className="portfolio">
			{/* NAV */}
			<nav className="nav">
			<span className="nav-logo">LH</span>
			<ul className="nav-links">
				{t.nav.map((label, i) => (
					<li key={i}>
					<button className="nav-link" onClick={() => scrollTo(sectionIds[i])}>
						{label}
					</button>
					</li>
				))}
			</ul>
			<button className="lang-toggle" onClick={() => setLang(lang === "pt" ? "en" : "pt")}>
				{t.langToggle}
			</button>
			</nav>

			{/* HERO */}
			<section className="hero" id="hero">
			<div className="hero-content">
				<div className="hero-text">
					<p className="hero-eyebrow">Luiz Henrique</p>
					<h1 className="hero-title">
					{t.hero.title}
					<span className="hero-subtitle"> {t.hero.subtitle}</span>
					</h1>
					<p className="hero-desc">{t.hero.p1}</p>
					<p className="hero-desc">{t.hero.p2}</p>
					<div className="hero-actions">
					<button className="btn btn-primary" onClick={() => scrollTo("projects")}>
						{t.hero.btn1}
					</button>
					<a
						className="btn btn-outline"
						href="https://github.com/luiz-henrique112"
						target="_blank"
						rel="noopener noreferrer"
					>
						{t.hero.btn2}
					</a>
					</div>
				</div>

				{/* FOTO — substitua o src pela URL da sua foto  ----- MEXER NISSO QUANDO A FOTO FOR ADICIONADA */}
				{/* <div className="hero-photo-wrapper">
					<div className="hero-photo-placeholder">
					{/* 
						PARA ADICIONAR SUA FOTO:
						Substitua este bloco por:
						<img src="URL_DA_SUA_FOTO" alt="Luiz Henrique" className="hero-photo" />
						
						Ou usando arquivo local:
						<img src="/foto.jpg" alt="Luiz Henrique" className="hero-photo" />
					}
					<span className="photo-hint">Sua foto aqui</span>
					</div>
				</div> */}
			</div>

			<div className="hero-scroll-hint">↓</div>
			</section>

			{/* SOBRE MIM */}
			<section className="section" id="about">
			<div className="section-inner">
				<div className="section-label">01</div>
				<h2 className="section-title">{t.about.title}</h2>
				<div className="about-body">
					<p>{t.about.p1}</p>
					<p>{t.about.p2}</p>
					<p>{t.about.p3}</p>
				</div>
			</div>
			</section>

			{/* O QUE EU FAÇO */}
			<section className="section section-alt" id="skills">
			<div className="section-inner">
				<div className="section-label">02</div>
				<h2 className="section-title">{t.skills.title}</h2>
				<p className="skills-desc">{t.skills.desc}</p>
				<p className="tech-label">{t.skills.techLabel}</p>
				<ul className="tech-list">
					{t.skills.techs.map((tech, i) => (
					<li key={i} className="tech-tag">{tech}</li>
					))}
				</ul>
			</div>
			</section>

			{/* PROJETOS */}
			<section className="section" id="projects">
			<div className="section-inner">
				<div className="section-label">03</div>
				<h2 className="section-title">{t.projects.title}</h2>
				<div className="projects-grid">
					{t.projects.list.map((proj, i) => (
					<div className="project-card" key={i}>
						<div className="project-number">0{i + 1}</div>
						<h3 className="project-name">{proj.name}</h3>
						<p className="project-desc">{proj.desc}</p>
						<div className="projs_footer">
							<div className="tools">
								<p className="tech-label">{t.skills.techLabel}</p>
							
								<ul className="tech-list">
									{proj.techs.map((tech) => (
									<li key={i} className="tech-tag">{tech}</li>
									))}
								</ul> 
							</div>
							
							<div className="project-links">
								<a href={proj.github} className="btn btn-sm btn-outline" target="_blank" rel="noopener noreferrer">
								GitHub
								</a>
								<a href={proj.demo} className="btn btn-sm btn-ghost" target="_blank" rel="noopener noreferrer">
								{proj.demoLabel} →
								</a>
							</div>
						</div>
						
						</div>
					))}
				</div>
			</div>
			</section>

			{/* CONTATO */}
			<section className="section section-alt" id="contact">
			<div className="section-inner">
				<div className="section-label">04</div>
				<h2 className="section-title">{t.contact.title}</h2>
				<p className="contact-desc">{t.contact.desc}</p>
				<ul className="contact-list">
					{t.contact.items.map((item, i) => (
					<li key={i} className="contact-item">
						<span className="contact-label">{item.label}</span>
						<a href={item.href} className="contact-link" target="_blank" rel="noopener noreferrer">
							{item.value}
						</a>
					</li>
					))}
				</ul>
			</div>
			</section>

			{/* FOOTER */}
			<footer className="footer">
			<p>{t.footer}</p>
			</footer>
		</div>
	);
	}