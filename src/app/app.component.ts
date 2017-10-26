import { Component,OnInit } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';

interface UserResponse{
  login: string,
  bio: string,
  company:string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private http: HttpClient){
  
  }
  
  ngOnInit(): void{
    this.http.get<UserResponse>('https://api.github.com/users/seeschweiler').subscribe(data=>{
      console.log("login:"+data.login);
       console.log("bio:"+data.bio);
       console.log("company:"+data.company);
      
    },
      (err: HttpErrorResponse)=>{
        if(err.error instanceof Error){
           console.log("Client Side error occured");
        }else{
          console.log("server sideerror occured");
        }
        
      }
    )
    const req=this.http.post('http://jsonplaceholder.typicode.com/posts',{
      title:'foo',
      body:'bar',
      userId:1
    })
    .subscribe(
    res=>{
      console.log(res);
    },
      err=>{
        console.log("Error Occured");
      }
    )
    
  }
  
}
