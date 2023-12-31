import { Component, OnInit } from '@angular/core';
import { NotificationServiceService } from './service/notification-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'appCorredores';

  constructor(private Notificaciones:NotificationServiceService){
    
  }
  ngOnInit(): void {
    this.Notificaciones.requestPermission();
    this.mostrarNotificacion()
  }

  mostrarNotificacion(): void {
    this.Notificaciones.showNotification('¿Ya te registraste?', {
      body: 'Subscribete para ver todos los contenidos del sitio te esperamos!!!',
    });
  }
}
