import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      from_date : new FormControl(),
      to_date : new FormControl()
    })
  }


  form!: FormGroup
  fromDateInput:any
  toDateInput:any
  getData(){
    let data = this.form.value
    var self = this
    document.addEventListener('DOMContentLoaded', function () {
      data.from_date = document.getElementById('from_date');
      data.to_date = document.getElementById('to_date');
      console.log(data.from_date)
      console.log(data.to_date)

      data.from_date.addEventListener('input', function () {
        var fromDateValue = new Date( data.from_date.value);
        console.log(fromDateValue)
        var lastDay = new Date(fromDateValue.getFullYear(), fromDateValue.getMonth() + 1, 0).getDate();
        var toDateMinDate = fromDateValue.getFullYear() + '-' + (fromDateValue.getMonth() + 1) + '-01';
        var toDateMaxDate = fromDateValue.getFullYear() + '-' + (fromDateValue.getMonth() + 1) + '-' + lastDay;

         data.to_date.setAttribute('min', toDateMinDate);
         data.to_date.setAttribute('max', toDateMaxDate);

        // Clear the "To Date" value if it's outside the new range
        if ( data.to_date.value < toDateMinDate ||  data.to_date.value > toDateMaxDate) {
          data.to_date.value = '';
        }
      });
    });
  }
}
