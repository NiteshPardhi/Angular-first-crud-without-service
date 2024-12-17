import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../register/./password-validation';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  submitData: any = [];
  newArray: any = [];
  newID: any = '';
  submitted = false;

  constructor(private route : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

    this.newID = this.activatedRoute.snapshot.params['id'] ? this.activatedRoute.snapshot.params['id'] : "";
    // console.log('newID',this.newID);

    //for get data without service using local storage
    let arrayData : any = {};
    if(this.newID != null && this.newID != undefined && this.newID != ''){
      let localData = JSON.parse(localStorage.getItem('data') || '{}');

      let selectdata : any = localData.filter((item : any)=>{
        return item.id == this.newID
      })

      if(selectdata != null && selectdata != undefined && selectdata.length > 0){
        arrayData = {...selectdata[0]}
      }
    }
    
    this.registerForm = new FormGroup(
      {
        fName: new FormControl('',[Validators.required, Validators.pattern('[a-zA-Z ]*')]),
        lName: new FormControl('',[Validators.required]),
        email: new FormControl('',[Validators.required]),
        mobileNo: new FormControl('',[Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),
        id: new FormControl('',[Validators.required, Validators.pattern("^[0-9]*$")]),
        password: new FormControl('',[Validators.required]),
        confirmPassword: new FormControl('',[Validators.required])
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

    this.registerForm.patchValue(arrayData);
  }

  //for submit the form data
  addData(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }
    
    this.submitData = this.registerForm.value;

    // localStorage.setItem('data', JSON.stringify(this.newArray));
    let arrayOfLocalData = JSON.parse(localStorage.getItem('data') || '[]');

    let arrayOfData = {...this.submitData};
    let newEmail = arrayOfData.email;
    let existEmail = arrayOfLocalData.filter((stud : any)=> {
      return stud.email == newEmail
    })
    if(existEmail.length > 0 && this.newID == ""){
      alert('This email is already exist..')
      return;
    }else{
      let existEmail = arrayOfLocalData.filter((stud : any)=> {
        return (stud.email == newEmail && stud.id != this.newID)
      })
      if(existEmail.length > 0){
        return alert('This email is already exist..')
      }
    }

    //for update the data to the local storage
    if(this.newID != null && this.newID != undefined && this.newID != ''){
      let ind = arrayOfLocalData.findIndex((item : any)=>{
        return item.id == this.newID;
      })
      arrayOfLocalData[ind] = {...this.submitData};
      alert('Data Update Successfully..')

    }else {
      arrayOfLocalData.push(this.submitData);
      alert('Data Added Successfully...')
    }
    
    localStorage.setItem('data', JSON.stringify(arrayOfLocalData));
    this.route.navigate(['/table']);
  }

  //for reset the form data
  resetData(){
    this.registerForm.reset();
  }

  canDeactivate(): Observable<boolean> {
    //console.log(this.isSaved)
    if (this.registerForm.touched ) {
      const result = window.confirm('There are unsaved changes! Are you sure you want to exit....?');
      return of(result);
    }
    return of(true);
  }

}
