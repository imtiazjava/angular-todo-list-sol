import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
  

})
 export class AppComponent {
   title:string='TO-DO-TASKS';
   listTask:any[]=[];
   addTask(task:any):void{
     this.listTask.push({tid:this.listTask.length,name:task});
     console.log(this.listTask)
   }

   deleteItem(id:any):void{
     alert('id:'+id);
     if(id==1){
        this.listTask.pop();
     }else{
      this.listTask.splice(id,1);
     }
     //this.listTask.splice(id,2);
     // this.listTask.pop()
     console.log(this.listTask)
   }
}
