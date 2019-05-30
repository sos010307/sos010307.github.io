const app = new App();

const event = new Event();

function App(){
	this.init = () => {
		this.set();
	}
	this.set = () => {
		$(window).bind("mousewheel",function(e){
			event.getScroll(e)
		})
	}
}
function Event(e){
	var section = $("#wrap > section");
	var sCnt = 0;
	this.pageIn = _ => {
		$("section").fadeIn();
		$("section>*").animate({transform:"	translateY(0)"},500);
	}
	this.getScroll = (e) => {
		if($("html, body")).is(":animated") return false;
		if(e.originalEvent.wheelDeltaY > 0){
			sCnt++;
		}else{
			
		}
			
	}
	this.scrollEvent = (sCnt) => {
		var offset = $(section[sCnt]).offset();
		$("html, body").animate({scrollTop: offset.top},500);
	}

}


app.init();
event.pageIn();