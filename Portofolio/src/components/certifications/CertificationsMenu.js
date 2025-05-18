import Salesforce from "../../assets/salesforce.png";
import MongoDB from "../../assets/MongoDB.png";
import nptel from "../../assets/nptel.png";
import IBM from "../../assets/ibm.png";
import certificate from "../../assets/sdp.png";
import hacker from "../../assets/hacker.png";
import django from "../../assets/django.png";
import problemsolving from "../../assets/problemsloving.png";
import java from "../../assets/java.png";
import Lingua from "../../assets/linguaskill.png";
import coding from 	"../../assets/coding.png";


const Menu = [
	{
		id:1,
		title: "MongoDB Certified Developer Associate",
		company: "MongoDB",
		certificate: {
			src: MongoDB,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 2,
		title: "NPTEL ",
		company: "IIT Kharagpur",
		certificate:{
			src: nptel,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 3,
		title: "Salesforce Certified AI Associate",
		company: "Salesforce",
		certificate: {
			src: Salesforce,
			style: { width: '100%', height: 'auto' }
		}
	},
	
	{
		id: 4,
		title: "Introduction to Machine Learning",
		company: "IBM - Coursera",
		certificate: {
			src: IBM,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 5,
		title: "Linguaskill General - English Language Proficiency",
		company: "Cambridge University Press and Assessment",
		certificate: {
			src: Lingua,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 6,
		title: "Web Development Intern",
		company: "Skill Craft Technology",
		certificate: {
			src: certificate,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 7,
		title: "Django for Everybody",
		company: "University of Michigan - Coursera",
		certificate: {
			src: django,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 8,
		title: "Node(basic)",
		company: "HackerRank",
		certificate: {
			src: hacker,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 9,
		title: "Problem solving (Basic)",
		company: " HackerRank",
		certificate: {
			src: problemsolving,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 10,
		title: "Design patterns in Java",
		company: "University of alberta - Coursera",
		certificate: {
			src: java,
			style: { width: '100%', height: 'auto' }
		}
	},
	{
		id: 11,
		title: "Coding Preparation",
		company: "Meta-Coursera",
		certificate: {
			src: coding,
			style: { width: '100%', height: 'auto' }
		}
	},
	
	
];

export default Menu;