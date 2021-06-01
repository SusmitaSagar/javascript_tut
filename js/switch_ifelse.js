console.log(' my js practise');
const age = 999;
if(age ==20){
    console.log('age is 20');
}
//=== check type and value both string and magnitude here
else if (age==44){ //if this match then it wont go furter evalution
    console.log('age is 44')
}
else{
    console.log('age is not 20');
}
// const vari = 55;
if (typeof vari !== 'undefined'){
    console.log('vari is defined');
}
else{
    console.log('vari is not defined');
}
//boolean
const doesWalk =true; //this can descide
if (doesWalk && age>40){ //&& for both ,||for or
    console.log("you can walk");
}
else{
    console.log(`you can't walk`);
}
//switch
switch (age) {
    case 11:
        console.log("you are 11");
        break;//use only one case
        case 22:
        console.log("you are 22");
        break;
        case 33:
        console.log("you are 33");
        break;
        case 44:
        console.log("you are 44");
        break;

    default:
        console.log("you are senior citizen")
        break;
}
