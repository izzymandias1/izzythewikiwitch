let appFooter = `
<style>
    :root{
            --text-color-base-dark: #1c2734;
            --izzy-gold: #b0ac7d;
            --izzy-dark-gold: #84815e;
            --izzy-navy: #2a293d;
            --izzy-mid-navy: #232233;
            --izzy-dark-navy: #201f2e;
        }

div.buttonscontainer{
    max-width: var(--body-width);
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--izzy-gold);
    text-align: center;
    padding: 0.8em;
}

.buttonrow{
    display: flex;
}

.buttonrow a{
  text-decoration: none;
}

.buttoncolumn{
    flex: 33.33%;
    padding: 5px;
}
</style>
<div id="buttonscontainer" class="buttonscontainer"></div>
<div><p>izzythewikiwitch <a href="yourenotmeanttobebackhere.html">©</a> 2025</p></div>`;
document.getElementById("app-footer").innerHTML = appFooter;