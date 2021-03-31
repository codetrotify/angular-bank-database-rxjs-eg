import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MatSort, MatTableDataSource, MatPaginator, MatCheckboxModule } from '@angular/material';



import { BankhttpService } from '../bankhttp.service';
import { isArray } from 'util';
import { element } from '@angular/core/src/render3';
//import { isArray } from 'util';

import { SelectionModel } from '@angular/cdk/collections';

export interface User {
  ifsc: string;
  bank_id: string;
  branch: string;
  address: string;
  city: string,
  district: string,
  state: string,
  bank_name: string
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  styles: [
    `
      table {
        width: 100%;
      }
      
      
      th.mat-sort-header-sorted {
        color: black;
      }
    
    `
  ]
})
export class HomeComponent implements OnInit {
 

  selectedRowIndex: any;
  public value = [];


  displayedColumns: string[] = ['favorite', 'ifsc', 'bank_id', 'branch', 'city', 'district', 'state', 'bank_name'];
  dataSource;
  user;
  data
  users: User[];

  selection = new SelectionModel<User>(true, []);

  @ViewChild('button') button: ElementRef;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: User): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.ifsc + 1}`;
  }

  constructor(public bankHttpService: BankhttpService, public dialog: MatDialog) {
    console.log('Home component constructor is called');


  }

  ngOnInit() {
    console.log('Home component onIniti called');



    this.bankHttpService.getBankBranches()
      .subscribe((users: User[]) => {
        //let user1 = [];
        this.users = users;
        console.log(this.users)

       
        this.dataSource = new MatTableDataSource(users);
        console.log(this.dataSource)

        this.dataSource.paginator = this.paginator;
        //console.log(this.paginator)
        this.dataSource.sort = this.sort;



      });















  }



  ngAfterViewInit() {



  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  toggle = true;
  status = 'Enable';
  selectedUser: any;




  activeSkill(element: any) {
    let checkExists: boolean = false;
    console.log(this.value)
    console.log(this.value.length)
    console.log(element.ifsc)
    for (let i = 0; i < this.value.length; i++) {
      if (element.ifsc === this.value[i].ifsc) {
        checkExists = true;
        console.log(checkExists)
      }
    }
    if (checkExists === false) {
      console.log(checkExists)
      this.value.push(element);
    }
    localStorage.setItem('fav', JSON.stringify(this.value));

  }

}
