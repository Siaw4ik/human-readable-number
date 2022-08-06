module.exports = function toReadable (number) {
    const one = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const ten = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) {
        return one[number];
    } else if (number < 100) {
        return ten[Math.floor(number / 10)] + ((number % 10 === 0) ? '' : ' ' + one[number % 10]);
    } else {
        return one[Math.floor(number / 100)] + ' hundred' + ((number % 100 === 0) ? '' : ' ' + toReadable([number % 100]));
    }

}
