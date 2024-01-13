const dateFormatter = (val) => {
    const date = new Date(val).toLocaleDateString()
    return date
}

export default dateFormatter