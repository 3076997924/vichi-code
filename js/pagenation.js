$(function () {
    //   分页器
    $('.page').on('click', function () {
        $(this).addClass('current').siblings('.page').removeClass('current')
    })

    let size = 3;  //每页显示的条数
    let page = 10;  //页数
    let pagerCount = 5;   //显示的页数按钮数量
    let current = 1;  //当前选中的页数

    // // 显示内容列表
    // const contentItems = document.querySelector('.content-items');
    // const showContentItems = () => {
    //     // 每次遍历内容先清空
    //     contentItems.innerHTML = "";

    //     data.forEach((item, index) => {
    //         // 遍历计算方法  当前为第一页 一页数据 为 0 - 3个之间 第二页为 4-6个
    //         if (index >= (current - 1) * size && index < current * size) {
    //             const contentItem = document.createElement('div')
    //             contentItem.setAttribute('content-item');
    //             contentItem.innerHTML = `                    <a href="./journey_detail.html">
    //             <div class="content-img">
    //                 <img src="./images/con_item1.jpg" alt="">
    //                 <div class="item-bar">
    //                     自由行
    //                 </div>
    //             </div>
    //             <div class="content-msg">
    //                 <h4>越南芽庄6日5晚自由行</h4>
    //                 <p>市区海滨商圈4晚连住【庄点春意·与大海对话】畅游无边泳池|19元惠购网红哈瓦那skylight海景下午茶·足不出户可赏大海美景『下一步可选机场快速通关+奥戴小姐姐服务』继续你的仲夏梦！
    //                 </p>
    //                 <div class="content-msg-tag">
    //                     <div class="tag">攻略完备</div>
    //                     <div class="tag">度假村酒店</div>
    //                     <div class="tag">双酒店</div>
    //                 </div>
    //                 <div class="content-msg-price">
    //                     <span>¥<i>3654</i></span>起
    //                 </div>
    //             </div>
    //         </a>
    //         <div class="content-msg-btn">
    //             <a href="./journey_reserve.html">立即预订</a>
    //         </div>`
    //         contentItems.appendChild(contentItem)
    //         }
    //     });
    // }

    // 创建分页列表
    const pagenation = document.querySelector('.pagenation');
    const createPagination = () => {
        let pageBtn = `<div class="prev pagebtn">上一页</div>`

        if (current < 1 || current > page) {
            // 当前页数小于1 或者 大于总页数 
            throw `current 参数最小值为1 最大值为${page}`
        } else if (pagerCount < 5) {
            throw `pagerCount 参数值最小为5`
        } else if (page <= pagerCount) {
            // 如果总页数小于了要显示的数字按钮个数  就直接 遍历了  不需要显示省略按钮
            for (let i = 1; i <= page; i++) {
                pageBtn += `<div class="page pagebtn ${i == current ? 'current' : ''}">${i}</div>`
            }
        } else {
            // 定义两个参数 用来保存当前选中分页前后的显示的数字
            let beforeNumber = Math.floor(current - (pagerCount - 3) / 2),
                afterNumber = current + (pagerCount - 3) / 2;
            // 显示左省略按钮
            if (current >= pagerCount - 1) {
                pageBtn += `<div class="page pagebtn">1</div><div class="ellaspe">···</div>`
            }

            // 解决页数为1 左侧为1  afterNumber 为出去省略后面的一个按钮
            // 点击前三个不分页，到 4（针对pagerCount参数来说）
            if (current >= 1 && current < pagerCount - 1) {
                beforeNumber = 1;
                afterNumber = pagerCount - 1;
            } else if (current <= page && current > page - (pagerCount - 2)) {
                beforeNumber = page - (pagerCount - 2);
                afterNumber = page;
            }
            for (let i = beforeNumber; i <= afterNumber; i++) {
                pageBtn += `<div class="page pagebtn ${i == current ? 'current' : ''}">${i}</div>`
            }
        }

        // 显示右省略按钮
        if (current <= page - (pagerCount - 2)) {
            pageBtn += `<div class="ellaspe">···</div>
        <div class="page pagebtn">${page}</div>`
        }

        pageBtn += `<div class="next pagebtn">下一页</div>`;
        pagenation.innerHTML = pageBtn;

        // 点击数字按钮
        const pageNumbers = document.querySelectorAll('.page');
        pageNumbers.forEach((item) => {
            item.addEventListener('click', function () {
                // item为字符串， 需要转换为数字
                current = parseInt(item.innerHTML)
                createPagination()
            })
        })

        // 下一页
        const pageBtnNext = document.querySelector('.next');
        pageBtnNext.addEventListener('click', () => {
            if (current !== page) {
                current++;
                createPagination()
            }
        })

        // 上一页
        const pageBtnPrev = document.querySelector('.prev');
        pageBtnPrev.addEventListener('click', function () {
            if (current !== 1) {
                current--;
                createPagination()
            }
        })
    }
    createPagination()
})