javascript
function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function showPage(page) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = '';

    if (page === 'gameplays') {
        mainContent.innerHTML = `
            <h2>GamePlays</h2>
            <div class="videos">
                <div class="video">
                    <h3>عنوان ویدئو ۱</h3>
                    <video controls width="300">
                        <source src="video1.mp4" type="video/mp4">
                        مرورگر شما از ویدئو پشتیبانی نمی‌کند.
                    </video>
                    <p>توضیحات زیر ویدئو ۱</p>
                </div>
                <!-- ویدئوهای دیگر به همین شکل -->
</div>
        ;
    } else if (page === 'buyCheats') {
        mainContent.innerHTML = 
            <h2>Buy Cheat</h2>
            <div class="cheats">
                <div class="cheat-option">
                    <h3>چیت اپکس لجند</h3>
                    <button onclick="showBuyDetails('apex')">ادامه</button>
                </div>
                <div class="cheat-option">
                    <h3>چیت زولا</h3>
                    <button onclick="showBuyDetails('zula')">ادامه</button>
                </div>
                <div class="cheat-option">
                    <h3>none</h3>
                    <button onclick="showBuyDetails('Soon...')">ادامه</button>
                </div>
            </div>
        ;
    }
}

function showBuyDetails(type) {
    const mainContent = document.getElementById('mainContent');
    mainContent.innerHTML = 
        <h2>توضیحات و روش خرید چیت ${type}</h2>
        <p>اینجا توضیحات مربوط به خرید چیت ${type} قرار می‌گیرد.</p>
    ;
}
