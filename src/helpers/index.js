export const formatAmount = amount => {
    return Number(amount).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const idGenrator = () => {
    const date = Date.now().toString(36)
    const rndm = Math.random().toString(36)

    return date+rndm
}

export const formatDate = (date) => {
    const newDate = new Date(date)
    const options = {
        year: 'numeric',
        month: 'short',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('en-EN', options)
}