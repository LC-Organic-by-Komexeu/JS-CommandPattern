export default class 點餐機 {
    constructor () {
        this.訂單內容 = new Map()
    }

    品項 (內容) {
        this.訂單內容.set('品項', 內容)
    }

    容量 (內容) {
        this.訂單內容.set('容量', 內容)
    }

    溫度 (內容) {
        this.訂單內容.set('溫度', 內容)
    }

    糖量 (內容) {
        this.訂單內容.set('糖量', 內容)
    }

    冰量 (內容) {
        this.訂單內容.set('冰量', 內容)
    }

    開始做 () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.訂單內容);
            }, 2000)
        })
    }
}
