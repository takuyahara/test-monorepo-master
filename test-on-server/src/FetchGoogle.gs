class FetchGoogle {
  static success() {
    return UrlFetchApp.fetch("https://www.google.com/", {
      muteHttpExceptions: true,
    });
  }
  static fail() {
    return UrlFetchApp.fetch("https://www.google.com/google/apps/script", {
      muteHttpExceptions: true,
    });
  }
}
