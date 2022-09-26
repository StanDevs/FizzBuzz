const fizzBuzz = (number) => {
    if (isNaN(number)) {
        console.error(`"${number}" is not a number`)
        return
    }

    for (i = 1; i < number + 1; i++) {
        const res = []
        if (i % 3 === 0) res.push('Fizz')
        if (i % 5 === 0) res.push('Buzz')
        console.log(res.length > 0 ? res.join("") : i)
    }
}