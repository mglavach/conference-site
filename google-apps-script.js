/**
 * EduCon 2026 — Google Apps Script Web App
 *
 * SETUP (one-time, ~5 minutes):
 * ──────────────────────────────
 * 1. Go to https://sheets.google.com and create a new spreadsheet.
 *    Name it "EduCon 2026 Registrations".
 *
 * 2. In the spreadsheet, go to Extensions > Apps Script.
 *
 * 3. Delete everything in the editor and paste this entire file.
 *
 * 4. Click Deploy > New Deployment.
 *    - Type: Web app
 *    - Execute as: Me
 *    - Who has access: Anyone   ← required so the registration form can POST
 *    Click Deploy, then Authorize when prompted (use your Google account).
 *
 * 5. Copy the Web App URL that appears (looks like:
 *    https://script.google.com/macros/s/AKfycb.../exec)
 *
 * 6. In index.html, find this line near the top of the <script> block:
 *       const GAS_ENDPOINT = "";
 *    Paste your URL between the quotes:
 *       const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycb.../exec";
 *
 * 7. In admin.html, open the dashboard, enter your admin password, and
 *    paste the same URL into the Google Sheets field and click Save.
 *    The banner will turn green confirming the connection.
 *
 * From that point on, every new registration on your site is instantly
 * written to a row in the spreadsheet. You can share the sheet with
 * co-organizers without giving them site access.
 */

const SHEET_NAME = "Registrations";

/**
 * Receives POST requests from index.html and appends a row to the sheet.
 * Also handles CORS preflight OPTIONS requests.
 */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = getOrCreateSheet();

    sheet.appendRow([
      new Date(),              // Timestamp
      data.sessionId,          // Session ID
      data.sessionTitle,       // Session title
      data.track,              // Track
      data.day,                // Day
      data.time,               // Time slot
      data.room,               // Room
      data.name,               // Registrant name
      data.email,              // Registrant email
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/** Handles CORS preflight from the browser. */
function doGet(e) {
  return ContentService
    .createTextOutput("EduCon 2026 registration endpoint is active.")
    .setMimeType(ContentService.MimeType.TEXT);
}

/** Returns the sheet, creating it with a header row if it doesn't exist. */
function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow([
      "Timestamp", "Session ID", "Session Title", "Track",
      "Day", "Time", "Room", "Name", "Email"
    ]);
    sheet.setFrozenRows(1);
    sheet.getRange(1, 1, 1, 9).setFontWeight("bold");
  }
  return sheet;
}
