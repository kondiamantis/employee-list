import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee/employee.service';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployeeList;
  }

  getEmployeeList(){
    this.employeeService.Employees.subscribe(data => {
      console.log(data);
    });
  }

}
