import { Component } from '@angular/core';

@Component({
    selector: 'employee-app',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls:['app/employee/employee.component.css']
})
export class EmployeeComponenet {
    firstName: string = 'Lokanadham';
    lastName: string = 'Dasamukha';
    gender: string = 'Male';
    age: string = '30';

    columnSpan: number = 2;

    showDetails: boolean =  false;

    onDetailsClick(): void {
        this.showDetails = !this.showDetails;
    }

}