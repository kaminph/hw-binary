var exercise = {};


exercise.roman = function(time){

    //-------------------------------------
    //  YOUR CODE
    //    Return an object with roman time. 
    //    Time is reported using 6 columns.
    //
    //  For example, for 05:13:47 PM
    //    { 
    //       hour_col1 : 1, 
    //       hour_col2 : 7,
    //       min_col1  : 1, 
    //       min_col2  : 3, 
    //       sec_col1  : 4, 
    //       sec_col2  : 7
    //     };
    // 
    //-------------------------------------

    //console.log("roman called");

    
    var timeObj = {
        hour_col1 : exercise.getHrCol1(time), 
        hour_col2 : exercise.getHrCol2(time),
        min_col1  : exercise.getMinCol1(time), 
        min_col2  : exercise.getMinCol2(time), 
        sec_col1  : exercise.getSecCol1(time), 
        sec_col2  : exercise.getSecCol2(time)
    }
    //console.log(timeObj);

    return timeObj;
};

exercise.binary = function(time, col){

    //----------------------------------------------------------
    //  YOUR CODE
    //    Return an object with
    //    the binary clock values 
    //    for the given column
    //
    //  For example, for time 05:13:47 PM, and column hour_col2
    //    var binary = { 
    //        position8 : 'off', 
    //        position4 : 'on', 
    //        position2 : 'on', 
    //        position1 : 'on', 
    //    }; 
    // 
    //----------------------------------------------------------
    
    // column 1,2 (hour)
    // column 3,4 (min)
    // column 5,6 (sec)

    if(col == 1){
        var binaryHour_col1 = exercise.dec2bin(exercise.getHrCol1(time));
        
        if (binaryHour_col1.toString().substring(0,1) != null && binaryHour_col1.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col1.toString().substring(1,2) != null && binaryHour_col1.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }

        var binary = {
            position8 : 'off', 
            position4 : 'off', 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }

    if(col == 2){
        var binaryHour_col2 = exercise.dec2bin(exercise.getHrCol2(time));
        
        if (binaryHour_col2.toString().substring(0,1) != null && binaryHour_col2.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col2.toString().substring(1,2) != null && binaryHour_col2.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }
        if (binaryHour_col2.toString().substring(2,3) != null && binaryHour_col2.toString().substring(2,3) == '1'){
            //the first digit of the binary = 1
            var position4Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position4Switch = 'off';
        }
        if (binaryHour_col2.toString().substring(3,4) != null && binaryHour_col2.toString().substring(3,4) == '1'){
            //the first digit of the binary = 1
            var position8Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position8Switch = 'off';
        }

        var binary = {
            position8 : position8Switch, 
            position4 : position4Switch, 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }


    if(col == 3){
        var binaryHour_col3 = exercise.dec2bin(exercise.getMinCol1(time));
        
        if (binaryHour_col3.toString().substring(0,1) != null && binaryHour_col3.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col3.toString().substring(1,2) != null && binaryHour_col3.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }
        if (binaryHour_col3.toString().substring(2,3) != null && binaryHour_col3.toString().substring(2,3) == '1'){
            //the first digit of the binary = 1
            var position4Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position4Switch = 'off';
        }

        var binary = {
            position8 : 'off', 
            position4 : position4Switch, 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }

    if(col == 4){
        var binaryHour_col4 = exercise.dec2bin(exercise.getMinCol2(time));
        
        if (binaryHour_col4.toString().substring(0,1) != null && binaryHour_col4.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col4.toString().substring(1,2) != null && binaryHour_col4.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }
        if (binaryHour_col4.toString().substring(2,3) != null && binaryHour_col4.toString().substring(2,3) == '1'){
            //the first digit of the binary = 1
            var position4Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position4Switch = 'off';
        }
        if (binaryHour_col4.toString().substring(3,4) != null && binaryHour_col4.toString().substring(3,4) == '1'){
            //the first digit of the binary = 1
            var position8Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position8Switch = 'off';
        }

        var binary = {
            position8 : position8Switch, 
            position4 : position4Switch, 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }

    if(col == 5){
        var binaryHour_col5 = exercise.dec2bin(exercise.getSecCol1(time));
        
        if (binaryHour_col5.toString().substring(0,1) != null && binaryHour_col5.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col5.toString().substring(1,2) != null && binaryHour_col5.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }
        if (binaryHour_col5.toString().substring(2,3) != null && binaryHour_col5.toString().substring(2,3) == '1'){
            //the first digit of the binary = 1
            var position4Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position4Switch = 'off';
        }
        

        var binary = {
            position8 : 'off', 
            position4 : position4Switch, 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }

    if(col == 6){
        var binaryHour_col6 = exercise.dec2bin(exercise.getSecCol2(time));
        
        if (binaryHour_col6.toString().substring(0,1) != null && binaryHour_col6.toString().substring(0,1) == '1'){
            //the first digit of the binary = 1
            var position1Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position1Switch = 'off';
        }

        if (binaryHour_col6.toString().substring(1,2) != null && binaryHour_col6.toString().substring(1,2) == '1'){
            //the first digit of the binary = 1
            var position2Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position2Switch = 'off';
        }
        if (binaryHour_col6.toString().substring(2,3) != null && binaryHour_col6.toString().substring(2,3) == '1'){
            //the first digit of the binary = 1
            var position4Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position4Switch = 'off';
        }
        if (binaryHour_col6.toString().substring(3,4) != null && binaryHour_col6.toString().substring(3,4) == '1'){
            //the first digit of the binary = 1
            var position8Switch = 'on';
        }else{
            //the first digit of the binary = 0
            var position8Switch = 'off';
        }
        

        var binary = {
            position8 : position8Switch, 
            position4 : position4Switch, 
            position2 : position2Switch, 
            position1 : position1Switch, 
        };
        return binary;
    }
    

};

exercise.dec2bin = function (dec){
    return exercise.reverseString((dec >>> 0).toString(2));
}

exercise.reverseString = function (str){
    return str.split("").reverse().join("");
}

exercise.getHrCol1 = function (time){
    return ('0' + time.getHours().toString()).slice(-2).substring(0,1);
}

exercise.getHrCol2 = function (time){
    return ('0' + time.getHours().toString()).slice(-2).substring(1,2);
}

exercise.getMinCol1 = function (time){
    return ('0' + time.getMinutes().toString()).slice(-2).substring(0,1);
}

exercise.getMinCol2 = function (time){
    return ('0' + time.getMinutes().toString()).slice(-2).substring(1,2);
}

exercise.getSecCol1 = function (time){
    return ('0' + time.getSeconds().toString()).slice(-2).substring(0,1);
}

exercise.getSecCol2 = function (time){
    return ('0' + time.getSeconds().toString()).slice(-2).substring(1,2);
}