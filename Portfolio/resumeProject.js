var navMenuAnchorTags=document.querySelectorAll('.nav-menu a');


for(var i=0;i<navMenuAnchorTags.length;i++)
{
	navMenuAnchorTags[i].addEventListener('click',function(event){
		
		event.preventDefault();
		var targetSectionID=this.textContent.trim().toLowerCase();
		var targetSection=document.getElementById(targetSectionID);
		
		var scroll=setInterval(function(){
			var targetCoordinates=targetSection.getBoundingClientRect();
			if(targetCoordinates.top<=0)
			{
				clearInterval(scroll);
				return;
			}
			window.scrollBy(0,50);
		},20);
	});
}







var progressBars= document.querySelectorAll('.skills-progress > div');
var skillsContainer=document.getElementById('skills-container');
window.addEventListener('scroll',checkScroll);
var animationDone=false;

function initialiseBars()
{
	for(let bar of progressBars)
	{
		bar.style.width = 0 +'%'; 
	}
}
initialiseBars();

function fillBars()
{
	for(let bar of progressBars)
	{
		let targetWidth = bar.getAttribute('data-bar-width'); 
		let currentWidth=0;
		let interval=setInterval(function() {
			if(currentWidth>targetWidth)
			{
				clearInterval(interval);
				return;
			}
			else
			{
				currentWidth++;
				bar.style.width = currentWidth +'%';
			}
		},10);
	}
}

function checkScroll() {
	var Coordinates=skillsContainer.getBoundingClientRect();
	if(!animationDone && Coordinates.top < window.innerHeight)
	{
		animationDone=true;
		console.log('skill section visible');
		fillBars();
	}
}