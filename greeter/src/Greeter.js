/**
 * Class to greet.
 */
class Greeter {
  /**
   * Static method that greets.
   * @param {"en"|"fr"|"ja"} lang
   * @return {string}
   */
  static greet(lang = "en") {
    const MESSAGE = {
      en: "Hello world.",
      fr: "Bonjour le monde.",
      ja: "こんにちは世界。",
    };
    if (!MESSAGE.hasOwnProperty(lang)) {
      return "";
    }
    return MESSAGE[lang];
  }
}

exports.Greeter = Greeter;
