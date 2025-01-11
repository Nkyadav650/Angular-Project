import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexChart,
  ApexResponsive,
  ApexFill,
  ApexLegend,
  ApexDataLabels,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ChartsComponent {
//   @ViewChild('chart') chart!: ChartComponent;
//   public chartOptions: Partial<ChartOptions>;

  


// constructor(@Inject(PLATFORM_ID) private platformId: any)  {
//     this.chartOptions = {
//       series: [44, 55, 41, 17, 15],
//       chart: {
//         width: 380,
//         type: 'donut',
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       fill: {
//         type: 'gradient',
//       },
//       legend: {
//         formatter: function (val, opts) {
//           return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
//         },
//       },
//       responsive: [
//         {
//           breakpoint: 480,
//           options: {
//             chart: {
//               width: 200,
//             },
//             legend: {
//               position: 'bottom',
//             },
//           },
//         },
//       ],
//     };
//   }

//   isSupported(): boolean {
//     return isPlatformBrowser(this.platformId) && !!indexedDB;
//   }
}

// export type ChartOptions = {
//   series: ApexNonAxisChartSeries;
//   chart: ApexChart;
//   responsive: ApexResponsive[];
//   labels: any;
//   fill: ApexFill;
//   legend: ApexLegend;
//   dataLabels: ApexDataLabels;
// };
