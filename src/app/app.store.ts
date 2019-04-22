import {ADD_TODO, DELETE_TODO,TOGGLE_TODO,DELETE_ALL_TODO} from './app.action';
import {ITodo} from './todo';


export interface IAppState{
    todos : ITodo[],
    lastUpdate : Date;
}

export const INITIAL_STATE : IAppState ={
    todos :[] ,
    lastUpdate : null
}


export function rootReducer(state : IAppState,action): IAppState{
    switch(action.type){
         case  ADD_TODO : 
             action.todo.id = state.todos.length+1;
             return Object.assign({},state,{
                 todos : state.todos.concat(Object.assign({},action.todo)),
                 lastUpdate : new Date()
             });

         case TOGGLE_TODO : 
             
                var todo = state.todos.find(t => t.id == action.id);
                console.log(todo);
                var index = state.todos.indexOf(todo);
                return Object.assign({},state,{
                    todos:[
                        ...state.todos.slice(0,index),
                        Object.assign({},todo,{isCompleted : !todo.isCompleted}),
                        ...state.todos.slice(index+1)
                    ],
                    lastUpdate : new Date()
                }); 
                
          case DELETE_TODO : 
               return Object.assign({},state,{
                   todos : state.todos.filter(i => i.id !== action.id ),
                   lastUpdate : new Date()
               });  
               
          case DELETE_ALL_TODO : 
               return Object.assign({},state,{
                   todos:[],
                   lastUpdate : new Date()
               });
    }
    return state;
}