import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentDate = new Date();
  currenturl: string = '';
  constructor(private router:Router,
    private firebaseService: FirebaseService,
    private localstorageService: LocalstorageService) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event:any) => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
   if(event.url =='/') {
        this.currenturl = 'home'
      }else {
        this.currenturl = event.url
      }
    });
  }
  currentState(url:string): boolean {
    return this.currenturl.includes(url)
   }
   logOut() {
     this.firebaseService.logout()

   }
   public get hasValidAuthenticationToken(): boolean {
    return this.localstorageService.hasValidAuthenticationToken()
  }

}
