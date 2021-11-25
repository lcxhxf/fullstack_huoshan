function log(target, name, descript) {
    console.log(target, name, descript);
} 


// es7 decoratar
@log
class Car {
    run() {
        console.log('Car is runing');
    }
}