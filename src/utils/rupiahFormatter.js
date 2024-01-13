const rupiahFormatter = (val) => {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    })

    return formatter.format(val)
}   

export default rupiahFormatter