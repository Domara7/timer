const beep = () => {
  process.stdout.write('\x07');
  process.stdout.write('.');

}
const scheduleBeep = (delay) => {
  delay = Number(delay)
  if (!isNaN(delay) && delay > 0) {

    setTimeout(() => {
      beep()
    }, delay * 1000)

  }
}

const numbers = process.argv.slice(2)

for (const numb of numbers) {
  scheduleBeep(numb)
}
