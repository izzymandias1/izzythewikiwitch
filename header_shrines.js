let appHeader = `
        <style>
        :root{
            --text-color-base-dark: #1c2734;
            --izzy-gold: #b0ac7d;
            --izzy-dark-gold: #84815e;
            --izzy-navy: #2a293d;
            --izzy-mid-navy: #232233;
            --izzy-dark-navy: #201f2e;
        }
            /* Top navigation */
.topnav {
    background-color: var(--text-color-base-dark);
    overflow: hidden;
    max-width: var(--body-width);
    padding: 5px;
    display: flex;
    justify-content: center;
}

.topnav a {
    float: left;
    text-align: center;
    color: var(--izzy-gold);
    padding: 14px 16px;
}

.topnav a:visited {
    color: var(--izzy-dark-gold);
}

.topnav a:hover {
    background-color: var(--izzy-gold);
    color: var(--izzy-navy);
}
/* Add a color to the active/current link */
.topnav a.active {
  background-color: var(--izzy-dark-gold);
  color: var(--izzy-navy);
}
    /* The dropdown container */
    .dropdown {
        float: left;
        overflow: hidden;
    }
        /* Dropdown button */
.dropdown .dropbtn {
  font-size: 16px;
  border: none;
  outline: none;
  color: var(--izzy-dark-gold);
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--izzy-navy);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  float: none;
  color: var(--izzy-dark-gold);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  color: var(--izzy-navy);
  background-color: var(--izzy-gold);
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
    #shrines {
        background-color: var(--izzy-dark-gold);
        color: var(--izzy-dark-navy);
    }
        </style>
        <div class="topnav">
            <a id="index" href="index.html">what</a>
            <a id="about" href="about.html">who</a>
            <a id="portfolio" href="portfolio.html">portfolio</a>
            <a id="monsterranking" href="monsterranking.html">monster</a>
            <div class="dropdown">
            <button class="dropbtn" id="shrines">shrines
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <a href="shrines/signalis.html">signalis</a>
                    <a href="shrines/greenyuri.html">the guy she was interested in wasn't a guy at all<br/> (aka the green yuri)</a>
                </div>
            </div>
        </div>`;
document.getElementById("app-header").innerHTML = appHeader;