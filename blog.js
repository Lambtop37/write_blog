

    window.onload = function(){
    	var date = new Date();
		let nowDate = date.getDate();
		let nowMonth = date.getMonth();
		let nowHour = date.getHours();
		let s1_d = 15, 
		s2_d = 10, 
		s3_d = 13,
		s4_d = 12, 
		s5_d = 11, 
		s6_d = 10, 
		s7_d = 9, 
		s8_d = 8;
		let s1_m = 3,
		s2_m = 5, 
		s3_m = 5, 
		s4_m = 5, 
		s5_m = 5, 
		s6_m = 5, 
		s7_m = 4, 
		s8_m = 4;
		let y;
		let s1, s2, s3, s4, s5, s6, s7, s8;

		if(nowDate - s1_d <= 31 && nowMonth - s1_m <= 0){
				s1 = nowDate - s1_d;
				document.getElementById('s1').innerHTML = s1 + "дн. назад";
	    		console.log(s1);
		} else if(nowMonth - s1_m > 0){
				s1 = nowMonth - s1_m;
				document.getElementById('s1').innerHTML = s1 + "мес. назад";
	    		console.log(s1);
		}
		if(nowDate - s2_d < 31 && nowMonth - s2_m <= 0){
				s2 = nowDate - s2_d;
		}
		if(nowDate - s3_d < 31 && nowMonth - s3_m <= 0){
				s3 = nowDate - s3_d;
		}
		if(nowDate - s4_d < 31 && nowMonth - s4_m <= 0){
				s4 = nowDate - s4_d;
		}
		if(nowDate - s5_d < 31 && nowMonth - s5_m <= 0){
				s5 = nowDate - s5_d;
		}
		if(nowDate - s6_d < 31 && nowMonth - s6_m <= 0){
				s6 = nowDate - s6_d;
		}
		if(nowDate - s7_d < 31 && nowMonth - s7_m <= 0){
				s7 = nowDate - s7_d;
		}
		if(nowDate - s8_d < 31 && nowMonth - s8_m <= 0){
				s8 = nowDate - s8_d;
		}



	    document.getElementById('s2').innerHTML = s2 + "дн. назад";
	    console.log(s2);
	    document.getElementById('s3').innerHTML = s3 + "дн. назад";
	    console.log(s3);
	    document.getElementById('s4').innerHTML = s4 + "дн. назад";
	    console.log(s4);
	    document.getElementById('s5').innerHTML = s5 + "дн. назад";
	    console.log(s5);
	    document.getElementById('s6').innerHTML = s6 + "дн. назад";
	    console.log(s6);
	    document.getElementById('s7').innerHTML = s7 + "дн. назад";
	    console.log(s7);
	    document.getElementById('s8').innerHTML = s8 + "дн. назад";
	    console.log(s8);
	    
	}



