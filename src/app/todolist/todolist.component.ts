import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent implements OnInit{
tArray=[{taskName: 'wakeUp at 7', isCompleted:false}];
  constructor(){}
  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
this.tArray.push(
  {
    taskName:form.controls['task'].value,
    isCompleted:false

  })
  form.reset();
  }

  onDelete(index: number){

    this.tArray.splice(index, 1);
  }

  onCheck(index: number){

    this.tArray[index].isCompleted=!this.tArray[index].isCompleted;
  }


}
