function postFunction(){
    var puttext = document.getElementById("MyText").value;

    var topic = document.getElementById("topic1");
    var comment1 =  document.getElementById("comment1");
    var comment2 =  document.getElementById("comment2");

    if (topic.innerHTML == "" ){
        topic.innerHTML = puttext;
    }
    else if (comment1.innerHTML == "" ){
        comment1.innerHTML = puttext;
    }
    else if (comment2.innerHTML == "" ){
        comment2.innerHTML = puttext;
    }
}

function clearFunction(){
    document.getElementById("MyText").value = "";
    document.getElementById("MyText").innerHTML = "";
    document.getElementById("topic1").innerHTML = "";
    document.getElementById("comment1").innerHTML = "";
    document.getElementById("comment2").innerHTML = "";
}


