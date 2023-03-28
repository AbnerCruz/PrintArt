//A4 BLACK AND WHITE
values1 = {
        A: 0.50,
        B: 0.40,
        C: 0.30,
        D: 0.25,
        E: 0.20,
        F: 0.15,
}
//A4 COLOR
values2 = {
        A: 1.50,
        B: 1.35,
        C: 1.30,
        D: 1.25,
        E: 1.20,
        F: 1.15,
        G: 1.00,
        H: 0.90,
}

//A3 BLACK AND WHITE
values3 = {
    A: 3.00,
    B: 2.80,
    C: 2.70,
    D: 2.5,
    E: 2.25,
    F: 2.00,
}

//A3 COLOR
values4 = {
    A: 4.00,
    B: 3.80,
    C: 3.70,
    D: 3.5,
    E: 3.25,
    F: 3.00,
}

//BIND
values5 = {
    P: 4,
    PP: 5,
    M: 6,
    G: 8,
    GG: 12,
    X: 15,
}




var total_price = 0;



function calculator_function(){
    document.getElementById("total_value_span").innerHTML = (print_function_calc() + copy_function_calc() + bind_function()).toFixed(2)
}


//PRINT FUNCTION
function print_function_calc(){
    let quantity = document.getElementById("print_input").value
    let print_value = 0

    if(document.getElementById("print_select_id").value == "print_select_option1"){ //A4 BLACK AND WHITE
        if(quantity <= 5){
            print_value = quantity * values1.A
            document.getElementById("unity_print_span").innerHTML = values1.A
        }
        else if(quantity >= 6 && quantity <= 10){
            print_value = quantity * values1.B
            document.getElementById("unity_print_span").innerHTML = values1.B
        }
        else if(quantity >= 11 && quantity <= 99){
            print_value = quantity * values1.D
            document.getElementById("unity_print_span").innerHTML = values1.D
        }
        else if(quantity >= 100 && quantity <= 499){
            print_value = quantity * values1.E
            document.getElementById("unity_print_span").innerHTML = values1.E
        }
        else if(quantity >= 500){
            print_value = quantity * values1.F
            document.getElementById("unity_print_span").innerHTML = values1.F
        }
    }
    else if(document.getElementById("print_select_id").value == "print_select_option2"){ //A4 COLOR
        if(quantity <= 5){
            print_value = quantity * values2.A
            document.getElementById("unity_print_span").innerHTML = values2.A
        }
        else if(quantity >= 6 && quantity <= 10){
            print_value = quantity * values2.B
            document.getElementById("unity_print_span").innerHTML = values2.B
        }
        else if(quantity >= 11 && quantity <= 99){
            print_value = quantity * values2.D
            document.getElementById("unity_print_span").innerHTML = values2.D
        }
        else if(quantity >= 100 && quantity <= 499){
            print_value = quantity * values2.E
            document.getElementById("unity_print_span").innerHTML = values2.E
        }
        else if(quantity >= 500){
            print_value = quantity * values2.F
            document.getElementById("unity_print_span").innerHTML = values2.F
        }
    }

    else if(document.getElementById("print_select_id").value == "print_select_option3"){ //A3 BLACK AND WHITE
        if(quantity <= 5){
            print_value = quantity * values3.A
            document.getElementById("unity_print_span").innerHTML = values3.A
        }
        else if(quantity >= 6 && quantity <= 10){
            print_value = quantity * values3.B
            document.getElementById("unity_print_span").innerHTML = values3.B
        }
        else if(quantity >= 11 && quantity <= 99){
            print_value = quantity * values3.D
            document.getElementById("unity_print_span").innerHTML = values3.D
        }
        else if(quantity >= 100 && quantity <= 499){
            print_value = quantity * values3.E
            document.getElementById("unity_print_span").innerHTML = values3.E
        }
        else if(quantity >= 500){
            print_value = quantity * values3.F
            document.getElementById("unity_print_span").innerHTML = values3.F
        }
    }
    else if(document.getElementById("print_select_id").value == "print_select_option4"){ //A3 COLOR
        if(quantity <= 5){
            print_value = quantity * values4.A
            document.getElementById("unity_print_span").innerHTML = values4.A
        }
        else if(quantity >= 6 && quantity <= 10){
            print_value = quantity * values4.B
            document.getElementById("unity_print_span").innerHTML = values4.B
        }
        else if(quantity >= 11 && quantity <= 99){
            print_value = quantity * values4.D
            document.getElementById("unity_print_span").innerHTML = values4.D
        }
        else if(quantity >= 100 && quantity <= 499){
            print_value = quantity * values4.E
            document.getElementById("unity_print_span").innerHTML = values4.E
        }
        else if(quantity >= 500){
            print_value = quantity * values4.F
            document.getElementById("unity_print_span").innerHTML = values4.F
        }
    }
    


    document.getElementById("total_print_span").innerHTML = print_value.toFixed(2)
    return parseFloat(print_value.toFixed(2))
}


