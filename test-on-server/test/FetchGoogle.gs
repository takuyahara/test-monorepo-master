function testFetchGoogle() {
  console.log(
    "Response code is 200: " + (FetchGoogle.success().getResponseCode() === 200)
  );
  console.log(
    "Response code is not 200: " +
      (FetchGoogle.fail().getResponseCode() !== 200)
  );
}
