import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../interfaces/employee';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';

@Component({
  selector: 'app-employee',
  imports: [TableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {


  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}


  getEmployeeList(){
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data
    )
  }

  loadEmployees($event: TableLazyLoadEvent) {
    console.log($event);
    this.getEmployeeList();
   
  }

}