//COPY FUNCTION
function copy_function_calc(){
    let quantity = document.getElementById("copy_input").value
    let copy_value = 0

    if(document.getElementById("copy_select_id").value == "copy_select_option1"){ //A4 BLACK AND WHITE
        if(quantity <= 5){
            copy_value = quantity * values1.B
            document.getElementById("unity_copy_span").innerHTML = values1.B
        }
        else if(quantity >= 6 && quantity <= 10){
            copy_value = quantity * values1.C
            document.getElementById("unity_copy_span").innerHTML = values1.C
        }
        else if(quantity >= 11 && quantity <= 99){
            copy_value = quantity * values1.D
            document.getElementById("unity_copy_span").innerHTML = values1.D
        }
        else if(quantity >= 100 && quantity <= 500){
            copy_value = quantity * values1.E
            document.getElementById("unity_copy_span").innerHTML = values1.E
        }
        else if(quantity >= 1000){
            copy_value = quantity * values1.F
            document.getElementById("unity_copy_span").innerHTML = values1.F
        }
        document.getElementById("total_copy_span").innerHTML = copy_value.toFixed(2)
        return parseFloat(copy_value.toFixed(2))
    }

    else if(document.getElementById("copy_select_id").value == "copy_select_option2"){ //A4 COLOR
        if(quantity <= 5){
            copy_value = quantity * values2.D
            document.getElementById("unity_copy_span").innerHTML = values2.D
        }
        else if(quantity >= 6 && quantity <= 10){
            copy_value = quantity * values2.E
            document.getElementById("unity_copy_span").innerHTML = values2.E
        }
        else if(quantity >= 11 && quantity <= 99){
            copy_value = quantity * values2.F
            document.getElementById("unity_copy_span").innerHTML = values2.F
        }
        else if(quantity >= 100 && quantity <= 500){
            copy_value = quantity * values2.G
            document.getElementById("unity_copy_span").innerHTML = values2.G
        }
        else if(quantity >= 1000){
            copy_value = quantity * values1.H
            document.getElementById("unity_copy_span").innerHTML = values1.H
        }
        document.getElementById("total_copy_span").innerHTML = copy_value.toFixed(2)
        return parseFloat(copy_value.toFixed(2))
    }    
}


function bind_function(){
    let bind_value = 0
    for (let i = 0; i < 6; i++){
        if(document.getElementById("bind_" + i).value > 0) {
            if(document.getElementById("bind_" + i).name == "bind_input_0"){
                bind_value += document.getElementById("bind_" + i).value * values5.P
            }
            else if(document.getElementById("bind_" + i).name == "bind_input_1"){
                bind_value += document.getElementById("bind_" + i).value * values5.PP
            }
            else if(document.getElementById("bind_" + i).name == "bind_input_2"){
                bind_value += document.getElementById("bind_" + i).value * values5.M
            }
            else if(document.getElementById("bind_" + i).name == "bind_input_3"){
                bind_value += document.getElementById("bind_" + i).value * values5.G
            }
            else if(document.getElementById("bind_" + i).name == "bind_input_4"){
                bind_value += document.getElementById("bind_" + i).value * values5.GG
            }
            else if(document.getElementById("bind_" + i).name == "bind_input_5"){
                bind_value += document.getElementById("bind_" + i).value * values5.X
            }
        }
    }
    return parseFloat(bind_value.toFixed(2))
}

function reload_function(){
    location.reload()
}