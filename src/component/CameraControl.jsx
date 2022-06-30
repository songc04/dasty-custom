import gsap from 'gsap'

export function zoomInRoom(camera, orbit){
	return (event)=>{
		if (!!camera.current){
			if (event.intersections[0].eventObject != event.eventObject) return;
			const timeline = gsap.timeline({paused : true});

			timeline.to(camera.current.position, {
				x : -event.eventObject.position.x*0.01 - 5,
				y : event.eventObject.position.y*0.01 + 5,
				z : -event.eventObject.position.z*0.01 + 5,
				duration : 0.8,
				ease : "power1.out"
			});
			timeline.to(orbit.current.target, {
				x : -event.eventObject.position.x*0.01,
				y : event.eventObject.position.y*0.01,
				z : -event.eventObject.position.z*0.01,
				duration : 0.8,
				ease : "power1.out"
			}, "<");

			timeline.play();
		}
	};
}

export function zoomOutRoom(camera, orbit){
	return (event)=>{
		if (!!camera.current){
			if (event.intersections[0].eventObject != event.eventObject) return;
			const timeline = gsap.timeline({paused : true});

			timeline.to(camera.current.position, {
				x : -8,
				y : 8,
				z : 8,
				duration : 0.8,
				ease : "power1.out"
			});
			timeline.to(orbit.current.target, {
				x : 0,
				y : 0,
				z : 0,
				duration : 0.8,
				ease : "power1.out"
			}, "<");

			timeline.play();
		}
	};
}