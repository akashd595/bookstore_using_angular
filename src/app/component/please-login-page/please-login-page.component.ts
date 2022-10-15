import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-please-login-page',
  templateUrl: './please-login-page.component.html',
  styleUrls: ['./please-login-page.component.scss']
})
export class PleaseLoginPageComponent implements OnInit {
  Id: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.Id = this.route.snapshot.paramMap.get("Id");

  }

}
