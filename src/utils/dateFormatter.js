const dateFormatter = (val) => {
    const date = new Date(val)
    return `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`
}

export default dateFormatter