(function () {
  "use strict";

  /* =========================================================
     CHABAD PASO ROBLES FUNDRAISING CAMPAIGNS
     ========================================================= */

  var CAMPAIGNS = {
    highHolidays: {
      urlMatch: "/wall/true",

      title: "Our Caring Wall",

      introHtml:
        '<h3>We are grateful to our generous and caring friends</h3>' +
        '<p>Each name below represents someone who has made the High Holidays possible.</p>' +
        '<p>On behalf of our Jewish community, we thank you.</p>' +
        '<p class="caring-blessing"><strong>May you &amp; yours be blessed with a Happy &amp; Sweet New Year.</strong></p>',

      spreadsheetId: "1Xv96paVyLnLUE_H6Hej0X8A1WQRDpS4K8-Q74Ebhwfw",

      donorSheet: "ChaiClubDisplay",

      campaignSheet: "Campaign",

      fallbackCurrent: 5272,
      fallbackGoal: 18000
    }
  };


  /* =========================================================
     FIND ACTIVE CAMPAIGN
     ========================================================= */

  function getActiveCampaign() {
    var path = window.location.pathname.toLowerCase();

    for (var key in CAMPAIGNS) {
      if (
        Object.prototype.hasOwnProperty.call(CAMPAIGNS, key) &&
        path.indexOf(CAMPAIGNS[key].urlMatch.toLowerCase()) !== -1
      ) {
        return CAMPAIGNS[key];
      }
    }

    return null;
  }


  /* =========================================================
     STYLES
     ========================================================= */

  function addStyles() {
    if (document.getElementById("chabad-fundraising-styles")) return;

    var style = document.createElement("style");
    style.id = "chabad-fundraising-styles";

    style.textContent = `
      .caring-campaign {
        box-sizing: border-box;
        width: 100%;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        color: #333;
      }

      .caring-campaign *,
      .caring-campaign *::before,
      .caring-campaign *::after {
        box-sizing: border-box;
      }

      .caring-intro {
        padding: 12px 20px 24px;
      }

      .caring-title {
        font-family: "Oleo Script", cursive;
        font-size: 60px;
        line-height: 1.1;
        color: #c19500;
        margin: 5px auto 0;
        letter-spacing: 0.3px;
        text-shadow:
          -1px -1px 0 #6b3700,
           1px -1px 0 #6b3700,
          -1px  1px 0 #6b3700,
           1px  1px 0 #6b3700,
           0 2px 4px rgba(0,0,0,0.1);
      }

      .caring-underline {
        width: 220px;
        height: 30px;
        margin: 14px auto 26px;
        background-image: url("https://lh3.googleusercontent.com/d/1LZi7AmF89k_cehSpFaB95kYHxEnDeR1H");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }

      .caring-intro h3 {
        font-size: 21px;
        line-height: 1.45;
        margin: 0 auto 2px;
        max-width: 800px;
      }

      .caring-intro p {
        font-size: 18px;
        line-height: 1.5;
        margin: 0 auto;
        max-width: 800px;
      }

      .caring-intro .caring-blessing {
        margin-top: 8px;
      }

      .caring-bottom {
        padding: 28px 20px 45px;
      }

      .fund-ticker {
        max-width: 720px;
        margin: 0 auto 35px;
        padding: 18px;
        background: #fff;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0,0,0,0.06);
        text-align: left;
      }

      .fund-ticker-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        flex-wrap: wrap;
      }

      .fund-ticker-label {
        font-weight: 700;
        font-size: 18px;
        color: #6b3700;
      }

      .fund-ticker-text {
        font-size: 15px;
        color: #444;
        margin-top: 2px;
      }

      .fund-ticker-percent {
        font-weight: 700;
        font-size: 20px;
        color: #b8860b;
      }

      .fund-ticker-track {
        margin-top: 12px;
        background: #eee;
        border-radius: 8px;
        overflow: hidden;
      }

      .fund-ticker-bar {
        height: 14px;
        width: 0;
        background: linear-gradient(90deg,#ffd700,#ffcc33);
        transition: width 1s ease;
      }

      .caring-wall-heading {
        font-family: "Oleo Script", cursive;
        font-size: 38px;
        color: #c19500;
        margin: 5px auto 20px;
        text-shadow:
          -1px -1px 0 #6b3700,
           1px -1px 0 #6b3700,
          -1px  1px 0 #6b3700,
           1px  1px 0 #6b3700;
      }

      .caring-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 10px;
        justify-items: stretch;
        max-width: 1000px;
        margin: 0 auto;
      }

      .caring-grid div {
        background-color: #fffef5;
        border: 2px solid #ffd700;
        min-height: 70px;
        width: 100%;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 8px;
        font-weight: bold;
        color: #6b3700;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 13px;
        line-height: 1.2;
        position: relative;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        transition:
          background 0.3s ease,
          color 0.3s ease,
          transform 3s ease-in-out;
        transform-origin: center center;
      }

      .caring-grid div:hover {
        background: #ffd700;
        color: #6b3700;
        transform: scale(1.05) rotate(360deg);
        box-shadow: 0 4px 10px rgba(0,0,0,0.6);
        z-index: 1;
      }

      .caring-load-message {
        font-size: 15px;
        color: #666;
        padding: 15px;
      }

      @media screen and (max-width: 580px) {
        .caring-intro {
          padding: 10px 15px 22px;
        }

        .caring-title {
          font-size: 38px;
        }

        .caring-underline {
          margin-bottom: 20px;
        }

        .caring-intro h3 {
          font-size: 18px;
        }

        .caring-intro p {
          font-size: 16px;
        }

        .caring-bottom {
          padding: 22px 10px 35px;
        }

        .fund-ticker {
          margin-left: 5px;
          margin-right: 5px;
        }

        .caring-wall-heading {
          font-size: 32px;
        }

        .caring-grid {
          grid-template-columns: repeat(3, 1fr);
          gap: 7px;
          width: 95%;
        }

        .caring-grid div {
          min-height: 65px;
          font-size: 12px;
          padding: 6px;
        }
      }
    `;

    document.head.appendChild(style);
  }


  /* =========================================================
     FONT
     ========================================================= */

  function addFont() {
    if (document.getElementById("caring-oleo-font")) return;

    var link = document.createElement("link");
    link.id = "caring-oleo-font";
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap";

    document.head.appendChild(link);
  }


  /* =========================================================
     TOP INTRO
     ========================================================= */

  function createIntro(campaign) {
    var container = document.createElement("div");
    container.className = "caring-campaign caring-intro";

    container.innerHTML =
      '<div class="caring-title">' +
      campaign.title +
      "</div>" +
      '<div class="caring-underline"></div>' +
      campaign.introHtml;

    return container;
  }


  /* =========================================================
     BOTTOM SECTION
     ========================================================= */

  function createBottom() {
    var container = document.createElement("div");
    container.className = "caring-campaign caring-bottom";

    container.innerHTML = `
      <div class="fund-ticker">
        <div class="fund-ticker-head">
          <div>
            <div class="fund-ticker-label">Campaign Progress</div>
            <div class="fund-ticker-text" id="fund-text">
              Loading campaign progress...
            </div>
          </div>

          <div class="fund-ticker-percent" id="fund-percent">0%</div>
        </div>

        <div class="fund-ticker-track">
          <div class="fund-ticker-bar" id="fund-bar"></div>
        </div>
      </div>

      <div class="caring-grid" id="caring-donor-grid">
        <div class="caring-load-message">Loading...</div>
      </div>
    `;

    return container;
  }


  /* =========================================================
     CAMPAIGN PROGRESS
     ========================================================= */

  function showProgress(current, goal) {
    current = Number(current);
    goal = Number(goal);

    if (!isFinite(current)) current = 0;
    if (!isFinite(goal) || goal <= 0) goal = 1;

    var percent = Math.min(Math.round((current / goal) * 100), 100);

    var text = document.getElementById("fund-text");
    var percentBox = document.getElementById("fund-percent");
    var bar = document.getElementById("fund-bar");

    if (text) {
      text.textContent =
        "$" +
        current.toLocaleString() +
        " raised of $" +
        goal.toLocaleString() +
        " goal";
    }

    if (percentBox) {
      percentBox.textContent = percent + "%";
    }

    if (bar) {
      window.setTimeout(function () {
        bar.style.width = percent + "%";
      }, 100);
    }
  }


  function loadProgress(campaign) {
    showProgress(
      campaign.fallbackCurrent,
      campaign.fallbackGoal
    );

    var url =
      "https://opensheet.elk.sh/" +
      campaign.spreadsheetId +
      "/" +
      encodeURIComponent(campaign.campaignSheet);

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Campaign sheet unavailable");
        }

        return response.json();
      })
      .then(function (data) {
        if (!data || !data.length) return;

        var row = data[0];

        var current =
          row.Current ||
          row.current ||
          row.Raised ||
          row.raised;

        var goal =
          row.Goal ||
          row.goal;

        if (current !== undefined && goal !== undefined) {
          showProgress(
            String(current).replace(/[$,]/g, ""),
            String(goal).replace(/[$,]/g, "")
          );
        }
      })
      .catch(function (error) {
        console.log(
          "Using fallback campaign progress:",
          error.message
        );
      });
  }


  /* =========================================================
     DONOR WALL
     ========================================================= */

  function loadDonors(campaign) {
    var grid = document.getElementById("caring-donor-grid");
    if (!grid) return;

    var url =
      "https://opensheet.elk.sh/" +
      campaign.spreadsheetId +
      "/" +
      encodeURIComponent(campaign.donorSheet);

    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Donor sheet unavailable");
        }

        return response.json();
      })
      .then(function (data) {
        grid.innerHTML = "";

        if (!data || !data.length) {
          grid.innerHTML =
            '<div class="caring-load-message">No names to display.</div>';
          return;
        }

        data.forEach(function (entry) {
          var name = entry.Name ? entry.Name.trim() : "";

          if (!name) return;

          var box = document.createElement("div");
          box.textContent = name;
          grid.appendChild(box);
        });
      })
      .catch(function (error) {
        console.error("Error loading donor wall:", error);

        grid.innerHTML =
          '<div class="caring-load-message">The Caring Wall could not be loaded.</div>';
      });
  }


  /* =========================================================
     INITIALIZE
     ========================================================= */

  function init() {
    var campaign = getActiveCampaign();
    if (!campaign) return;

    if (document.getElementById("caring-campaign-loaded")) return;

    var donateWrapper = document.getElementById("donate-wrapper");
    if (!donateWrapper || !donateWrapper.parentNode) return;

    addStyles();
    addFont();

    var marker = document.createElement("div");
    marker.id = "caring-campaign-loaded";
    marker.style.display = "none";
    document.body.appendChild(marker);

    var intro = createIntro(campaign);
    donateWrapper.parentNode.insertBefore(
      intro,
      donateWrapper
    );

    var bottom = createBottom();

    donateWrapper.parentNode.insertBefore(
      bottom,
      donateWrapper.nextSibling
    );

    loadProgress(campaign);
    loadDonors(campaign);
  }


  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
