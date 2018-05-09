 let times = "2018/4/1 00:00:00";
 function countTime() {  
    //获取当前时间  
    let date = new Date();  
    let nowTime = date.getTime();  
    //设置截止时间  
    let customDate=times;
    let endDate = new Date(customDate); 
    let endTime = endDate.getTime();  
    //时间差  
    let leftTime = endTime-nowTime;
    //获取倒计时
    let d,h,m,s;  
    if (leftTime>=0) {  
        d = Math.floor(leftTime/1000/60/60/24);  
        h = Math.floor(leftTime/1000/60/60%24);  
        m = Math.floor(leftTime/1000/60%60);  
        s = Math.floor(leftTime/1000%60);
        //为倒计时添加前导零
        d = checkTime(d);
        h = checkTime(h);
        m = checkTime(m);
        s = checkTime(s);              
    }else{
        console.log('自定义时间有错误');
    }
    console.log(d,h,m,s);
    // //递归每秒调用countTime方法，显示动态时间效果  
    setTimeout(countTime,1000); 
}
//将0-9的数字前面加上0
function checkTime(i){ 
      if(i<10) 
      { 
        i = "0" + i; 
      } 
      return i; 
} 
countTime();