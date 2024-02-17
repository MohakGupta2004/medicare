const converTime = time=>{
    const timeParts = time.split(':')
    let hours = parseInt(timeParts[0])
    let minutes = parseFloat(timeParts[1])

    let meridie = 'am'
    if (hours >= 12) {
        meridie = 'pm'
        if (hours>12) {
            hours-=12
        }
    }
    return hours.toString().padStart(2) +":"+ minutes.toString().padStart(2,'0') + " " + meridie
}

export default converTime