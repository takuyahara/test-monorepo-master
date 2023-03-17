/**
 * Class to greet.
 */
class Greeter {
  /**
   * Static method that greets.
   * @param {"en"|"fr"} lang
   * @return {string}
   */
  static greet(lang = "en") {
    const MESSAGE = {
      en: "Hello world.",
      fr: "Bonjour le monde.",
    };
    if (!MESSAGE.hasOwnProperty(lang)) {
      return "";
    }
    return MESSAGE[lang];
  }
}

exports.Greeter = Greeter;
