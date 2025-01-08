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