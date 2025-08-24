let   让   让 let   让   让 yesButton = document   文档.getElementById("yes"   “是的”   “是的”);  // 获取 id 为 "yes" 的元素并赋值给变量 yesButtonyesButton = document.getElementById("yes");
let   让 let   让 noButton = document   文档.getElementById("no"   “不”);  // 获取 id 为 "no" 的元素并赋值给变量 noButtonnoButton = document.getElementById("no");
let   让 let   让 questionText = document   文档.getElementById("question"   “问题”);  // 获取 id 为 "question" 的元素并赋值给 questionText 变questionText = document.getElementById("question");
let   让 mainImage = document   文档.getElementById("mainImage");

let   让 clickCount = 0;  // 记录点击 No 的次数

// No 按钮的文字变化
const   常量 noTexts = [
    "真的不行嘛puq", 
    "要不再想想？", 
    "别选这个呗 ", 
    "金甲金长剑都给你", 
    "原谅我一次呗:("
];

// No 按钮点击事件
noButton.noButton.addEventListener("click"   “点击”, function   函数() {  这段代码没有给出完整的函数体，因此无法给出完整的翻译。但可以addEventListener("click"   “点击”, function   函数() {
       clickCount;clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let   让 yesSize = 1 * (clickCount * 1.2);let   让 yesSize = 1 + (clickCount * 1.2);
    是按钮.style   风格.transform   变换 = `scale(   规模(${是大小})`；yesButton.style   风格.transform   变换 = `scale(   规模(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let   让 noOffset = 点击次数 * 50let   让 noOffset = clickCount * 50;
    noButton.style   风格.transform   变换 = `translateX(   “translateX (${noOffset}px)`   px) ';  // noButton 的样式变换为水平平移 noOffset 像素。noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let   让 moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style   风格.transform   变换 = `translateY(-   “translateY (-${moveUp}px)`   px) ';  // 主图片的样式变换为垂直向上移动 moveUp 像素。mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style   风格.transform   变换 = `translateY(-   “translateY (-${moveUp}px)`   px) ';  // 将 questionText 的样式设置为沿 Y 轴向上移动 moveUp 像素。questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if   如果 (clickCount <= 5) {
        noButton.innerText = noTexts[点击次数 - 1noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    如果（点击次数等于1）主图片的src属性设为"images/shocked.png"   "images/震惊.png；// 震惊if (clickCount === 1) mainImage.src = "images/shocked   震惊了.png"; // 震惊
    如果点击次数为2，则将主图片的src属性设置为"images/think.png"   “图像/ think   认为.png”。// 思考if (clickCount === 2) mainImage.src = "images/think.png";   // 思考
    如果点击次数等于3，则将主图片的src属性设置为"images/angry.png"   “图像/ angry   愤怒的.png”。// 生气if (clickCount === 3) mainImage.src = "images/angry.png";   // 生气
    如果点击次数等于 4，则将主图像的源设置为“images/crying   哭.png”。// 哭if (clickCount === 4) mainImage.src = "images/crying.png";  // 哭
    if   如果 (clickCount >= 5) mainImage.src = "images/crying.png"   “图像/ crying   哭.png”;  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.是按钮添加事件监听器（点击），函数（）{addEventListener("click"   “点击”, function   函数() {
    document   文档.body   身体.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">蓝毛大王万岁( >᎑< )♡︎ᐝ</h1>
            <img src="images/hug.png" alt="拥抱" class="yes-image">
        </div>
    `;

    document   文档.body   身体.style   风格.overflow   溢出 = "hidden"   “隐藏”；
文档的主体部分的样式溢出属性设置为“隐藏”；document.body   身体.style   风格.overflow   溢出 = "hidden"   “隐藏”;

});
