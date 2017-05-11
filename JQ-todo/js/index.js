;(function(){
     'use strict';
     var form_add_task = $('.add-task'),
         $delete_task,
         $detail_task,
         $task_detail = $('.task-detail'),
         $task_detail_mask = $(".task-detail-mask"),
         task_list = {},
         current_index,
         $task_item,
         $checkbox_complete,
         $remind_info = $('.remind_info'),
         $remind_text = $('.remind_text'),
         $remind_btn = $('.remind_info button'),
         $window = $(window),
         $body = $('body'),
         $updata_form,
         dfd,
         polling;
         

     init();

     form_add_task.on('submit',add_task_form_submit);
     $task_detail_mask.on('click',task_detail_hide);

     function custom_alert(data){

       if(!data)  throw new Error('There is no incoming parameters');

       dfd = $.Deferred();

          var conf = {} ,comfirmed ,$alert_box ,$alert_mask ,$alert_title ,$alert_content ,$alert_btn_wrap ,$alert_text ,$alert_btn ,$alert_ensure ,$alert_cancel;
           
            if(typeof data  === 'string')
           	 conf.title = data;
           	else{
           		conf = $.extend(conf,data);
           	}

           $alert_box = $('<div class="alert_box">'+
                    '<div class="alert_title">'+conf.title+'</div>'+
                    '<div class="alert_content">'+
                    '<div class="alert_text">woooooooooo</div>'+
					'<div class="alert_btn"><button type="button" class="alert_ensure">确定</button>'+
					'<button type="button" class="alert_cancel">取消</button></div>'+
                    '</div>'+    
	      '</div>').css({
		         'color':'black',
           	     'width':'440px',
           	     'height':'180px',
           	     'background':'white',
           	     'border-radius':'3px',
           	     'position':'fixed',
           	     'z-index':'1',
           	     'box-shadow':'2px 2px 10px rgba(0,0,0,.8)'
           });
           
           $alert_title = $alert_box.find('.alert_title').css({
           	  height:'20%',
           	  'white-space':'nowrap',
           	  'text-overflow':'ellipsis',
           	  'overflow':'hidden',
           	  background:'rgba(121, 150, 255, 0.72)',
           	  'text-align':'center',
           	  padding:'5px 30px',
           	  'font-weight':'700'
           });

           $alert_content = $alert_box.find('.alert_content').css({
           	  height:'80%',
           	  padding: '5px 10px'
           });

		   $alert_text = $alert_box.find('.alert_text').css({
                 height:'75%',
                 'padding-bottom':'5px'
		   });

           $alert_btn_wrap = $alert_box.find('.alert_btn').css({
				 height:'25%',
				 'padding-top':'5px',
           });

           $alert_btn = $alert_box.find('button').css({
           	        width:'54px',
           	        height:'20px',
           	        padding:'0',
           	        float:'right',
           	        'background-color':'white',
           	        'border':'solid rgba(155,155,155,.5) 1px',
           	        'line-height':'20px',
           	        'margin-left':'5px',
           	        'font-size':'13px'
           });


           $alert_mask = $('<div class="alert_mask"></div>').css({
           	      position:'fixed',
           	      top:'0',
           	      right:'0',
           	      bottom:'0',
           	      left:'0',
           	      background:'rgba(0,0,0,.4)'
           });

           $alert_ensure = $alert_box.find('.alert_ensure');
           $alert_cancel = $alert_box.find('.alert_cancel');
			 
		   polling = setInterval(function(){
		   	if(comfirmed !== undefined){

		   		dfd.resolve(comfirmed);
		   		clearInterval(polling);
		   		remove_alert();
		   	}
		   },50);

           $alert_ensure.on('click',function(){

             comfirmed = true;

           });

           $alert_cancel.on('click',function(){
		 
			 comfirmed = false;

           });
           
           $alert_mask.on('click',function(){
             comfirmed = false;
           });

           function remove_alert(){

               $alert_box.remove();
               $alert_mask.remove();

           }
  
	        function adjust_alert_position(){
	        	var window_width = $window.width(),
		        	window_height = $window.height(),
		        	alert_width = $alert_box.width(),
		        	alert_height = $alert_box.height(),
		        	move_x = (window_width - alert_width)/2,
		        	move_y = (window_height - alert_height)/2; 
		        	$alert_box.css({
		        		left: move_x,
		        		top: (move_y-100)
		        	});

			 }
 				 $window.on('resize',function(){
		        		adjust_alert_position();
		        	});

           	$alert_box.appendTo($body);
           	$alert_mask.appendTo($body);
           	$window.resize();
           	return dfd.promise();
     }

     function add_task_form_submit(e){
     	 var  new_task = {};

      	e.preventDefault();

        new_task.content = $(this).find('input[name=content]').val();
        new_task.complete="";
        if(!new_task.content) return;        
        add_task(new_task);
        $(this).find('input[name=content]').val("");
     }

     function add_task(new_task){
        task_list.push(new_task);
     	store.set('task_list',task_list);
     	refresh_task_list();
     	return true;
     }

     function refresh_task_list(){
      store.set('task_list',task_list);
       render_task_list();
     }

     function delete_task(index){
     	if(index === undefined || !task_list[index]) return;
     	task_list.splice(index,1);
     	refresh_task_list();
     	
     }

     function init(){
     	 task_list = store.get('task_list') || [];
     	 if(task_list){
             render_task_list(); 
     	 }
     	 task_list_remind();
     }

     function task_list_remind(){
        let timer = setInterval(function(){
         	let current_time;
         	let remind_time;
			 for(var i=0; i<task_list.length; i++){
                  let item = task_list[i];
                  if(!item || !item.remind || item.remind_info) continue;
			        current_time = (new Date()).getTime();
			        remind_time = (new Date(item.remind)).getTime();
			        if( current_time-remind_time>1 ){
			        	updata_task(i,{remind_info:true});
			        	fn_remind(item);
			        }
         	}
         },300);
     } 

     function fn_remind(data){
           $remind_info.show(300);
           $remind_text.html(data.content);
           $remind_btn.on('click',function(){
           	   $remind_info.hide(300);
           });
     }

     function render_task_list(){
			 var $task_list = $(".task-list");
			 $task_list.html("");
			 var task;
			 var task_complete;
			 var complete_items = [];
			 for(var i=0; i<task_list.length; i++){
          	if(task_list[i]  && task_list[i].complete)
          	{
               complete_items.push(task_list[i]);
          	}
          	else
          	{
              task = render_task_item(task_list[i],i);
		    }
			  $task_list.prepend(task);
          }
          for(var j=0; j<complete_items.length; j++){
          	if(!complete_items[j]) continue;
               task_complete = render_task_item(complete_items[j],$.inArray(complete_items[j],task_list));
               task_complete.addClass('complete');
               $task_list.append(task_complete);
          }
           
          $delete_task = $('.action.delete');
          $detail_task = $('.action.detail');
          $checkbox_complete = $('.task-item .complete');
          listen_delete();
          listen_task_detail();
          listen_task_item();
          listen_checkbox_complete();
     }

     function listen_delete(){
     $delete_task.on('click',function(){
     	  var $item = $(this).parent();
     	  var index = $item.data("item");
     	  custom_alert("确定删除？")
     	  .then(function(r){
     	  	r ? delete_task(index) : null;
     	  });
     	       	  
     });
 }
    function listen_task_detail(){
    	$detail_task.on('click',function(){
    		var $this = $(this);
    		var item = $this.parent();
    		var index = item.data('item');
    		task_detail_show(index);
    	});
    }

    function listen_task_item(){
    	   $task_item = $('.task-item');
    	   var index;
           $task_item.on('dblclick',function(){
		         index = $(this).data('item');
				 task_detail_show(index);
           });
    }

    function listen_checkbox_complete(){
    	$checkbox_complete.on('click', function(){
    		var is_complete = $(this).is(":checked");
    		var index = $(this).parent().parent().data('item');
    		var data = {complete:is_complete};
    		updata_task(index, data);
    	});
    }
    
    function task_detail_show(index){
    	task_detail_render(index);
    	current_index = index;
    	$task_detail.show(300);
    	$task_detail_mask.show();
    }

    function updata_task(index,data){
       if(!(index+1) || !task_list[index])
       	{return;}
       task_list[index] = $.extend(true , task_list[index] , data);
       refresh_task_list();
    }

    function task_detail_render(index){
    	  if(index === undefined || !task_list[index]) return;
    	  var info =  task_list[index];
          var template = '<form>'+
			             '<input type="text" name="content" class="content" value="'+(info.content || "") +'">'+
						 '<div>'+
	            		 '<div class="desc">'+
			    		 '<textarea name="desc">'+(info.desc || "")+'</textarea>'+
	            		 '</div>'+
		            	 '</div>'+     
		            	 '<div class="remind">'+
	            		 '<input type="text" class="datetime" placeholder="点击设置提醒时间" name="remind_data" value="'+(info.remind || "")+'">'+
	            		 '<div><button type="submit">更新</button></div>'+
		            	 '</div>'+
		            	 '</form>';
    	  $task_detail.html(template);
    	  $('.datetime').datetimepicker();
    	  $updata_form = $task_detail.find('form');
    	  $updata_form.on('submit',function(e){
                  e.preventDefault();
                  var data = {};
                  data.content = $(this).find('[name = content]').val();
                  data.desc = $(this).find('[name = desc]').val();
                  data.remind = $(this).find('[name = remind_data]').val();
                  updata_task(index,data);
                  task_detail_hide();
    	  });

    }

    function task_detail_hide(){
    	$task_detail.hide();
    	$task_detail_mask.hide();
    }

     function render_task_item(data,index){
     	if(!data || !(index+1) ) return;
     	     var list_item_tem = "<div class='task-item' data-item='"+index+"'>"+
			"<span><input type='checkbox'"+(data.complete ?" checked " :"") + "class='complete'></span>"+
			"<span class='task-content'>"+data.content+"</span>"+
			"<span class='action delete'>删除</span>"+
			"<span class='action detail'>详细</span>"+
			"</div>";
			return $(list_item_tem);
     }
})();