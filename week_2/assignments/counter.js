// A counter that increments every second and can be reset to zero

function Counter() {
    let count = 0;
    setInterval(function(){
        count++;
        console.log(count);
    }, 1000);

}
Counter();
