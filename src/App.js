import React from 'react';
import './App.css';

function App() {
	return (
		<div>
			<nav class="navbar background">
				<ul class="nav-list">
					<div class="logo">
						<img src=
               "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf97kkGIgAP4Jc3_2p6nCnu6pQ8qyJi-UY1A&usqp=CAU" />
					</div>
					<li><a href="#courses">working time 11.00am t0 5.00pm</a></li>
					<li><a href="#tutorials">picaso arts</a></li>
					<li><a href="#jobs">Jobs vacant</a></li>
					<li><a href='#student'>Student entry</a></li>
				</ul>

				<div class="rightNav">
					<input type="text" name="search" id="search" />
					<button class="btn btn-sm">Search</button>
				</div>
			</nav>

			<section class="section">
				<div class="box-main">
					<div class="firstHalf">
						<img src= "https://www.shutterstock.com/image-vector/word-invitation-elegant-modern-calligraphy-260nw-1231544731.jpghttps://www.shutterstock.com/image-vector/word-invitation-elegant-modern-calligraphy-260nw-1231544731.jpg"/>
						
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							OPENS @ 23rd Aprl 2023
						</h1>
						<p class="text-small">
							We heartfully invite all the artists and blooming artists to celebrate the 
              grand opening of our new art studio..!!
						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
							All Are Welcomed
						</h1>
						<p class="text-small">
							
                VENUE  ``: Gandhipuram 

						</p>
					</div>
				</div>
			</section>
			<section class="section">
				<div class="box-main">
					<div class="secondHalf">
						<h1 class="text-big" id="program">
						</h1>
						<p class="text-small">
							
						</p>
					</div>
				</div>
			</section>
			<footer className="footer">
				<p className="text-footer">
					# OPEN FOR EVERY ARTISTS #
				</p>
			</footer>
		</div>
	)
}

export default App