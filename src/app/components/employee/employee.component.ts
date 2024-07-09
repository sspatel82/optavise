import { Component, Input } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'optavise-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  @Input() employee: Employee | undefined;
}
