import { Injectable } from "@angular/core";
import { AppModule } from "src/app/app.module";

@Injectable({
  providedIn: 'root',
})

export class LoggingService {
  logStatusChange(status: string) {
    console.log('A server status changed, new status: ' + status);
  }
}
