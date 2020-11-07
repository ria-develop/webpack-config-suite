export * from './foo';
if (module.hot) {
  module.hot.accept('./foo', function () {
    console.log('Accepting the updated ./foo module!');
  });
}
