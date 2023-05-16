import Presenter from './presenter.js';

/**
 * @extends {Presenter<FilterView>}
 */
class FilterPresenter extends Presenter {
  /**
   * @override
   * @return {FilterViewState}
   */
  createViewState() {
    /**
     * @type {Array<FilterType>}
     */
    const types = ['everything', 'future', 'past', 'present'];

    const items = types.map((it) => ({
      value: it,
      isSelected: it === 'future',
      isDisabled: false
    }));

    return {items};
  }
}

export default FilterPresenter;
