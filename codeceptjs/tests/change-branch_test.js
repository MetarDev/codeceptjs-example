
Feature('Branch changing');

Scenario('Change from "master to "test-branch"', (I) => {
  I.amOnPage('https://github.com/IvanGrginovInf/codeceptjs-example');
  I.click('#branch-select-menu');

  const branchSelectorBtn = locate('.select-menu-item').withAttr({ 
    href: 'https://github.com/IvanGrginovInf/codeceptjs-example/tree/test-branch'
  });

  I.waitForElement(branchSelectorBtn, 30);
  I.click(branchSelectorBtn);

  I.seeInCurrentUrl('tree/test-branch');

  I.wait(30);
});
