// Minimal client-side toolbox starter with extended utilities

(function(){
  // Initialize a tiny demo: log readiness
  if (typeof console !== 'undefined') {
    console.log('Client-Side Toolbox loaded - ready to implement tools.');
  }

  // Lightweight JSON Beautifier helper
  window.jsonBeautify = function(input) {
    try {
      var str = (typeof input === 'string') ? input : JSON.stringify(input, null, 2);
      var parsed = JSON.parse(str);
      return JSON.stringify(parsed, null, 2);
    } catch (e) {
      return 'Invalid JSON: ' + (e && e.message ? e.message : e);
    }
  };

  // Improved CSV to JSON helper (Handles commas inside quotes)
  window.csvToJson = function(csv){
    const lines = csv.trim().split(/\r?\n/);
    if(lines.length === 0 || lines[0].trim() === '') return [];
    
    // Regex to split by comma, IGNORING commas inside double quotes
    const splitRegex = /,(?=(?:(?:[^"]*"){2})*[^"]*$)/;
    
    // Clean headers: remove quotes and trim
    const header = lines[0].split(splitRegex).map(h => h.replace(/^"|"$/g, '').trim());
    
    const rows = lines.slice(1).filter(l => l.trim().length > 0).map(line => {
      const vals = line.split(splitRegex).map(v => v.replace(/^"|"$/g, '').trim());
      const obj = {};
      header.forEach((k, i) => { 
        obj[k] = vals[i] || ''; 
      });
      return obj;
    });
    return rows;
  };

  // Improved CSV to SQL helper (Proper SQL syntax & escaping)
  window.csvToSql = function(csv, tableName){
    const rows = window.csvToJson(csv);
    if(!tableName) tableName = 'csv_data';
    if(!rows.length) return '';
    
    const cols = Object.keys(rows[0]);
    
    // Properly escape SQL strings (use single quotes, double up single quotes to escape)
    // Example: O'Connor -> 'O''Connor'
    const esc = v => {
      if (v === null || v === undefined || v === '') return 'NULL';
      if (!isNaN(v)) return v; // Keep numbers unquoted
      return "'" + String(v).replace(/'/g, "''") + "'";
    };

    // Wrap columns in backticks to prevent errors with spaces in header names
    const safeCols = cols.map(c => `\`${c}\``).join(', ');

    const inserts = rows.map(r =>
      `INSERT INTO ${tableName} (${safeCols}) VALUES (${cols.map(c => esc(r[c])).join(', ')});`
    );
    return inserts.join('\n');
  };
})();
// --- GLOBAL AD INJECTOR (GOOGLE ADSENSE READY) ---
document.addEventListener('DOMContentLoaded', () => {
  
  // 1. Your Google AdSense Credentials
  const PUBLISHER_ID = 'ca-pub-XXXXXXXXXXXXXXXX'; // Replace with your ID
  const AD_SLOT_ID = 'YYYYYYYYYY';              // Replace with your Ad Unit ID

  // 2. Load the Google AdSense Library dynamically (only once per page)
  if (!document.querySelector('script[src*="adsbygoogle.js"]')) {
    const adScript = document.createElement('script');
    adScript.async = true;
    adScript.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${PUBLISHER_ID}`;
    adScript.crossOrigin = "anonymous";
    document.head.appendChild(adScript);
  }

  // 3. Create the Manual Ad Unit Container
  const adContainer = document.createElement('div');
  adContainer.className = 'ad-container';
  adContainer.style.margin = '2rem auto';
  adContainer.style.textAlign = 'center';
  adContainer.style.maxWidth = '728px'; // Standard banner width
  adContainer.style.overflow = 'hidden';

  // The specific HTML structure Google requires for a manual ad
  adContainer.innerHTML = `
    <ins class="adsbygoogle"
         style="display:inline-block;width:100%;height:90px"
         data-ad-client="${PUBLISHER_ID}"
         data-ad-slot="${AD_SLOT_ID}"></ins>
  `;

  // 4. Inject it into the page exactly where we want it
  const toolHeader = document.querySelector('.tool-header');
  const homeHeader = document.querySelector('.hero');

  if (toolHeader) {
    toolHeader.parentNode.insertBefore(adContainer, toolHeader.nextSibling);
  } else if (homeHeader) {
    homeHeader.parentNode.insertBefore(adContainer, homeHeader.nextSibling);
  }

  // 5. Tell Google to fill the ad slot we just created
  try {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  } catch (e) {
    console.error("AdSense rendering error:", e);
  }
});
