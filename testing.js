export function test(){
  console.log("now testing starts")
}

export function tested(){
  console.log("and test ends")
}

export function write(ctx){
  let divv=document.getElementById(ctx)
  divv.innerHTML="test result is satisfying"
}