import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { AnyARecord } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //server_address: string = 'api';
  server_address: string = 'http://localhost:3000/api';



  constructor(public http:HttpClient) { }

  //dashboardComponent
  

  getTrainers(){
    return this.http.get(`${this.server_address}/api/getTrainers`);
  }

  getCount(){
    return this.http.get(`${this.server_address}/api/getCount`);
  }
  searchByName(name){
    return this.http.get(`${this.server_address}/api/nameSearch/`+name);
  }
  searchBySkill(skill){
    return this.http.get(`${this.server_address}/api/skillSearch/`+skill);
  }
  searchByEmp(emp){
    return this.http.get(`${this.server_address}/api/empSearch/`+emp);
  }
  searchByCourse(course){
    return this.http.get(`${this.server_address}/api/courseSearch/`+course);
  }

  //trainerApproval
  getRequest(id){
    return this.http.get(`${this.server_address}/api/approveRequest/`+id);
  }
  getApprove(trainer){
    return this.http.post(`${this.server_address}/api/approvedTrainer`,trainer)
    .subscribe((data)=>{console.log(data)});
  }

  //trainerRequest
  getTrainerRequest(){
    return this.http.get(`${this.server_address}/api/request`);
  }
  rejectTrainer(id){
   return this.http.delete(`${this.server_address}/api/reject/`+id) ;
  }

  //trainersList
 getTrainersList(){
   return this.http.get(`${this.server_address}/api/getTrainersList`);
 }
 removeTrainer(id){
  return this.http.delete(`${this.server_address}/api/removeTrainer/`+id)
 }

 //AllocatedList
 getAllocatedlist(){
  return this.http.get(`${this.server_address}/api/allocatedlist`);
}
//allocate
getAllocateRequest(id){
 return this.http.get(`${this.server_address}/api/allocationData/`+id)
}

dateSchedule(email){
  return this.http.get(`${this.server_address}/api/dateSchedule/`+email);
}

getCourses(){
  return this.http.get(`${this.server_address}/api/getCourses`);
}
selectedCourse(course){
  return this.http.get(`${this.server_address}/api/selectedCourse/`+course);
}
getDate(){
  return this.http.get(`${this.server_address}/api/getDate`)
}
getEndDate(){
  return this.http.get(`${this.server_address}/api/getEndDate`)
}

allocatedData(data){
  return this.http.post(`${this.server_address}/api/allocated`,data)
}

//delete an event
removeEvent(id){
  return this.http.delete(`${this.server_address}/api/removeEvent/`+id)
 }

//approved data to trainer
approvedData(email){
  return this.http.get(`${this.server_address}/api/approvedData/`+email);
}
}


