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
	console.log(elementID);

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
	}
}

function didSelectedCompany(companyID) {
	//debugger
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
	//debugger
  	if (width <= 400) {
  		let tabParents = document.getElementsByClassName("tabClass");
  		tabParents[0].style.flexDirection = "column";

  		let companyParent = document.getElementsByClassName("professionalExperienceCompany")
  		companyParent[0].style.minWidth = "100%";
  		companyParent[0].style.paddingBottom = "0%";

  		let companiesList = document.getElementById("professionalExperienceDetails");
  		companiesList.style.flexDirection = "column";

  		let comapanies = document.getElementsByClassName("professionalExperienceCompanyTap");
  		for (company of comapanies) {
  			company.style.textAlign = "center";
  		}
  	} else {
  		let tabParents = document.getElementsByClassName("tabClass");
  		tabParents[0].style.flexDirection = "row";

  		let companyParent = document.getElementsByClassName("professionalExperienceCompany")
  		companyParent[0].style.minWidth = "25%";
  		companyParent[0].style.paddingBottom = "100%";

  		let companiesList = document.getElementById("professionalExperienceDetails");
  		companiesList.style.flexDirection = "row";

  		let comapanies = document.getElementsByClassName("professionalExperienceCompanyTap");
  		for (company of comapanies) {
  			company.style.textAlign = "left";
  		}
  	}
}
