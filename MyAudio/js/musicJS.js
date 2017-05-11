$(document).ready(function(){
//播放和暂停
 $(".btn-play").click(function(){
        if($("audio")[0].paused){
        	SongPlay();
        }else {
        	SongPause();
        }
      
 }); 
 //下一首歌
$(".btn-forward").click(function(){
           GainSong();
});
//下一个频道
$(".NextChannel").click(function(){
	      GainChannel();
});
//自动播放下一首
$("audio").bind("ended",function(){
	      GainSong();
});
//循环
$(".glyphicon-refresh").on("click",function(){
	if($("audio").is(function(){
		 return typeof $("audio").attr("loop") =="string";
	})){
		$("audio").removeAttr("loop");
		$(".glyphicon-refresh").removeClass("btn-loop");
	}else{
        $("audio").attr("loop","loop");
        $(".glyphicon-refresh").addClass("btn-loop");
	}
});
//喜欢
$(".glyphicon-heart").on("click",function(){
	$(this).toggleClass("btn-heart",!$(this).is(".btn-heart"));
});
//进度条
var timeLine = setInterval(function(){
	var length = $("audio")[0].currentTime/$("audio")[0].duration*100;
    $(".time-process").css("width",length+"%");
    if(length==1){ clearInterval(timeLine);}
},100);
//拖动进度条
$(".time-line").on("mousedown",function(e){
       var parentLeft = $(this).offset().left;
       var currentLeft = e.pageX;
       var width = currentLeft - parentLeft;
       $("audio")[0].currentTime = $("audio")[0].duration*(width/$(this).width());
});
//声音进度条
$(".action-progress").on("mousedown",function(e){
       var totalVolume = $(this).offset().left;
       var mouseSite = e.pageX;
       var progress =mouseSite -  totalVolume;
       $(".line").width(progress);
       $("audio")[0].volume = progress/$(this).width();
});
//当前播放时间
var timeText;
var time ;
setInterval(function(){
	 time = Math.round($("audio")[0].currentTime);
	if(time>=60){
           var mimute = Math.floor(time/60);
	       if(mimute<10){
                 timeText = "0"+mimute;
           }else{ 
           	      timeText+=mimute;
           }
	   	   if(time%60<10 && time%60>0){
				timeText+=(":0"+time%60);
		   }else{ 
			 	timeText+=(":"+time%60);}
	}else if(time>=10){
		timeText = "00:"+time;
	}else{
		timeText ="00:0"+time;
	}

	$(".time").text(timeText);
},1000);
 //播放函数
function SongPlay(){
	$("audio")[0].play();
	$(".btn-play").removeClass("glyphicon-play").addClass("glyphicon-pause");
}
//暂停函数
function SongPause(){
	$("audio")[0].pause();
	$(".btn-play").removeClass("glyphicon-pause").addClass("glyphicon-play");
}


function sing(){
         $("audio").attr("src",info.url);
         $("music-Photo").css("background-image","url("+info.picture+")");
         $(".Manme").text(info.title);
         $(".Sname").text(info.artist);
}
	//____________________________________ajax start______________

function GainChannel(){
	$.ajax({
		url:'http://api.jirengu.com/fm/getChannels.php',
		dataType:'json',
		type:"GET",
		success:function(data){
			var num = Math.floor(Math.random()*data.channels.length);
            var channelName = data.channels[num].name;
            var channelId = data.channels[num].channel_id;
            $(".current-channel > .channel").text(channelName);
            $(".current-channel > .channel").attr("data-id",channelId);
            GainSong();
            i=0;
		}
	});
}
function GainSong(){
	$.ajax({
		url:'http://api.jirengu.com/fm/getSong.php',
		dataType:"json",
		type:"GET",
		data:{
            'channel':$("current-channel > channel").attr("data-id")
		},
		success:function(data){
            var song = data.song[0];
            var url = song.url,
            picture = song.picture,
            lyricId = song.sid,
            songId = song.ssid,
            title = song.title,
            author = song.artist;
            $("audio").attr("src",url);
            $(".music-Photo").css("background-image","url("+picture+")");
            $(".Mname").text(title);
            $(".Sname").text(author);
            SongPlay();
		}
	});

}
//_______________________ajax end_________________
GainChannel();

});