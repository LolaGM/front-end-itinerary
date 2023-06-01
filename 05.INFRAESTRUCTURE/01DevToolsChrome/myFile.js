function onClickEvent(){
    //alert("You are a great learner!");

    let myCount = 1;
    alert("You completed " + myCount + " exercise");

    myCount = nestedCall(myCount);
    alert("You completed " + myCount + " exercise");
}

function nestedCall(count){
    console.log("reached NestedCall");
    return count + 6;
}
