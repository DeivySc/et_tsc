import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  taskFormGroup!: FormGroup;
  tasks = new FormControl('', Validators.required);

  task: any[] = [
    {id: 1, name: 'tarea 1', complete: false, color: 'primary'},
    {id: 2, name: 'tarea 2', complete: false, color: 'primary'},
    {id: 3, name: 'tarea 3', complete: false, color: 'primary'},
    {id: 4, name: 'tarea 4', complete: false, color: 'primary'},
  ]

  constructor(private _formBuilder: FormBuilder) { }

  updateAllComplete() {
    this.allComplete = this.task != null && this.task.every(t => t.completed);
  }

  allComplete: boolean = false;

  removeTask(id:number){
    var index = this.task.map(x => {
      return x.id
    }).indexOf(id)
    this.task.splice(index, 1)
    console.log(index)
  }

  onSubmit(): void {
    const obj = {
      id: this.task.length + 1,
      name: this.tasks.value,
      complete: false,
      color: 'primary'
    }
    this.task.push(obj)
    console.log(this.tasks.value)
  }

  onKeyPress(event: any) {
    const regexpNumber = /[0-9a-zA-Z ]/;
    let inputCharacter = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !regexpNumber.test(inputCharacter)) {
      event.preventDefault();
    }
  }

  ngOnInit(): void {
    this.taskFormGroup = this._formBuilder.group({
      tasks: this.tasks,
    })
  }

}
