import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://ec2-54-226-90-201.compute-1.amazonaws.com:8080/api/v1';

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string){
    return this.http.post<any>(`${this.baseUrl}/authentication/sign-in`, { username, password });
  }

  signUp(username: string, password: string, roles: string[]){
    return this.http.post<any>(`${this.baseUrl}/authentication/sign-up`, { username, password, roles });
  }

  getProfileData(id: string){
    return this.http.get<any>(`${this.baseUrl}/profiles/${id}`);
  }

  getDeviceData(id: string){
    return this.http.get<any>(`${this.baseUrl}/devices/${id}`);
  }

  getVehicleData(id: string){
    return this.http.get<any>(`${this.baseUrl}/vehicles/${id}`);
  }
  createVehicle(vehicleData: any){
    return this.http.post<any>(`${this.baseUrl}/vehicles`, vehicleData);
  }
  createProfile(profileData: any){
    return this.http.post<any>(`${this.baseUrl}/profiles`, profileData);
  }
}

