let scrollBtns = `
 <style>
            .scrollBtn {
                display: none;
                position: fixed;
                bottom: 2em;
                right: 4em;
                z-index: 99;
                border: none;
                outline: none;
                background-color: var(--izzy-dark-navy);
                color: var(--izzy-gold);
                cursor: pointer;
                padding: 15px;
                border-radius: 10px;
                font-size: 1.5em;
            }
        
            .scrollBtn:hover {
                background-color: var(--izzy-dark-gold);
                color: var(--izzy-mid-navy);
            }
    </style>
    <button onclick="topFunction()" id="scrollBtnTop" class="scrollBtn" title="Go to top">↑</button>
    <button onclick="bottomFunction()" id="scrollBtnBottom" class="scrollBtn" title="Go to bottom">↓</button>
`
document.getElementById("scrollbtns").innerHTML = scrollBtns;