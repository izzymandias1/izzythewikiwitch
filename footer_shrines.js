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
<div class="buttonscontainer">
        <div class="buttonrow">
            <div class="buttoncolumn"><a><img src="https://i.imgur.com/Uzs8jxn.png" alt="Transfem (Transfem flag)"></a></div>
            <div class="buttoncolumn"><a href="https://ia802308.us.archive.org/24/items/am-i-a-lesbian-masterdoc/Am%20I%20a%20Lesbian_%20Masterdoc.pdf"><img src="../images/lesbian.png" alt="Femme (Lesbian flag)"></a></div>
            <div class="buttoncolumn"><a href="https://www.gutenberg.org/ebooks/42166"><img src="../images/sapphic.png" alt="Sapphic (Sapphic flag)"></a></div>
        </div>
        <div class="buttonrow">
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/adollzlife_brittany_surprise" alt="adollzlife_brittany_surprise" title="adollzlife_brittany_surprise" height="31" width="88"></div>
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/angelkwong_femalesiteonly.gif" alt="angelkwong_femalesiteonly" title="angelkwong_femalesiteonly" height="31" width="88"></div>
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/applelicious17_anime2.gif" alt="applelicious17_anime2" title="applelicious17_anime2" height="31" width="88"></div>
        </div>
        <div class="buttonrow">
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/Area51_Dimension_2375_logos_logo_freespeech_animated.GIF" alt="Area51_Dimension_2375_logos_logo_freespeech_animated" title="Area51_Dimension_2375_logos_logo_freespeech_animated" height="31" width="88"></div>
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/Area51_Cavern_8782_800x600.gif" alt="Area51_Cavern_8782_800x600" title="Area51_Cavern_8782_800x600" height="31" width="88"></div>
            <div class="buttoncolumn"><img loading="lazy" src="../images/buttons/Area51_Dimension_2375_logos_logo_eclipse.gif" alt="Area51_Dimension_2375_logos_logo_eclipse" title="Area51_Dimension_2375_logos_logo_eclipse" height="31" width="88"></div>
        </div>
            <p>izzythewikiwitch <a href="yourenotmeanttobebackhere.html">©</a> 2025</p>
</div>`;
document.getElementById("app-footer").innerHTML = appFooter;