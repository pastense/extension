// popup.js
document.getElementById("searchBox").addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      const query = e.target.value;
      const resDiv = document.getElementById("results");
      resDiv.innerHTML = "Searching...";
  
      try {
        const response = await fetch("http://127.0.0.1:8000/semantic_search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ q:query, k: 5 })
        });
        const data = await response.json();
        console.log(data)
        resDiv.innerHTML = data.results.map(r => {
          const domain = new URL(r.url).hostname;
          const favicon = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
          return `
            <div style="display: flex; align-items: center; margin-bottom: 6px;" class="result-row">
              <img src="${favicon}" width="16" height="16" class = "url-favicon" style="margin-right: 6px;">
              <a href="${r.url}" target="_blank" style="text-decoration: none; color: #1a73e8; font-size: 13px;">
                ${r.url}
              </a>
            </div>
          `;
        }).join("");
      } catch (err) {
        resDiv.innerHTML = "⚠️ Failed to search.";
        console.error(err);
      }
    }
  });
  