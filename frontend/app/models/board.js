import DS from 'ember-data';

export default DS.Model.extend({
  expiryDate: DS.attr('date'),
  isRandom: DS.attr('boolean')
  // todo: add has_many rel to chores
}).reopenClass({
	FIXTURES: [
		{
			id: 1,
			expiryDate: 'Fri, 31 Jul 2015 10:10:10 GMT',
			isRandom: true
		}
	]
});
