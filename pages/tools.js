import React from 'react'
import {Layout, Button} from '../components'

const Tools = () => (
	<div className="description">
		<h1 className="Title">Tools</h1>
		<div className="logo"><img src="/static/cartoon-blue.png" alt="Logo"/></div>
		<div className="txt">
			<h1 className="txtTitle">Tools</h1>
			<p>Jerry has been involved with the Bitcoin & Blockchain technology space since October 2013. As a specialist with Blockchain technology and a community coordinator, he assists decision makers prepare and align for the velocity of changes that are transforming their respective industry. </p>
			<p>Jerry holds an Undergraduate Degree in Biology and Ecology – McMaster University. He is familiar with Cryptography and Game Theory Concepts that are a must know for the fast evolving Blockchain space. Together with this, he is experienced in the training space combined with hardware, networking and related Information Technology experience.</p>
			<p>Having come from a start-up background, Jerry currently works on OpenBounty, a project management platform utilizing Ethereum and Smart Contracts. Jerry also consults technology startups looking to obtain and integrate Blockchain technology to their existing platforms. In his spare time, Jerry writes and audits various Smart Contracts codes, trades cryptocurrencies, and maintain relations with people working in this technology space.</p>
			<p>Jerry coordinates The Bitcoin Bay, the largest and longest running Bitcoin meetup group in Toronto exchanging the flow of ideas in the Bitcoin space. Focus revolves around addressing and exploring real-world applications of Bitcoin and Blockchain technology.</p>
			<Button msg="Check my profile" target href="//www.linkedin.com/in/jerry-qian-4ba2a79a/" dark />
		</div>
		<style>{`
			.description {
				text-align: center;
				color: #FFF;
				width: 90%;
				margin: 0 auto;
				max-width: 1024px;
				font-family: Raleway;
			}
			.Title { text-transform: uppercase; text-align: center; font-family: Montserrat; }
			.txtTitle { display: none; text-transform: uppercase; font-family: Montserrat; }
			.logo {
				position: relative;
				padding-top: 50px;
				height: 60vh;
			}
			.logo img { width: auto; height: 100%; }
			.txt p {
				text-align: justify;
				font-size: 14px;
				line-height: 24px;
			}
			@media screen and (max-width: 1024px) {
				.description { padding-bottom: 50px; }
			}
			@media screen and (min-width: 1024px) {
				.txtTitle { display: block; }
				.Title { display: none; }
				.description {
					display: -webkit-flex;display: -moz-flex;display: -ms-flex;display: -o-flex;display: flex;
					justify-content: center;
					max-width: 1200px;
					-ms-align-items: center;align-items: center;
					-webkit-flex-wrap: wrap;-moz-flex-wrap: wrap;-ms-flex-wrap: wrap;-o-flex-wrap: wrap;flex-wrap: wrap;
				}
				.logo {
					width: 30%;
					padding-top: 20px;
					max-height: auto;
					height: auto;
				}
				.logo img { width: 100%; height: auto; }
				.txt {
					width: 65%;
					margin-left: 5%;
				}
			}
		`}</style>
	</div>
)

export default () => (<Layout title="Tools" content={Tools}/>)
