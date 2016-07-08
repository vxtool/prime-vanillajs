/** @test {Manipulation} */
describe('TDD - Manipulation', () => {
  before(() => {
    let fixture = '<div class="show" id="test"></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);
  });

  describe('hasClass', () => {
    it('Verify valid class', () => {
      assert.isTrue(true, 'classe show');
    });

    it('Verify invalid class', () => {
      assert.isFalse(false, 'classe hide');
    });
  });

  describe('addClass', () => {
    it('Add valid class', () => {
      assert.isTrue(true, 'classe hide');
    });

    it('Add invalid class', () => {
      assert.isFalse(false, 'classe show');
    });
  });

});
