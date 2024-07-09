import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'optavise-employees-dashboard',
  templateUrl: './employees-dashboard.component.html',
  styleUrl: './employees-dashboard.component.scss',
})
export class EmployeesDashboardComponent implements OnInit {
  selectedDepartments: string[] = [];
  filterForm: FormGroup = this.fb.group({
    departments: this.fb.array([]),
  });
  constructor(private dataService: DataService, private fb: FormBuilder) {}
  employees: Employee[] | undefined;
  filteredEmployees: Employee[] | undefined;
  departments: string[] | undefined;
  ngOnInit(): void {
    this.dataService
      .getEmployees()
      .subscribe((employees) => {
        this.employees = [...employees];
        this.filteredEmployees = [...employees];
  });
    this.dataService.getDepartments().subscribe((departments) => {
      this.departments = [...departments];
      this.selectedDepartments = [...departments];
    });
  }
  filterEmployees(event: any, department: string): void {
    if (this.departments?.length) {
      if (!event?.target?.checked) {
        this.selectedDepartments = this.selectedDepartments.filter(
          (selectedDepartment) => selectedDepartment !== department
        );
      } else {
        this.selectedDepartments.push(department);
      }
      console.log(this.selectedDepartments);
      this.filteredEmployees = this.employees?.filter((employee) =>
        this.selectedDepartments.includes(employee.department)
      );
    }
  }
}
