import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-place',
  templateUrl: './order-place.component.html',
  styleUrls: ['./order-place.component.scss']
})
export class OrderPlaceComponent implements OnInit {

  Id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("Id");

  }

}
