import { Component } from "@angular/core";
import { MatSelectModule } from "@angular/material/select";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";
  rolesByCompany = ["Administrador", "Supervisor", "Empleado"];
  rolesSelected = ["Administrador", "Empleado"];
}
