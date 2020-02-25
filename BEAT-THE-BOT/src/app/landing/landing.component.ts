import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userDetails: any;
  constructor(public router: Router, public activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.userDetails = this.activateRoute.snapshot.queryParams;
    localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
    console.log(this.activateRoute.snapshot.queryParams, 'this.activateRoute.snapshot.queryParams');
  }
goToHome() {
  const navigationExtras: NavigationExtras = {
    queryParams: this.userDetails
  };
  this.router.navigate(['/home', navigationExtras]);
}
}
