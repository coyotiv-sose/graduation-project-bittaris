const Period = require('./period')
const User = require('./user')
const axios = require('axios')

const penelope = new User('peepeePatient0')
penelope.addPeriod('11.23.2023', '11.30.2023')
penelope.addPeriod('10.21.2023', '10.28.2023')

const hannah = new User('hannahbutbackwards')
hannah.addPeriod('11.16.2023', '11.21.2023')

const jules = new User('julesssss')
jules.addPeriod('11.05.2023', '11.09.2023')

console.log('_____________________________________Jules tests_____________________________________')

console.log('Jules predicted ovulation: 23/11/2023. Test returns: ' + jules.period.predictOvulation())
//console.log('Jules bleed length: 4. Test returns: ' + jules.period.calculateBleedLength())

console.log('_____________________________________Hannah tests_____________________________________')

console.log('Hannahs predicted ovulation: 30/11/2023. Test is returs: ' + hannah.period.predictOvulation())
//console.log('Hannahs bleed length: 5. Test returns: ' + hannah.period.calculateBleedLength())

console.log('_____________________________________Penelope tests_____________________________________')

console.log('Penelope predicted ovulation: 13/12/2023. Test is returns: ' + penelope.period.predictOvulation())
//console.log('Penelope bleed length: 7. Test returns: ' + penelope.period.calculateBleedLength())
