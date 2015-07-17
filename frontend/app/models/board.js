import DS from 'ember-data';

export default DS.Model.extend({
  expired: DS.attr('date'),
  isRandom: DS.attr('boolean')
  // todo: add has_many rel to chores
});
