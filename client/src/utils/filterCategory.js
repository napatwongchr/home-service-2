const filterCategory = {
    handleColorButton: (type) => {
        switch (type) {
            case 'บริการทั่วไป':
                return 'blue.100'
            case 'บริการห้องครัว':
                return 'purple.100'
            case 'บริการห้องน้ำ':
                return 'green.100'
            default:
                return 'blue.100'
        }
    },
    handleColorText: (type) => {
        switch (type) {
            case 'บริการทั่วไป':
                return 'blue.800'
            case 'บริการห้องครัว':
                return 'purple.900'
            case 'บริการห้องน้ำ':
                return 'green.900'
            default:
                return 'blue.800'
        }
    }
}

export default filterCategory;