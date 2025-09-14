import { Component } from '@angular/core';

@Component({
  selector: 'app-popular-equipment',
  standalone:false,
  templateUrl: './popular-equipment.component.html',
  styleUrls: ['./popular-equipment.component.scss'] // optional
})
export class PopularEquipmentComponent {
  equipments = [
    { name: 'Tractor', location: 'Rajshahi', price: 1500, image: 'https://img.freepik.com/free-photo/tractor-field_1112-1206.jpg' },
    { name: 'Combine Harvester', location: 'Bogura', price: 4000, image: 'https://img.freepik.com/free-photo/combine-harvester-field_1112-1179.jpg' },
    { name: 'Irrigation Pump', location: 'Mymensingh', price: 800, image: 'https://img.freepik.com/free-photo/irrigation-system-agriculture_1112-1342.jpg' },
    { name: 'Plough', location: 'Dinajpur', price: 1200, image: 'https://img.freepik.com/free-photo/farmer-ploughing-field-tractor_1232-2545.jpg' },
    { name: 'Seeder', location: 'Khulna', price: 1000, image: 'https://img.freepik.com/free-photo/tractor-seeding-field_1232-2645.jpg' },
    { name: 'Sprayer', location: 'Barishal', price: 700, image: 'https://img.freepik.com/free-photo/farmer-using-sprayer_1232-2345.jpg' },
    { name: 'Baler', location: 'Rangpur', price: 3500, image: 'https://img.freepik.com/free-photo/tractor-baling-hay_1232-2445.jpg' },
    { name: 'Rotavator', location: 'Chittagong', price: 1500, image: 'https://img.freepik.com/free-photo/rotavator-tractor-field_1232-2540.jpg' },
    { name: 'Cultivator', location: 'Sylhet', price: 1300, image: 'https://img.freepik.com/free-photo/tractor-cultivating-field_1232-2580.jpg' },
    { name: 'Harrows', location: 'Jessore', price: 900, image: 'https://img.freepik.com/free-photo/harrowing-field-tractor_1232-2590.jpg' },
    { name: 'Threshing Machine', location: 'Comilla', price: 3000, image: 'https://img.freepik.com/free-photo/threshing-machine-field_1232-2690.jpg' },
    { name: 'Chaff Cutter', location: 'Noakhali', price: 600, image: 'https://img.freepik.com/free-photo/chaff-cutter-machine_1232-2790.jpg' },
    { name: 'Power Tiller', location: 'Madaripur', price: 1800, image: 'https://img.freepik.com/free-photo/power-tiller-field_1232-2890.jpg' },
    { name: 'Wheel Loader', location: 'Gazipur', price: 5000, image: 'https://img.freepik.com/free-photo/wheel-loader_1232-2990.jpg' },
    { name: 'Mini Excavator', location: 'Tangail', price: 4500, image: 'https://img.freepik.com/free-photo/mini-excavator-field_1232-3090.jpg' },
  ];
}
