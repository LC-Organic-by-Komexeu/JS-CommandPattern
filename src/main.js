import 點餐系統 from './Receiver.js'
import 點餐機 from './Invoker.js'

const 高檔點餐系統 = new 點餐系統()
const 平板點餐機 = new 點餐機()

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.invoke').forEach((e) => {
        e.addEventListener('change', (invoker) => {
            const command = invoker.currentTarget.dataset.bind
            const content = invoker.currentTarget.value
            平板點餐機.點餐(高檔點餐系統, {
                指令: command,
                內容: content
            })
        })
    });

    document.querySelector('.execute').addEventListener('click', async (e) => {
        console.log('製作中請稍後...')
        const 做好的飲料 = await 平板點餐機.點完了快做(高檔點餐系統)
        console.log('得到飲料:')
        console.log(做好的飲料)
    });
});
