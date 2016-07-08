import { hasClass, addClass, removeClass } from '../../source/utils/manipulation';

/** @test {Manipulation} */
describe('BDD - Manipulation', () => {
  let $element;

  before(() => {
    let fixture = '<div class="show" id="test"></div>';

    document.body.insertAdjacentHTML(
      'afterbegin',
      fixture);

    $element = document.getElementById('test');
  });

  describe('hasClass', () => {
    it('Verify valid class', () => {
      let isTrue = hasClass($element, 'show');
      assert.isTrue(isTrue, 'verdadeiro para a classe show');
    });

    it('Verify invalid class', () => {
      let isFalse = hasClass($element, 'hide');
      assert.isFalse(isFalse, 'falso para a classe hide');
    });
  });

  describe('addClass', () => {
    it('Add valid class', () => {
      addClass($element, 'hide');
      let isTrue = hasClass($element, 'hide');
      assert.isTrue(isTrue, 'verdadeiro para a classe hide');
    });

    it('Add invalid class', () => {
      addClass($element, 2);
      let isFalse = hasClass($element, 2);
      assert.isFalse(isFalse, 'falso para a classe show');
    });
  });

});
