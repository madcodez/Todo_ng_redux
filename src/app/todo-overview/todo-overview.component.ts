import { Component, OnInit } from '@angular/core';
import { select,NgRedux } from '@angular-redux/store';
import { IAppState } from 'src/app/app.store';
import { DELETE_ALL_TODO } from 'src/app/app.action';

@Component({
  selector: 'app-todo-overview',
  templateUrl: './todo-overview.component.html',
  styleUrls: ['./todo-overview.component.css']
})
export class TodoOverviewComponent implements OnInit {
  @select() todos;
  @select() lastUpdate; 
  constructor(private ngRedux : NgRedux<IAppState>) { }

  ngOnInit() {
  }
  clearTodos(){
    this.ngRedux.dispatch({type : DELETE_ALL_TODO});
  }

}
