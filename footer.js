let appFooter = `
<style>
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
    .overhang {
        position: relative;
        bottom: 19.5rem;
        left: 150px;
    }
    .dizzy{
        width: 400px;
    }
    .div_top{
        position: relative;
        margin-top: 50px;
        bottom: 3rem;
    }
}
</style>
<footer class="footertext">    
        <div>
            <div class="div_top">
                <a href="https://bsky.app/profile/izzythewikiwitch.bsky.social">bsky</a>
                <div class="tooltip"><a href="https://discordapp.com/users/384753654613278722"><i class="fa-brands fa-discord"></i>discord</a>
                    <span class="tooltiptext">@izzymandias</span></div>
            </div
        </div>
        <div id="buttonscontainer" class="buttonscontainer"></div>
        <a href="passtheyuri.html" style="text-decoration: none;"><code class="horus">i'm gay and you're also gay if you're reading this. sucks to suck bozo.</code></a><br />
            <p>izzythewikiwitch <a href="yourenotmeanttobebackhere.html">©</a> 2025  <a href="smugjug.html"><img src="images/smugjugs/SmugJug.gif" alt="smug jug. he's a jug who is smug." style="width:0.5em;vertical-align: middle;display: inline;"></a></p>
         <div class="overhang">
            <img src="images/swingin (no overhang).gif" alt="dizzy, her leg swinging over the footer" class="dizzy">
        </div>
    </footer>`;
document.getElementById("app-footer").innerHTML = appFooter;