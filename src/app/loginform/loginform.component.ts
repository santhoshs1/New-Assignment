import { Component, OnInit } from '@angular/core';
import {FormControl,FormBuilder,FormGroup, Validators} from '@angular/forms'
import { UserService } from '../user.service';
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent  {
  hide=true;



  reactiveForm:FormGroup;
  submitted:boolean=false;

  constructor(private formBuilder:FormBuilder) { 
    this.reactiveForm=formBuilder.group({
     uname : ['',Validators.required],
     pwd: ['',Validators.required],
      
    });

  }
  onSubmit(){
    console.log(this.reactiveForm);
  }
//   formGroup:any;
  
//     FormGroup=new FormGroup({
//       uname:new FormControl("",[Validators.required]),
//       password:new FormControl("",[Validators.required]),

     

//     })
   
// }
  // loginForm :FormGroup;
  // username = new FormControl('', [Validators.required, Validators.username]);
  
  // getErrorMessage() {
  //   if (this.username.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.username.hasError('username') ? 'Not a valid username' : '';
  // }
}
 