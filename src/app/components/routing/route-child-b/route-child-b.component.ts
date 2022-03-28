import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-child-b',
  templateUrl: './route-child-b.component.html',
  styleUrls: ['./route-child-b.component.scss']
})
export class RouteChildBComponent implements OnInit {

  driverNumber = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.snapshot.params?.id) {
      // this.route.snapshot.params['id']
      console.log(this.route.snapshot.params.id);
      this.driverNumber = this.route.snapshot.params.id;
    }
  }

}
