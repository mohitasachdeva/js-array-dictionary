var number = 12;
for (var i = 2; i <= number; i++) {
    while (number % i == 0) {
        console.log(i);
        number /= i;
    }
}