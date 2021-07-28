const args = process.argv.slice(2);
const timer = (arr) => {
  if (arr.length === 0) {
        return;
  }
  for (let e of arr){
    if ( e < 0) {
        continue;
    }
    if (isNaN(e)) {
        continue;         
    }
    setTimeout(()=>{
        process.stdout.write('.....');
        console.log(e);
    },e * 300);
  }
}
timer(args);




