Tinytest.add('Unit - BlazeLayout._regionsToData', function (test) {
  let data = BlazeLayout._regionsToData({aa: 10, bb: "hello"});
  test.equal(data.aa(), 10);
  test.equal(data.bb(), "hello");
});

Tinytest.addAsync('Unit - BlazeLayout._updateRegions', function (test, done) {
  let aa = null;
  let bb = null;
  let data = BlazeLayout._regionsToData({aa: 10, bb: "hello"});
  let c1 = Tracker.autorun(function (c) {
    aa = data.aa();
  });
  let c2 = Tracker.autorun(function (c) {
    bb = data.bb();
  });
  BlazeLayout._updateRegions({aa: 20});
  Meteor.setTimeout(function () {
    test.equal(aa, 20);
    test.equal(bb, "hello");
    done();
  }, 100);
});
