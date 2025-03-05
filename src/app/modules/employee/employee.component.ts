import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';
import { Employee } from '../../interfaces/employee';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-employee',
  imports: [TableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList(){
    this.employeeService.getEmployees().subscribe(
      data => this.employees = data
    )
  }

}
