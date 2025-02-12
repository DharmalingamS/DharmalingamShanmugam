"use_strict";

function onLoadInitialSetUp() {
	setInitialSelectedTab();

	screenResized();
	
	let element = document.getElementById("Harman Connected Services");
	element.style.display = "none";
	element = document.getElementById("Sourcebits Technologies");
	element.style.display = "none";

	element = document.getElementById("BellCanadaCompany");
	element.style.textDecoration = "underline";
	element.style.textUnderlineOffset = "5px";

	window.addEventListener("resize", screenResized);
}

function setInitialSelectedTab() {
	const element = document.getElementById("Intro");
	element.style.textDecoration = "underline";
	element.style.textUnderlineOffset = "5px";
}

function tabBarTapped(elementID) {
	let sectionElement = document.getElementById("Introduction");
	sectionElement.style.display = "none";

	sectionElement = document.getElementById("TechnicalSkills");
	sectionElement.style.display = "none";

	sectionElement = document.getElementById("professionalExperienceDetails");
	sectionElement.style.display = "none";


	let tabElements = document.getElementsByClassName("tabTapClass");
	for (tabElement of tabElements) {
		tabElement.style.textDecoration = "none";
	}

	if (elementID != "IntroName") {
		let element = document.getElementById(elementID);
		element.style.textDecoration = "underline";
		element.style.textUnderlineOffset = "5px";
	} else {
		setInitialSelectedTab();
	}

	if (elementID == "IntroName" || elementID == "Intro") {
		sectionElement = document.getElementById("Introduction");
		sectionElement.style.display = "flex";
	} else if (elementID == "Skills") {
		sectionElement = document.getElementById("TechnicalSkills");
		sectionElement.style.display = "flex";
	} else if (elementID == "Projects") {
		sectionElement = document.getElementById("professionalExperienceDetails");
		sectionElement.style.display = "flex";
		screenResized();
	}
}

function didSelectedCompany(companyID) {
	let elements = document.getElementsByClassName("professionalExperienceCompanyTap");
	for (element of elements) {
		element.style.textDecoration = "none";
	}

	let sectionElement = document.getElementById("Bell Canada");
	sectionElement.style.display = "none";
	sectionElement = document.getElementById("Harman Connected Services");
	sectionElement.style.display = "none";
	sectionElement = document.getElementById("Sourcebits Technologies");
	sectionElement.style.display = "none";

	element = document.getElementById(companyID);
	element.style.textDecoration = "underline";
	element.style.textUnderlineOffset = "5px";

	if (companyID == "BellCanadaCompany") {
		sectionElement = document.getElementById("Bell Canada");
		sectionElement.style.display = "flex";
	} else if (companyID == "HarmanConnectedServicesCompany") {
		sectionElement = document.getElementById("Harman Connected Services");
		sectionElement.style.display = "flex";
	} else if (companyID == "SourcebitsTechnologiesCompany") {
		sectionElement = document.getElementById("Sourcebits Technologies");
		sectionElement.style.display = "flex";
	}
}


function screenResized(event) {
	let width = window.innerWidth;
	//screen.width;//document.body.clientWidth;
	let tabParents = document.getElementsByClassName("tabClass");
	let tabParent = tabParents[0];
	let companyParents = document.getElementsByClassName("professionalExperienceCompany");
	let companyParent = companyParents[0];
	let companiesList = document.getElementById("professionalExperienceDetails");
	let comapanies = document.getElementsByClassName("professionalExperienceCompanyTap");

  	let companySectionWidth = companyParent.offsetWidth;
  	let companySectionHeight = companyParent.offsetHeight;
  	let projectsSection = document.getElementById("ProjectsSection");

  	if (width <= 400) {
  		tabParent.style.flexDirection = "column";

  		companyParent.style.minWidth = "100%";
  		companyParent.style.paddingBottom = "0%";

  		let companiesList = document.getElementById("professionalExperienceDetails");
  		companiesList.style.flexDirection = "column";

  		for (company of comapanies) {
  			company.style.textAlign = "center";
  		}
  		projectsSection.style.top = companySectionHeight + "px";
  		projectsSection.style.left = "0px";
  		projectsSection.style.width = "100%";
  	} else {
  		tabParent.style.flexDirection = "row";

  		companyParent.style.minWidth = "25%";
  		companyParent.style.paddingBottom = "100%";

  		companiesList.style.flexDirection = "row";

  		for (company of comapanies) {
  			company.style.textAlign = "left";
  		}
  		projectsSection.style.top = "0px"
  		projectsSection.style.left = companySectionWidth + 8 + "px";
  		projectsSection.style.width = "75%";
  	}

  	const top = tabParent.offsetHeight 
  	let introduction = document.getElementById("Introduction");
  	introduction.style.top = top + "px";;

  	let technicalSkill = document.getElementById("TechnicalSkills");
  	technicalSkill.style.top = top + 8 + "px";

  	let projects = document.getElementById("professionalExperienceDetails");
  	projects.style.top = top + 1 +"px";
}
