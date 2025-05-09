import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  vreifyExist():boolean{
    return true;
  }

  addInDatabase(){
    console.log("Added");
  }
}
