import { Component, OnInit } from '@angular/core';

export var pie = [
  {
    "name": "Calcinha",
    "value": 1750
  },
  {
    "name": "Sutiã",
    "value": 972
  },
  {
    "name": "Vestido",
    "value": 5712
  },
  {
    "name": "Pulseira",
    "value": 2376
  },
  {
    "name": "Colar verde",
    "value": 516
  },
  {
    "name": "Brinco",
    "value": 3495
  },
  {
    "name": "Aliança",
    "value": 10517
  },
  {
    "name": "Biquini azul",
    "value": 4176
  }
];

export var bar = [
  {
    "name": "Segunda",
    "series": [
      {
        "name": "Anterior",
        "value": 1200
      },
      {
        "name": "Atual",
        "value": 1700
      }
    ]
  },

  {
    "name": "Terça",
    "series": [
      {
        "name": "Anterior",
        "value": 600
      },
      {
        "name": "Atual",
        "value": 300
      }
    ]
  },

  {
    "name": "Quarta",
    "series": [
      {
        "name": "Anterior",
        "value": 1400
      },
      {
        "name": "Atual",
        "value": 2700
      }
    ]
  },

  {
    "name": "Quinta",
    "series": [
      {
        "name": "Anterior",
        "value": 800
      },
      {
        "name": "Atual",
        "value": 500
      }
    ]
  },

  {
    "name": "Sexta",
    "series": [
      {
        "name": "Anterior",
        "value": 2000
      },
      {
        "name": "Atual",
        "value": 1800
      }
    ]
  },

  {
    "name": "Sábado",
    "series": [
      {
        "name": "Anterior",
        "value": 3200
      },
      {
        "name": "Atual",
        "value": 3200
      }
    ]
  },

  {
    "name": "Domingo",
    "series": [
      {
        "name": "Anterior",
        "value": 1000
      },
      {
        "name": "Atual",
        "value": 800
      }
    ]
  }
];


export var mesano = [
  {
    "name": "2021",
    "series": [
      {
        "name": "Janeiro",
        "value": 300
      },
      {
        "name": "Fevereiro",
        "value": 400
      },
      {
        "name": "Março",
        "value": 700
      },
      {
        "name": "Abril",
        "value": 800
      },
      {
        "name": "Maio",
        "value": 1000
      },
      {
        "name": "Junho",
        "value": 1400
      },
      {
        "name": "Julho",
        "value": 2000
      },
      {
        "name": "Agosto",
        "value": 1200
      },
      {
        "name": "Setembro",
        "value": 1000
      },
      {
        "name": "Outubro",
        "value": 600
      },
      {
        "name": "Novembro",
        "value": 400
      },
      {
        "name": "Dezembro",
        "value": 1800
      }
    ]
  },

  {
    "name": "2022",
    "series": [
      {
        "name": "Janeiro",
        "value": 800
      },
      {
        "name": "Fevereiro",
        "value": 600
      },
      {
        "name": "Março",
        "value": 300
      },
      {
        "name": "Abril",
        "value": 400
      },
      {
        "name": "Maio",
        "value": 1500
      },
      {
        "name": "Junho",
        "value": 1800
      },
      {
        "name": "Julho",
        "value": 2500
      },
      // {
      //   "name": "Agosto",
      //   "value": 800
      // },
      // {
      //   "name": "Setembro",
      //   "value": 300
      // },
      // {
      //   "name": "Outubro",
      //   "value": 400
      // },
      // {
      //   "name": "Novembro",
      //   "value": 1000
      // },
      // {
      //   "name": "Dezembro",
      //   "value": 1500
      // }
    ]
  },
];


@Component({
  selector: 'app-shop-dashboard',
  templateUrl: './shop-dashboard.component.html',
  styleUrls: ['./shop-dashboard.component.css']
})
export class ShopDashboardComponent implements OnInit {

  single!: any[];
  multi!: any[];
  pie!: any[];
  bar!: any[];
  mesano!: any[];

  view: any = [800, 600];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  showYAxisLabel = true;
  xAxisLabel = '';
  yAxisLabel = 'Montante (BRL)';
  legendTitle: string = 'Dias';
  legend: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  timeline: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  // legendPosition: string = 'below';

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    Object.assign(this, { pie, bar, mesano })
  }

  ngOnInit(): void {
    
  }

  onSelect(event: any) {
    console.log(event);
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
