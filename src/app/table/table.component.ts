import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  arrayOfEmployee: any = [];
  searchInput = '';
  filterData: any[] = [];
  allData: any[] = [];
  sortDir = 1;
  deleteArray: any;
  newArray: any = [];
  displayStyle = 'none';
  p : any;

  constructor(private route: Router) {}

  ngOnInit(): void {
    let data:any[] = JSON.parse(localStorage.getItem('data') || '{}');
    console.log('EmployeeArray', this.arrayOfEmployee);

    if(data){
      this.arrayOfEmployee = data;
    }
    this.allData = this.arrayOfEmployee
  }

  //for filter table data
  searchRow(event: any) {
    this.searchInput = event.target.value;

    this.filterData = this.allData.filter((item: any) => {
      return item.fName.toLowerCase().includes(this.searchInput.toLowerCase());
    });
    this.arrayOfEmployee = [...this.filterData];

    // let regex = new RegExp(this.searchInput, "i");
    // this.filterData = this.arrayOfEmployee.filter((x: any)=> regex.test(x.fName));
  }

  //for edit row local storage
  editRow(id: any) {
    console.log(id);
    this.route.navigate(['/register/' + id]);
  }

  //for delete row with local storage
  deleteRow(id : any) {
    this.arrayOfEmployee = JSON.parse(localStorage.getItem('data') || '{}');
    this.deleteArray = this.arrayOfEmployee.filter((items: any) => {
      return items.id != id;
    });
    this.newArray = [...this.deleteArray];
    localStorage.setItem('data', JSON.stringify(this.deleteArray));
    alert('Are you Sure to delete...?');
  }


  //for sorting table row by Name
  onSortClick(event: any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = -1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortDir = 1;
    }
    this.sortArr('fName');
  }
  sortArr(colName: any) {
    this.arrayOfEmployee.sort((a: any, b: any) => {
      a = a[colName].toLowerCase();
      b = b[colName].toLowerCase();
      return a.localeCompare(b) * this.sortDir;
    });
  }
}
