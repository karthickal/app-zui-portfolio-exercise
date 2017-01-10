import DS from 'ember-data';

export default DS.Model.extend({
	code: DS.attr('string'),
  	company: DS.attr('string'),
  	points: DS.attr('string')
});
