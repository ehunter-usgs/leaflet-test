import { Component } from '@angular/core';

import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  ngOnInit() {
    // Create map (center on US)
    let map = L.map('map', {
      center: [ 38, -95 ],
      zoom: 4
    });

    // Add street map tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, ' +
        'Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, ' +
        'Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the ' +
        'GIS User Community'
    }).addTo(map);
  }
}
