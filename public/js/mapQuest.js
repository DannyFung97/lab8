function initMap() {
	L.mapquest.key = 'wp5SLA2UXsEd329zmaVmOapkdcddU6KP';
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});
	L.marker([32.88, -117.236]).addTo(map);
}