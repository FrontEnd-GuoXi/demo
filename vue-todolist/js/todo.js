var store = {
	fetch:function(){
         var todo_list = JSON.parse(localStorage.getItem('mytodo') || '[]');
         todo_list.forEach(function(item,index){
               item.id = index;
         }); 
         store.uid = todo_list.length;
         return todo_list; 
	},
	save:function(todos){
		localStorage.setItem('mytodo',JSON.stringify(todos));
	}
};
var filter = {
	 all:function(todos){
          return todos;
	 }, 
     active:function(todos){
     	  return todos.filter(function(todo){
                  return !todo.completed;       
     	 });
     },
     completed:function(todos){
     	return todos.filter(function(todo){
     		       return todo.completed;
     	});
     }
};

 var vm = new Vue({
	el:'#app',
	data:{
		todo_list:store.fetch(),
		content:'',
		editing:null,
		filterData:'all'
    },

	methods:{
        addData:function(){
               var val = this.content && this.content.trim();
               if(!val) return;
			   this.todo_list.push({
			   	   id:store.uid++,
			   	   data:val,
			   	   completed:false,
			   });
			   this.content="";
          },
      	checked:function(index){
               this.todo_list[index].completed = !this.todo_list[index].completed;
        },
        allChecked:function(){
        	   this.all = !this.all;
        },
        remove:function(todo){
               this.todo_list.splice(this.todo_list.indexOf(todo),1);
        },
        edit:function(todo){
               this.editing = todo;
        },
        doneEdit:function(todo){
        	   if(!todo.data) this.remove(todo);
               this.editing = null;
        },
        removeAllcom:function(){
               this.todo_list = filter['active'](this.todo_list);
        }
    },
    computed:{
    	filterTodo:function(){
    		     return filter[this.filterData](this.todo_list);
    	},
        remaining:function(){
        	     return filter.active(this.todo_list).length;
        },
    	all:{
    		get:function(){
                 return this.remaining === 0;
    		},
    		set:function(value){
                 this.todo_list.forEach(function(current){
                      current.completed = value;
                 });
    		}
    	}
    },
    watch:{
    	todo_list:{
    		handler:function(todo_list){
                 store.save(todo_list);
    		},
    		deep:true
    	}
    },
    filters:{
    	add_s:function(value){
             return value === 1 ? 'item' : 'items';
    	}
    },
    directives:{
    	autofocus:function(el,binding){
    			el.focus();
    	 }
    }
});

 function changeHash(){
 	var filterData = window.location.hash.replace(/#\/?/,"");
 	if (filter[filterData]) {
                 vm.filterData = filterData;
 	}else{
		 	     window.location.hash = "";
		 	     vm.filterData = 'all';
 	}
 }
 window.addEventListener('hashchange',changeHash);
 changeHash();