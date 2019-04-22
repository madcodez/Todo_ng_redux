import { Component, OnInit } from '@angular/core';
import {ADD_TODO,DELETE_TODO,TOGGLE_TODO} from '../app.action';
import {select , NgRedux} from '@angular-redux/store';
import { IAppState } from 'src/app/app.store';
import { ITodo } from 'src/app/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @select() todos;

  model : ITodo ={
    id:0,
    description :'',
    responsible :'',
    priority:'low',
    isCompleted : false

  }

  constructor(private ngRedux : NgRedux<IAppState>) {

  
  }

  ngOnInit() {
  }
   onSubmit(){
     this.ngRedux.dispatch({type : ADD_TODO, todo : this.model})
   }
   deleteTodo(t){

     this.ngRedux.dispatch({type : DELETE_TODO , id : t.id})
   }
   toggleTodo(t){
   // console.log(t)
       this.ngRedux.dispatch({type : TOGGLE_TODO , id : t.id});
   }
  

}
